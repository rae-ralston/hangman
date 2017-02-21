const {newGameWord} = require('./words')
const {
  getCorrectGuessedLetters,
  getCurrentWord,
  getIncorrectGuessedLetters,
  getIncorrectGuessCount,
  getUniqueLetters,
  saveSettings,
  getWinStreak,
  getLostGame
} = require('./localStorage')

const runGame = wordInfo => {
  const incorrectGuesses = 0
  const {word, uniqueLetters} = wordInfo
  const guessedLetters = ""
  const correctGuessedLetters = ""
  const winStreak = 0
  const lostGame = "false"

  saveSettings('currentWord', word)
  saveSettings('uniqueLetters', uniqueLetters)
  saveSettings('incorrectGuessCount', incorrectGuesses)
  saveSettings('incorrectGuessedLetters', guessedLetters)
  saveSettings('correctGuessedLetters', correctGuessedLetters)
  saveSettings('winStreak', winStreak)
  saveSettings('lostGame', lostGame)
}

const continueGame = wordInfo => {
  const incorrectGuesses = 0
  const {word, uniqueLetters} = wordInfo
  const guessedLetters = ""
  const correctGuessedLetters = ""
  const lostGame = "false"

  saveSettings('currentWord', word)
  saveSettings('uniqueLetters', uniqueLetters)
  saveSettings('incorrectGuessCount', incorrectGuesses)
  saveSettings('incorrectGuessedLetters', guessedLetters)
  saveSettings('correctGuessedLetters', correctGuessedLetters)
  saveSettings('lostGame', lostGame)
}

const checkGuess = guessLetter => {
  let uniqueLetters = getUniqueLetters()

  if(uniqueLetters.includes(guessLetter)) {
    saveCorrectGuess(guessLetter)
    return checkForWin()
  } else {
    saveIncorrectGuess(guessLetter)
    return checkForLoss()
  }
}

const saveCorrectGuess = letter => {
  let correctGuesses = getCorrectGuessedLetters()

  correctGuesses += letter
  saveSettings('correctGuessedLetters', correctGuesses)
}

const saveIncorrectGuess = letter => {
  let incorrectGuessCount = getIncorrectGuessCount();
  let incorrectGuesses = getIncorrectGuessedLetters();

  incorrectGuessCount += 1
  incorrectGuesses += letter
  saveSettings('incorrectGuessCount', incorrectGuessCount)
  saveSettings('incorrectGuessedLetters', incorrectGuesses)
}

const checkForWin = () => {
  let correctGuesses = getCorrectGuessedLetters()
  let uniqueLetters = getUniqueLetters()
  let winStreak = getWinStreak()

  if(correctGuesses.length === uniqueLetters.length) {
    winStreak += 1
    saveSettings('winStreak', winStreak)
    return "won"
  }
}

const checkForLoss = () => {
  let incorrectGuesses = getIncorrectGuessCount()
  let lostGame = getLostGame()

  if(incorrectGuesses >= 6) {
    lostGame = true
    saveSettings('lostGame', lostGame)
  }
}

module.exports = {runGame, checkGuess, continueGame}
