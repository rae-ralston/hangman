const {LocalStorage} = require('node-localstorage')
localStorage = new LocalStorage('./scratch');

const saveSettings = (name, settings) => {
  const saveName = name.toString();
  const saveSettings = settings.toString();
  console.log('setting storage for', name, ' : ', settings);

  (typeof(saveName) === 'string' && typeof(saveSettings) === 'string')
    ? localStorage.setItem(saveName, saveSettings)
    : console.log('Error in saving state of ' + saveName + ': ' + saveSettings);
}

const clear = () => {
  localStorage.clear()
}

const checkLocal = () => {
  let word = getSettings('currentWord')
  console.log('Check local: currentWrd',word)
}

const getSettings = name => {
  if (name === 'currentWord' || name === 'uniqueLetters' || name === 'incorrectGuessedLetters' || name === 'correctGuessedLetters') 
    return localStorage.getItem(name)
  else if (name === 'incorrectGuessCount') 
    return (parseInt(localStorage.getItem(name)))
  else {console.log('Error in getting setting ' + name)}
}

const getCorrectGuessedLetters = () => getSettings('correctGuessedLetters')
const getCurrentWord = () => getSettings('getCurrentWord')
const getIncorrectGuessCount = () => parseInt(getSettings('incorrectGuessCount'))
const getIncorrectGuessedLetters = () => getSettings('incorrectGuessedLetters')
const getUniqueLetters = () => getSettings('uniqueLetters')

function getMyGameInfo() {
  return {
    correctGuessedLetters: getSettings('correctGuessedLetters'),
    currentWord: getSettings('currentWord'),
    incorrectGuessCount: parseInt(getSettings('incorrectGuessCount')),
    incorrectGuessedLetters: getSettings('incorrectGuessedLetters')
  }
}

module.exports = {
  checkLocal,
  clear,
  getCorrectGuessedLetters,
  getCurrentWord,
  getIncorrectGuessCount,
  getIncorrectGuessedLetters,
  getMyGameInfo,
  getUniqueLetters,
  getSettings, 
  saveSettings, 
}
