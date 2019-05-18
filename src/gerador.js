import { Random } from 'random-js';
import tabelaGoblin from './data/tabelaGoblin';
import tabelaDeAtributos from './data/tabelaDeAtributos';
import tabelaDeEquipamentos from './data/tabelaDeEquipamentos';

const rolarD6 = () => {
  const random = new Random();

  return random.integer(0, 5);
};

const gerarNomeDoGoblin = () => {
  const comecoDoNome = tabelaGoblin.comecoDoNome[rolarD6()];
  const fimDoNome = tabelaGoblin.fimDoNome[rolarD6()];

  return comecoDoNome + fimDoNome;
};

const calcularAtributoDeCombate = (coloracao, ocupacao) => {
  const atributoPorColoracao = tabelaDeAtributos.coloracao[coloracao].combate;
  const atributoPorOcupacao = tabelaDeAtributos.ocupacao[ocupacao].combate;

  return atributoPorColoracao + atributoPorOcupacao;
};

const calcularAtributoDeConhecimento = (coloracao, ocupacao) => {
  const atributoPorColoracao = tabelaDeAtributos.coloracao[coloracao].conhecimento;
  const atributoPorOcupacao = tabelaDeAtributos.ocupacao[ocupacao].conhecimento;

  return atributoPorColoracao + atributoPorOcupacao;
};

const calcularAtributoDeHabilidade = (coloracao, ocupacao) => {
  const atributoPorColoracao = tabelaDeAtributos.coloracao[coloracao].habilidade;
  const atributoPorOcupacao = tabelaDeAtributos.ocupacao[ocupacao].habilidade;

  return atributoPorColoracao + atributoPorOcupacao;
};

const calcularAtributoDeSorte = (coloracao, ocupacao) => {
  const atributoPorColoracao = tabelaDeAtributos.coloracao[coloracao].sorte;
  const atributoPorOcupacao = tabelaDeAtributos.ocupacao[ocupacao].sorte;

  return atributoPorColoracao + atributoPorOcupacao;
};

const gerarEquipamento = (ocupacao) => {
  if (ocupacao === 'Xamã') {
    return tabelaDeEquipamentos[ocupacao];
  }

  return tabelaDeEquipamentos[ocupacao][rolarD6()];
};

const goblinMaldito = () => {
  const coloracao = tabelaGoblin.coloracao[rolarD6()];
  const caracteristica = tabelaGoblin.caracteristica[rolarD6()];
  const ocupacao = tabelaGoblin.ocupacao[rolarD6()];
  const nome = gerarNomeDoGoblin();
  const combate = calcularAtributoDeCombate(coloracao, ocupacao);
  const conhecimento = calcularAtributoDeConhecimento(coloracao, ocupacao);
  const habilidade = calcularAtributoDeHabilidade(coloracao, ocupacao);
  const sorte = calcularAtributoDeSorte(coloracao, ocupacao);
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

  return goblin;
};

export default goblinMaldito;
