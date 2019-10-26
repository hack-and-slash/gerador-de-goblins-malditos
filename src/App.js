import React, { useState } from 'react';
import goblinMaldito from './gerador';
import GlobalStyle from './styles/global';
import { Goblin, Button } from './styles/styles';

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

  const [, setarGoblin] = useState([]);

  function obterNovoGoblin(e) {
    const item = e.target.value;
    setarGoblin((goblin) => [...goblin, item]);
  }


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

        <Button type="button" onClick={obterNovoGoblin}>
          Gerar Novo Goblin
          <span role="img" aria-label="duende">🧝</span>
        </Button>
      </Goblin>
      <GlobalStyle />
    </>
  );
}

export default App;
