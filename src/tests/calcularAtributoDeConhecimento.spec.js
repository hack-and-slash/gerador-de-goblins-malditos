import calcularAtributoDeConhecimento from '../data/calcularAtributoDeConhecimento';
import tabelaDeAtributos from '../data/tabelaDeAtributos';

describe('calcularAtributoDeconhecimento', () => {
  const { coloracao } = tabelaDeAtributos;
  const { ocupacao } = tabelaDeAtributos;

  Object.keys(coloracao).forEach((cor) => {
    describe(`Quando a cor é ${cor}`, () => {
      Object.keys(ocupacao).forEach((cargo) => {
        describe(`Quando a ocupação é ${cargo}`, () => {
          const ocupacaoAtual = tabelaDeAtributos.ocupacao[cargo];
          const coloracaoAtual = tabelaDeAtributos.coloracao[cor];

          it('retorna a soma dos conhecimentos', () => {
            const resultado = ocupacaoAtual.conhecimento + coloracaoAtual.conhecimento;

            expect(calcularAtributoDeConhecimento(cor, cargo)).toBe(resultado);
          });
        });
      });
    });
  });
});
