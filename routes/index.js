const express = require('express')
const router = express.Router()
const { 
  oneRandomWord, 
  getSpecificLengthWord, 
  uniqueLetters,
  displayHangmanWord
} = require('../models/words')
const {getMyGameInfo, checkLocal} = require('../models/localStorage')
const {runGame, checkGuess} = require('../models/gameStatus')

router.get('/', (request, response) => {
  response.render('landing')
})

router.get('/newgame', (request, response) => {
  const difficulty = 1  //val 1-10
  const minWordLength = 5

  getSpecificLengthWord(difficulty, minWordLength)
    .then(words => oneRandomWord(words))
    .then(word => {
      return {word, uniqueLetters: uniqueLetters(word)}
    })
    .then(wordInfo => {
      runGame(wordInfo)
      response.redirect('/play')
    })
    .catch(err => console.error(err))
})

router.get('/play', (request, response) => {
  const gameInfo = getMyGameInfo()
  console.log('game info: incorrect guesses', gameInfo.incorrectGuessedLetters)
  let {
    correctGuessedLetters,
    currentWord,
    incorrectGuessCount,
    incorrectGuessedLetters} = gameInfo
  
  console.log('game info', gameInfo)
  if(incorrectGuessedLetters.length > 0) {
    incorrectGuessedLetters = incorrectGuessedLetters.split('')
  }
  currentWord = currentWord.split('')
  let hangmanArray = displayHangmanWord(correctGuessedLetters, currentWord)
  console.log('hangmanArray', hangmanArray)


  response.render('index', {
    hangmanArray,
    correctGuessedLetters,
    currentWord,
    incorrectGuessCount,
    incorrectGuessedLetters
  })
})

router.post('/checkAnswer', (request, response) => {
  // get answer from body form
  // 
  const {guess} = request.body
  console.log('got to check answer', guess)
  checkGuess(guess)
  
  response.redirect('/play')
})

module.exports = router;
