import tabelaDeAtributos from './tabelaDeAtributos';

const calcularAtributoDeHabilidade = (coloracao, ocupacao) => {
  const atributoPorColoracao = tabelaDeAtributos.coloracao[coloracao].habilidade;
  const atributoPorOcupacao = tabelaDeAtributos.ocupacao[ocupacao].habilidade;

  return atributoPorColoracao + atributoPorOcupacao;
};

export default calcularAtributoDeHabilidade;
