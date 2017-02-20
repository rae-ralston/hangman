const express = require('express')
const router = express.Router()
const { 
  oneRandomWord, 
  getSpecificLengthWord, 
  uniqueLetters
} = require('../models/words')
const {getGameInfo, checkLocal} = require('../models/localStorage')
const {runGame} = require('../models/gameStatus')

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
      checkLocal()
      response.redirect('/play')
    })
    .catch(err => console.error(err))
})

router.get('/play', (request, response) => {
  // game is saved in local
  // now game logic
  console.log('checking local in play')
  checkLocal()
  let hello = getGameInfo()
  console.log('hello?', hello)
  response.render('index')
  //   .then(info => {
  //     console.log('info', info)
  //     let {
  //       correctGuessedLetters,
  //       currentWord,
  //       incorrectGuessCount,
  //       incorrectGuesses} = info
  //     response.render('index', {
  //       correctGuessedLetters,
  //       currentWord,
  //       incorrectGuessCount,
  //       incorrectGuesses
  //     })
  // })
})

router.get('/checkAnswer', (request, response) => {
  // get answer from body form
  // 
  
  response.redirect('/play')
})

module.exports = router;
