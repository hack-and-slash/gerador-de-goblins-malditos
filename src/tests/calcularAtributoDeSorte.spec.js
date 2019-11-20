import calcularAtributoDeSorte from '../data/calcularAtributoDeSorte';
import tabelaDeAtributos from '../data/tabelaDeAtributos';

describe('calcularAtributoDeSorte', () => {
  const { coloracao } = tabelaDeAtributos;
  const { ocupacao } = tabelaDeAtributos;

  Object.keys(coloracao).forEach((cor) => {
    describe(`Quando a cor é ${cor}`, () => {
      Object.keys(ocupacao).forEach((cargo) => {
        describe(`Quando a ocupação é ${cargo}`, () => {
          const ocupacaoAtual = tabelaDeAtributos.ocupacao[cargo];
          const coloracaoAtual = tabelaDeAtributos.coloracao[cor];

          it('retorna a soma de sorte', () => {
            const resultado = ocupacaoAtual.sorte + coloracaoAtual.sorte;

            expect(calcularAtributoDeSorte(cor, cargo)).toBe(resultado);
          });
        });
      });
    });
  });
});
