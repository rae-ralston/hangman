const {newGameWord} = require('./words')
const {getIncorrectGuessCount, saveSettings} = require('./localStorage')

const runGame = wordInfo => {
  const incorrectGuesses = 0
  const {word, uniqueLetters} = wordInfo
  const guessedLetters = ""
  const correctGuessedLetters = ""

  localStorage.clear()
  
  writeLettersToDOM(currentWord)
  resetHeader()

  saveSettings('currentWord', word)
  saveSettings('uniqueLetters', uniqueLetters)
  saveSettings('incorrectGuessCount', incorrectGuesses)
  saveSettings('guessedLetters', guessedLetters)
  saveSettings('correctGuessedLetters', correctGuessedLetters)
}

const checkForWin = () => {
  let correctGuesses = getSettings('correctGuessedLetters')
  let uniqueLetters = getSettings('uniqueLetters')
  return correctGuesses.length === uniqueLetters
}

const loseGame = () => {
  const modal = document.getElementById('win-modal')
  modal.show()
  // document.getElementById('dismiss').onclick = () => {modal.close()}
  // document.getElementById('play-again').onclick = () => {
  //   modal.close()
  //   runGame()
  // }
}

module.exports = {runGame}
