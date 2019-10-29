import { rolarDadoD6 } from './dados';

function anomaliasTable (roll) {
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
      return [anomaliasTable(rolarDadoD6() + rolarDadoD6()), anomaliasTable(rolarDadoD6() + rolarDadoD6())].reduce((acc, x) => acc.concat(x), [])
    default:
      // case 2 ????
      return ''
  }
}

function gerarAnomalias (roll) {
  const anomalias = anomaliasTable(roll)
  if (typeof anomalias === 'string') {
    return anomalias === '' ? [] : [anomalias]
  } else {
    return [...new Set(anomalias)].filter(elem => elem !== '')
  }
}

function gerarCaracteristica (roll) {
  switch (roll) {
    case 1:
      return 'Insano'
    case 2:
      return 'Fedorento'
    case 3:
      return 'com Cicatrizes'
    case 4:
      return 'Gordo'
    case 5:
      return 'Fala Errado'
    case 6:
      return gerarAnomalias(rolarDadoD6() + rolarDadoD6())
  }
}

export default gerarCaracteristica