import React from 'react';
import './App.css';
import goblinMaldito from './gerador';

function App() {
  const { coloracao, caracteristica, ocupacao } = goblinMaldito();
  return (
    <div className="App">
      <p>Coloração: {coloracao}</p>
      <p>Característica: {caracteristica}</p>
      <p>Ocupação: {ocupacao}</p>
    </div>
  );
}

export default App;
