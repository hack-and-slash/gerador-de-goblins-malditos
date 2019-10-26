const equipamentoLeve = [
  '2 Adagas [Pode ser arremeçado]',
  'Adaga',
  'Arco Simples',
  'Arco Composto',
  '4 Adagas',
  'Besta e Elmo',
];

const equipamentoPesado = [
  'Espada e Escudo',
  'Machado e Elmo',
  '2 Machadinhas [Pode ser arremeçado]',
  'Espadona',
  '2 Espadas e Armadura',
  'Adaga [Pode ser arremeçado], Espada e Armadura',
];

const equipamentoExplosivo = [
  'Pistola e Elmo',
  '2 Pistolas',
  '3 Galinhas Explosivas [Dano em todos até 3m]',
  'Barril de Pólvora [Dano em todos até 3m]',
  'Pistola e 2 Galinhas Explosivas',
  'Canhão Carregar [2 turnos]',
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

module.exports = tabelaDeEquipamentos;
