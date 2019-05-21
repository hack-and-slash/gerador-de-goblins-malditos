import React from 'react';
import './App.css';
import { WiredCard } from 'wired-elements';
import goblinMaldito from './gerador';

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
    <div className="App">
      <wired-card>
        <h1>Goblin</h1>
        <p>{nome}</p>
        <p>{`Aparência: ${coloracao} e ${caracteristica}`}</p>
        <p>{`Ocupação: ${ocupacao}`}</p>

        <h3>Atributos</h3>
        <p>{`Combate: ${combate}`}</p>
        <p>{`Conhecimento: ${conhecimento}`}</p>
        <p>{`Habilidade: ${habilidade}`}</p>
        <p>{`Sorte: ${sorte}`}</p>

        <h3>Equipamentos</h3>
        <p>{equipamento}</p>
      </wired-card>
    </div>
  );
}

export default App;
