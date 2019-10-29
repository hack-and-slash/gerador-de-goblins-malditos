import tabelaGoblin from './tabelaGoblin';
import { rolarD6 } from './dados';

const gerarNomeDoGoblin = () => {
  const comecoDoNome = tabelaGoblin.comecoDoNome[rolarD6()];
  const fimDoNome = tabelaGoblin.fimDoNome[rolarD6()];

  return comecoDoNome + fimDoNome;
};

export default gerarNomeDoGoblin;
