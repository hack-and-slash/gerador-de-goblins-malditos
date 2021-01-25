import { rolarD6, rolarDadoD6 } from './data/dados';
import gerarCaracteristica from './data/caracteristicas';
import tabelaGoblin from './data/tabelaGoblin';
import tabelaDeAtributos from './data/tabelaDeAtributos';
import gerarNomeDoGoblin from './data/nomes';
import gerarEquipamento from './data/equipamentos';

const calcularAtributo = (coloracao, ocupacao, atributo) => {
  const atributoPorColoracao = tabelaDeAtributos.coloracao[coloracao][atributo];
  const atributoPorOcupacao = tabelaDeAtributos.ocupacao[ocupacao][atributo];

  return atributoPorColoracao + atributoPorOcupacao;
};

const goblinMaldito = () => {
  const coloracao = tabelaGoblin.coloracao[rolarD6()];
  const caracteristica = gerarCaracteristica(rolarDadoD6());
  const ocupacao = tabelaGoblin.ocupacao[rolarD6()];
  const nome = gerarNomeDoGoblin();
  const combate = calcularAtributo(coloracao, ocupacao, 'combate');
  const conhecimento = calcularAtributo(coloracao, ocupacao, 'conhecimento');
  const habilidade = calcularAtributo(coloracao, ocupacao, 'habilidade');
  const sorte = calcularAtributo(coloracao, ocupacao, 'sorte');
  const equipamento = gerarEquipamento(ocupacao);

  const goblin = {
    nome,
    coloracao,
    caracteristica,
    ocupacao,
    combate,
    conhecimento,
    habilidade,
    sorte,
    equipamento,
  };

  return { ...goblin };
};

export { rolarD6, gerarEquipamento, gerarNomeDoGoblin, calcularAtributo };

export default goblinMaldito;
