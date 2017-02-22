const {
  getCorrectGuessedLetters,
  getIncorrectGuessCount,
  getIncorrectGuessedLetters,
  getLostGame,
  getSubmissionWarning,
  getUniqueLetters,
  getWinStreak,
  saveSettings,
} = require('./localStorage')

const newGame = wordInfo => {
  const correctGuessedLetters = ""
  const guessedLetters = ""
  const incorrectGuesses = 0
  const lostGame = "false"
  const submissionWarning = ""
  const winStreak = 0
  const {word, uniqueLetters, minWordLength, difficulty} = wordInfo

  saveSettings('correctGuessedLetters', correctGuessedLetters)
  saveSettings('currentWord', word)
  saveSettings('difficulty', difficulty)
  saveSettings('incorrectGuessCount', incorrectGuesses)
  saveSettings('incorrectGuessedLetters', guessedLetters)
  saveSettings('lostGame', lostGame)
  saveSettings('minWordLength', minWordLength)
  saveSettings('submissionWarning', submissionWarning)
  saveSettings('uniqueLetters', uniqueLetters)
  saveSettings('winStreak', winStreak)
}

const continueGame = wordInfo => {
  const correctGuessedLetters = ""
  const guessedLetters = ""
  const incorrectGuesses = 0
  const lostGame = "false"
  const submissionWarning = ""
  const {word, uniqueLetters} = wordInfo

  saveSettings('correctGuessedLetters', correctGuessedLetters)
  saveSettings('currentWord', word)
  saveSettings('incorrectGuessCount', incorrectGuesses)
  saveSettings('incorrectGuessedLetters', guessedLetters)
  saveSettings('lostGame', lostGame)
  saveSettings('uniqueLetters', uniqueLetters)
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
    submissionWarning = "You got that letter already!"
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
    submissionWarning = "You've already tried that letter."
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

module.exports = {checkGuess, continueGame, newGame}
