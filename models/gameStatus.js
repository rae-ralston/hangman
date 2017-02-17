const {newGameWord} = require('./words')
const {getIncorrectGuesses, saveSettings} = require('./localStorage')

const runGame = () => {
  const incorrectGuesses = 0
  const {word, uniqueLetters} = newGameWord().then(info => info)
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

  const mainGameInterval = setInterval(() =>{
    if (checkForLoss()) {
      clearInterval(mainGameInterval)
      looseGame()
    } else if () {
      clearInterval(mainGameInterval)

    }
  }, 1000)
}

const checkForLoss = () => getIncorrectGuesses() >= 6
const checkForWin = () => {
  let guessedLetters = getSettings('guessedLetters')
  let uniqueLetters = getSettings('uniqueLetters')
  guessedLetters.split('').reduce((overlap, letter, i) => {
    
    return overlap
  }, "")
  for(let i = 0; i < guessed.length; i++){
    
    if(uniqueLetters.length === )
  }
}

const loseGame = () => {
  const modal = document.getElementById('win-modal')
  modal.show()
  document.getElementById('dismiss').onclick = () => {modal.close()}
  document.getElementById('play-again').onclick = () => {
    modal.close()
    runGame()
  }
}

