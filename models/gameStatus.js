const {newGameWord} = require('./words')
const {
  getCorrectGuessedLetters,
  getCurrentWord,
  getGuessedLetters,
  getIncorrectGuessCount,
  getUniqueLetters,
  saveSettings
} = require('./localStorage')

const runGame = wordInfo => {
  const incorrectGuesses = 0
  const {word, uniqueLetters} = wordInfo
  const guessedLetters = ""
  const correctGuessedLetters = ""

  saveSettings('currentWord', word)
  saveSettings('uniqueLetters', uniqueLetters)
  saveSettings('incorrectGuessCount', incorrectGuesses)
  saveSettings('incorrectGuessedLetters', guessedLetters)
  saveSettings('correctGuessedLetters', correctGuessedLetters)
}

const checkGuess = guessLetter => {
  let uniqueLetters = getUniqueLetters()

  if(uniqueLetters.includes(guessLetter)) {
    saveCorrectGuess(guessLetter)
    checkForWin()
  } else {
    incorrectGuess(guessedLetter)
    checkForLoss()
  }
}

const saveCorrectGuess = letter => {
  let correctGuesses = getCorrectGuessedLetters()

  correctGuesses += letter
  saveSettings('correctGuessedLetters', correctGuesses)
}

const incorrectGuess = letter => {
  let incorrectGuessCount = getIncorrectGuessCount();
  let incorrectGuesses = getGuessedLetters();

  incorrectGuessCount += 1
  incorrectGuesses += letter
  saveSettings('incorrectGuessCount', incorrectGuessCount)
  saveSettings('guessedLetters', incorrectGuesses)
}

const correctGuess = letter => {
  let correctGuesses = getCorrectGuessedLetters()

  correctGuesses += letter
  saveSettings('correctGuessedLetters', correctGuesses)
}

const checkForWin = () => {
  let correctGuesses = getCorrectGuessedLetters()
  let uniqueLetters = getUniqueLetters()

  if(correctGuesses.length === uniqueLetters) 
    console.log("Congratualtions, you've saved a life today.")
  return correctGuesses.length === uniqueLetters
}

const checkForLoss = () => {
  let incorrectGuesses = getIncorrectGuessCount()

  if(incorrectGuesses >= 6)
    console.log("Bummer, you lost the game.")
}

module.exports = {runGame}
