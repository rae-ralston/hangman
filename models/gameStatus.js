const {
  getCorrectGuessedLetters,
  getIncorrectGuessedLetters,
  getIncorrectGuessCount,
  getUniqueLetters,
  saveSettings,
  getWinStreak,
  getLostGame,
  getSubmissionWarning,
  getGameDifficultySettings
} = require('./localStorage')

const newGame = wordInfo => {
  const incorrectGuesses = 0
  const {word, uniqueLetters} = wordInfo
  const guessedLetters = ""
  const correctGuessedLetters = ""
  const winStreak = 0
  const lostGame = "false"
  const submissionWarning = ""
  const gameDifficultySettings = {difficulty: 1, minWordLength: 3}

  saveSettings('currentWord', word)
  saveSettings('uniqueLetters', uniqueLetters)
  saveSettings('incorrectGuessCount', incorrectGuesses)
  saveSettings('incorrectGuessedLetters', guessedLetters)
  saveSettings('correctGuessedLetters', correctGuessedLetters)
  saveSettings('winStreak', winStreak)
  saveSettings('lostGame', lostGame)
  saveSettings('submissionWarning', submissionWarning)
  saveSettings('gameDifficultySettings', gameDifficultySettings)
}

const continueGame = wordInfo => {
  const incorrectGuesses = 0
  const {word, uniqueLetters} = wordInfo
  const guessedLetters = ""
  const correctGuessedLetters = ""
  const lostGame = "false"
  const submissionWarning = ""

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
  let submissionWarning = getSubmissionWarning()
  if(correctGuesses.includes(letter)) {
    submissionWarning = "You got that one already.\nPick another letter, awesome human!"
    saveSettings('submissionWarning', submissionWarning)
  } else {
    correctGuesses += letter
    submissionWarning = ""
    saveSettings('correctGuessedLetters', correctGuesses)
    saveSettings('submissionWarning', submissionWarning)
  }
}

const saveIncorrectGuess = letter => {
  let incorrectGuessCount = getIncorrectGuessCount()
  let incorrectGuesses = getIncorrectGuessedLetters()
  let submissionWarning = getSubmissionWarning()
  if(incorrectGuesses.includes(letter)) {
    submissionWarning = "You've already tried that letter.\nTry a different one."
    saveSettings('submissionWarning', submissionWarning)
  } else {
    incorrectGuessCount += 1
    incorrectGuesses += letter
    submissionWarning = ""
    saveSettings('incorrectGuessCount', incorrectGuessCount)
    saveSettings('incorrectGuessedLetters', incorrectGuesses)
    saveSettings('submissionWarning', submissionWarning)
  }
}

const checkForWin = () => {
  const correctGuesses = getCorrectGuessedLetters()
  const uniqueLetters = getUniqueLetters()
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

module.exports = {newGame, checkGuess, continueGame}
