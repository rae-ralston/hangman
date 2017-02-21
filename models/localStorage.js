const {LocalStorage} = require('node-localstorage')
localStorage = new LocalStorage('./localMemory');

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

const getSettings = name => {
  if (name === 'currentWord' 
    || name === 'uniqueLetters' 
    || name === 'incorrectGuessedLetters' 
    || name === 'correctGuessedLetters'
    || name === 'lostGame') 
    return localStorage.getItem(name)
  else if (name === 'incorrectGuessCount' || name === 'winStreak') 
    return (parseInt(localStorage.getItem(name)))
  else {console.log('Error in getting setting ' + name)}
}

const getCorrectGuessedLetters = () => getSettings('correctGuessedLetters')
const getCurrentWord = () => getSettings('getCurrentWord')
const getIncorrectGuessCount = () => parseInt(getSettings('incorrectGuessCount'))
const getIncorrectGuessedLetters = () => getSettings('incorrectGuessedLetters')
const getUniqueLetters = () => getSettings('uniqueLetters')
const getWinStreak = () => parseInt(getSettings('winStreak'))
const getLostGame = () => getSettings('lostGame')

function getGameInfo() {
  console.log('typeof winsteak', getSettings('winStreak'), typeof parseInt(getSettings('winStreak')))
  return {
    lostGame: getSettings('lostGame'),
    winStreak: parseInt(getSettings('winStreak')),
    correctGuessedLetters: getSettings('correctGuessedLetters'),
    currentWord: getSettings('currentWord'),
    incorrectGuessCount: parseInt(getSettings('incorrectGuessCount')),
    incorrectGuessedLetters: getSettings('incorrectGuessedLetters')
  }
}

module.exports = {
  clear,
  getCorrectGuessedLetters,
  getCurrentWord,
  getIncorrectGuessCount,
  getIncorrectGuessedLetters,
  getGameInfo,
  getUniqueLetters,
  getSettings, 
  saveSettings,
  getWinStreak,
  getLostGame
}
