import React from 'react';
import goblinMaldito from './gerador';
import GlobalStyle from './styles/global';
import { Goblin } from './styles/styles';

function App() {
  const {
    nome,
    coloracao,
    caracteristica,
    ocupacao,
    combate,
    conhecimento,
    habilidade,
    sorte,
    equipamento,
  } = goblinMaldito();

  return (
    <>
      <Goblin>
        <h1>Goblin</h1>
        <h2>{nome}</h2>
        <p>{`Aparência: ${coloracao} e ${caracteristica}`}</p>
        <p>{`Ocupação: ${ocupacao}`}</p>

        <h3>Atributos</h3>
        <p>{`Combate: ${combate}`}</p>
        <p>{`Conhecimento: ${conhecimento}`}</p>
        <p>{`Habilidade: ${habilidade}`}</p>
        <p>{`Sorte: ${sorte}`}</p>

        <h3>Equipamentos</h3>
        <p>{equipamento}</p>
      </Goblin>
      <GlobalStyle />
    </>
  );
}

export default App;
