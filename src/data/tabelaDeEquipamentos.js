const equipamentoLeve = [
  '2 Adagas*',
  'Adaga',
  'Arco Simples',
  'Arco Composto',
  '4 Adagas',
  'Besta e Elmo',
];

const equipamentoPesado = [
  'Espada e Escudo',
  'Machado e Elmo',
  '2 Machadinhas*',
  'Espadona',
  '2 Espadas e Armadura',
  'Adaga *, Espada e Armadura',
];

const equipamentoExplosivo = [
  'Pistola e Elmo',
  '2 Pistolas',
  '3 Galinhas Explosivas',
  'Barril de Pólvora',
  'Pistola e 2 Galinhas Explosivas',
  'Canhão',
];

const tabelaDeEquipamentos = {
  Mercenário: equipamentoPesado,
  Caçador: equipamentoLeve,
  Gatuno: equipamentoLeve,
  Líder: equipamentoPesado,
  Piromaníaco: equipamentoExplosivo,
  Xamã: 'Cajado',
};

export default tabelaDeEquipamentos;
