import { gerarNomeDoGoblin } from './../gerador';
import tabelaGoblin from './../data/tabelaGoblin';

describe('gerador', () => {
  describe('gerarNomeDoGoblin', () => {
    it('retorna uma string', () => {
      expect(typeof gerarNomeDoGoblin()).toBe("string");
    });

    it('retorna uma string de 4 letras', () => {
      const palavra = gerarNomeDoGoblin();
      expect(palavra.length).toBe(4);
    });

    it('retorna nome compost com opções da tabela', () => {
      const nome = gerarNomeDoGoblin();
      const primeiroNome = nome.substring(0,2);
      const segundoNome = nome.substring(2, 4)

      expect(tabelaGoblin.comecoDoNome.includes(primeiroNome)).toBeTruthy();
      expect(tabelaGoblin.fimDoNome.includes(segundoNome)).toBeTruthy();
    });
  });
});
