const express = require('express')
const router = express.Router()

const { 
  displayHangmanWord,
  getRandomLevel,
  getRandomSadGif,
  getSpecificLengthWord, 
  oneRandomWord, 
  uniqueLetters,
} = require('../models/words')
const {
  clear, 
  getGameDifficultySettings,
  getGameInfo,  
  saveGameDifficultySettings,
} = require('../models/localStorage')
const {newGame, checkGuess, continueGame} = require('../models/gameStatus')
const {hungMan} = require('../models/hangman')
const sadGifs = require('../models/sadGifs')

router.get('/', (request, response) => {
  clear()
  response.render('landing', {hungMan:hungMan.whole})
})

router.all('/newgame', (request, response) => {
  const difficulty = request.body.selectDifficulty
  let minWordLength = request.body.selectWordLength

  if(minWordLength === "Surprise Me") {minWordLength = getRandomLevel()}

  saveGameDifficultySettings({difficulty, minWordLength})
  getSpecificLengthWord(difficulty, minWordLength)
    .then(words => oneRandomWord(words))
    .then(word => {
      return {word, uniqueLetters: uniqueLetters(word)}
    })
    .then(wordInfo => {
      newGame(wordInfo)
      response.redirect('/play')
    })
    .catch(err => console.error(err))
})

router.get('/continueGame', (request, response) => {
  let {difficulty, minWordLength} = getGameDifficultySettings()
  difficulty = 1
  minWordLength = 5
  getSpecificLengthWord(difficulty, minWordLength)
    .then(words => oneRandomWord(words))
    .then(word => {
      return {word, uniqueLetters: uniqueLetters(word)}
    })
    .then(wordInfo => {
      continueGame(wordInfo)
      response.redirect('/play')
    })
    .catch(err => console.error(err))
})

router.get('/play', (request, response) => {
  const gameInfo = getGameInfo()
  let {
    correctGuessedLetters,
    currentWord,
    incorrectGuessCount,
    incorrectGuessedLetters, 
    winStreak, 
    lostGame, 
    submissionWarning} = gameInfo
  let lostGIF = ""
  
  lostGame = (lostGame === "true")
  if(lostGame){
    lostGIF = getRandomSadGif(sadGifs)
  }

  currentWord = currentWord.split('')
  if(incorrectGuessedLetters.length > 0) {
    incorrectGuessedLetters = incorrectGuessedLetters.split('')
  }
  let hangmanArray = displayHangmanWord(correctGuessedLetters, currentWord)
  
  response.render('index', {
    hungMan:hungMan[incorrectGuessCount],
    submissionWarning,
    lostGIF,
    lostGame,
    winStreak,
    hangmanArray,
    correctGuessedLetters,
    currentWord,
    incorrectGuessCount,
    incorrectGuessedLetters
  })
})

router.post('/checkAnswer', (request, response) => {
  const {guess} = request.body
  const winOrLose = checkGuess(guess)

  if(winOrLose === 'won') {response.redirect('/continueGame')}
  else {response.redirect('/play')}
})

module.exports = router;
