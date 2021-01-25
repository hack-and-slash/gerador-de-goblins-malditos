import tabelaDeEquipamentos from './tabelaDeEquipamentos';
import { rolarD6 } from './dados';
import { Ocupacao } from '../types';

const gerarEquipamento = (ocupacao: Ocupacao): string => {
  if (ocupacao === 'Xamã') {
    return tabelaDeEquipamentos[ocupacao];
  }
  return tabelaDeEquipamentos[ocupacao][rolarD6()];
};

export default gerarEquipamento;
