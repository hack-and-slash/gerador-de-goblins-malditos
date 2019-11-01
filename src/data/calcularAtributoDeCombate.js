import tabelaDeAtributos from './tabelaDeAtributos';

const calcularAtributoDeCombate = (coloracao, ocupacao) => {
  const atributoPorColoracao = tabelaDeAtributos.coloracao[coloracao].combate;
  const atributoPorOcupacao = tabelaDeAtributos.ocupacao[ocupacao].combate;

  return atributoPorColoracao + atributoPorOcupacao;
};

export default calcularAtributoDeCombate;
