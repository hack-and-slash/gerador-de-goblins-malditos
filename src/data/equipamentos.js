import tabelaDeEquipamentos from './tabelaDeEquipamentos';
import { rolarD6 } from './dados';

const gerarEquipamento = (ocupacao) => {
    if (ocupacao === 'Xamã') {
      return tabelaDeEquipamentos[ocupacao];
    }
    return tabelaDeEquipamentos[ocupacao][rolarD6()];
  };

  export default gerarEquipamento;
