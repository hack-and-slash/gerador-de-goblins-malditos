import tabelaDeAtributos from './tabelaDeAtributos';

const calcularAtributoDeConhecimento = (coloracao, ocupacao) => {
  const atributoPorColoracao = tabelaDeAtributos.coloracao[coloracao].conhecimento;
  const atributoPorOcupacao = tabelaDeAtributos.ocupacao[ocupacao].conhecimento;

  return atributoPorColoracao + atributoPorOcupacao;
};

export default calcularAtributoDeConhecimento;
