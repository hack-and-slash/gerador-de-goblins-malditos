import React, { useEffect, useState } from 'react';
import './App.css';
import goblinMaldito from './gerador';

function App() {
  const [goblin, setGoblin] = useState({});

  const criaGoblin = () => {
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

    return setGoblin({
      nome,
      coloracao,
      caracteristica,
      ocupacao,
      combate,
      conhecimento,
      habilidade,
      sorte,
      equipamento,
    });
  };

  useEffect(() => {
    criaGoblin();
  }, []);

  return (
    <div className="App">
      <h1>Goblin</h1>
      <h2>{goblin.nome}</h2>
      <p>{`Aparência: ${goblin.coloracao} e ${goblin.caracteristica}`}</p>
      <p>{`Ocupação: ${goblin.ocupacao}`}</p>

      <h3>Atributos</h3>
      <p>{`Combate: ${goblin.combate}`}</p>
      <p>{`Conhecimento: ${goblin.conhecimento}`}</p>
      <p>{`Habilidade: ${goblin.habilidade}`}</p>
      <p>{`Sorte: ${goblin.sorte}`}</p>

      <h3>Equipamentos</h3>
      <p>{goblin.equipamento}</p>
    </div>
  );
}

export default App;
