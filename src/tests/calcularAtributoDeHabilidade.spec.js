import calcularAtributoDeHabilidade from '../data/calcularAtributoDeHabilidade';
import tabelaDeAtributos from '../data/tabelaDeAtributos';

describe('calcularAtributoDeHabilidade', () => {
  const { coloracao } = tabelaDeAtributos;
  const { ocupacao } = tabelaDeAtributos;

  Object.keys(coloracao).forEach((cor) => {
    describe(`Quando a cor é ${cor}`, () => {
      Object.keys(ocupacao).forEach((cargo) => {
        describe(`Quando a ocupação é ${cargo}`, () => {
          const ocupacaoAtual = tabelaDeAtributos.ocupacao[cargo];
          const coloracaoAtual = tabelaDeAtributos.coloracao[cor];

          it('retorna a soma das habilidades', () => {
            const resultado = ocupacaoAtual.habilidade + coloracaoAtual.habilidade;

            expect(calcularAtributoDeHabilidade(cor, cargo)).toBe(resultado);
          });
        });
      });
    });
  });
});
