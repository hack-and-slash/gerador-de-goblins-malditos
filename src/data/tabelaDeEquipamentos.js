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

const armasEDanos = [
  {
    Adaga: 2,
  },
  {
    'Arco Simples': 2,
  },
  {
    'Arco Composto': 3,
  },
  {
    Besta: 3,
  },
  {
    Espada: 3,
  },
  {
    Machado: 4,
  },
  {
    Machadinha: 3,
  },
  {
    Espadona: 5,
  },
  {
    Pistola: 4,
  },
  {
    'Galinhas Explosivas': 4,
  },
  {
    'Barril de Pólvora': 5,
  },
  {
    Canhão: 8,
  },
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
