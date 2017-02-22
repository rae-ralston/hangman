const {LocalStorage} = require('node-localstorage')
const localStorage = new LocalStorage('./localMemory');

let saveSettings = (name, settings) => {
  const saveName = name.toString();
  const saveSettings = settings.toString();
  console.log('setting storage for', name, ' : ', settings);

  (typeof(saveName) === 'string' && typeof(saveSettings) === 'string')
    ? localStorage.setItem(saveName, saveSettings)
    : console.log('Error in saving state of ' + saveName + ': ' + saveSettings)
}

const clear = () => localStorage.clear()

const getSettings = name => {
  if (name === 'currentWord' 
    || name === 'uniqueLetters' 
    || name === 'incorrectGuessedLetters' 
    || name === 'correctGuessedLetters'
    || name === 'lostGame'
    || name === 'submissionWarning') 
    return localStorage.getItem(name)
  else if (name === 'incorrectGuessCount' 
    || name === 'winStreak'
    || name === 'minWordLength'
    || name === 'difficulty') 
    return (parseInt(localStorage.getItem(name)))
  else {console.log('Error in getting setting ' + name)}
}

const getCorrectGuessedLetters = () => getSettings('correctGuessedLetters')
const getCurrentWord = () => getSettings('currentWord')
const getDifficulty = () => getSettings('difficulty')
const getIncorrectGuessCount = () => parseInt(getSettings('incorrectGuessCount'))
const getIncorrectGuessedLetters = () => getSettings('incorrectGuessedLetters')
const getLostGame = () => getSettings('lostGame')
const getMinWordLength = () => getSettings('minWordLength')
const getSubmissionWarning = () => getSettings('submissionWarning')
const getUniqueLetters = () => getSettings('uniqueLetters')
const getWinStreak = () => parseInt(getSettings('winStreak'))

const saveGameDifficultySettings = (difficulty, minWordLength) => {
  saveSettings('difficulty', difficulty)
  saveSettings('minWordLength', minWordLength)
}

let getGameInfo = () => {
  return {
    correctGuessedLetters: getSettings('correctGuessedLetters'),
    currentWord: getSettings('currentWord'),
    gameDifficultySettings:getSettings('gameDifficultySettings'),
    incorrectGuessCount: parseInt(getSettings('incorrectGuessCount')),
    incorrectGuessedLetters: getSettings('incorrectGuessedLetters'),
    lostGame: getSettings('lostGame'),
    submissionWarning: getSettings('submissionWarning'),
    winStreak: parseInt(getSettings('winStreak')),
  }
}

module.exports = {
  clear,
  getCorrectGuessedLetters,
  getCurrentWord,
  getDifficulty,
  getGameInfo,
  getIncorrectGuessCount,
  getIncorrectGuessedLetters,
  getLostGame,
  getMinWordLength,
  getSettings,
  getSubmissionWarning,
  getUniqueLetters,
  getWinStreak,
  saveGameDifficultySettings,
  saveSettings,
}
