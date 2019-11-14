import { gerarNomeDoGoblin } from './gerador';
import tabelaGoblin from './data/tabelaGoblin';

describe('Gerardor', () => {
  it('deve gerar nome do goblin utilizando arrays de comeco e fim de nome', () => {
    const goblinName = gerarNomeDoGoblin();

    const goblinNameSplitted = goblinName.split('');

    const halfArray = Math.floor(goblinNameSplitted.length / 2);

    const goblinBeginName = goblinNameSplitted.slice(0, halfArray);
    const goblinEndName = goblinNameSplitted.slice(halfArray, goblinNameSplitted.length);

    expect(tabelaGoblin.comecoDoNome.includes(goblinBeginName.join(''))).toBe(true);
    expect(tabelaGoblin.fimDoNome.includes(goblinEndName.join(''))).toBe(true);
  });
});
