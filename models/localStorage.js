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

const getGameInfo = () => {
  let currentWord = getSettings('currentWord')
  let correctGuessedLetters = getSettings('correctGuessedLetters')
  console.log('correct geame setting s in game info', correctGuessedLetters)
  return {
    correctGuessedLetters,
    currentWord,
    incorrectGuessCount: getIncorrectGuessCount(),
    incorrectGuessedLetters: getIncorrectGuessedLetters()
  }
}

module.exports = {
  getCorrectGuessedLetters,
  getCurrentWord,
  getIncorrectGuessCount,
  getIncorrectGuessedLetters,
  getGameInfo,
  getUniqueLetters,
  saveSettings, 
  getSettings, 
  checkLocal
}
