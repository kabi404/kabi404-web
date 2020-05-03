import lan from './assets/lan.json'

export default (value, language) => {
  return lan[value][language]
}
