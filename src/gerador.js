import tabelaGoblin from './tabelaGoblin.js';
import { Random } from 'random-js'

const goblinMaldito = () => {
  const coloracao = tabelaGoblin.coloracao[rollD6()];
  const caracteristica = tabelaGoblin.caracteristica[rollD6()];
  const ocupacao = tabelaGoblin.ocupacao[rollD6()];

  const goblinMaldito = {
    coloracao,
    caracteristica,
    ocupacao
  }

  return goblinMaldito;
}

const rollD6 = () => {
  const random = new Random();

  return random.integer(0, 5);
}

export default goblinMaldito;

