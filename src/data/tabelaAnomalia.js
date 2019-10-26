import { rolarDadoD6 } from './dados';

function gerarAnomalias (roll) {
  switch (roll) {
    case 3:
      return 'Manchas rosas'
    case 4:
      return 'Orelhas no sovaco'
    case 5:
      return 'Corcunda'
    case 6:
      return 'Braço extra atrofiado'
    case 7:
      return `${rolarDadoD6()} Olhos`
    case 8:
      return 'Olhos Gigantes'
    case 9:
      return 'Mãos Gigantes'
    case 10:
      return 'Duas Cabeças'
    case 11:
    case 12:
      return [gerarAnomalias(rolarDadoD6() + rolarDadoD6()), gerarAnomalias(rolarDadoD6() + rolarDadoD6())].reduce((acc, x) => acc.concat(x), [])
    default:
      return ''
  }
}

export default gerarAnomalias