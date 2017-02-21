const {newGameWord} = require('./words')
const {
  getCorrectGuessedLetters,
  getCurrentWord,
  getIncorrectGuessedLetters,
  getIncorrectGuessCount,
  getUniqueLetters,
  saveSettings,
  clear
} = require('./localStorage')

const runGame = wordInfo => {
  clear()
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
    incorrectGuess(guessLetter)
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
  let incorrectGuesses = getIncorrectGuessedLetters();

  incorrectGuessCount += 1
  incorrectGuesses += letter
  console.log('incorrect letters AFTER add', incorrectGuesses)

  saveSettings('incorrectGuessCount', incorrectGuessCount)
  saveSettings('incorrectGuessedLetters', incorrectGuesses)
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

module.exports = {runGame, checkGuess}
