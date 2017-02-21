const express = require('express')
const router = express.Router()
const { 
  newGameWord,
  oneRandomWord, 
  getSpecificLengthWord, 
  uniqueLetters,
  displayHangmanWord,
  getRandomSadGif
} = require('../models/words')
const sadGifs = require('../models/sadGifs')
const {getGameInfo, checkLocal, clear} = require('../models/localStorage')
const {runGame, checkGuess, continueGame} = require('../models/gameStatus')


router.get('/', (request, response) => {
  clear()
  response.render('landing')
})

router.get('/newgame', (request, response) => {
  const difficulty = 1  //val 1-10
  const minWordLength = 5
  let test = newGameWord(difficulty, minWordLength)
  console.log('test', test)
  getSpecificLengthWord(difficulty, minWordLength)
    .then(words => oneRandomWord(words))
    .then(word => {
      return {word, uniqueLetters: uniqueLetters(word)}
    })
    .then(wordInfo => {
      console.log('wordInfo', wordInfo)
      runGame(wordInfo)
      response.redirect('/play')
    })
    .catch(err => console.error(err))
})

router.get('/continueGame', (request, response) => {
  const difficulty = 1  //val 1-10
  const minWordLength = 5

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
    lostGame} = gameInfo
  
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
  console.log('got to check answer', guess)
  let winOrLose = checkGuess(guess)
  console.log('won?', winOrLose)
  // if(winOrLose === 'lost') {response.redirect('/')}
  if(winOrLose === 'won') {response.redirect('/continueGame')}
  else {response.redirect('/play')}
})

module.exports = router;
