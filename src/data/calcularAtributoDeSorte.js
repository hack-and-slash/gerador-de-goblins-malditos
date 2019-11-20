import tabelaDeAtributos from './tabelaDeAtributos';

const calcularAtributoDeSorte = (coloracao, ocupacao) => {
  const atributoPorColoracao = tabelaDeAtributos.coloracao[coloracao].sorte;
  const atributoPorOcupacao = tabelaDeAtributos.ocupacao[ocupacao].sorte;

  return atributoPorColoracao + atributoPorOcupacao;
};

export default calcularAtributoDeSorte;
