const express = require('express')
const router = express.Router()
const Game = require('../models/Game')
const {
  newGameWord, 
  oneRandomWord, 
  getSpecificLengthWord, 
  uniqueLetters} = require('../models/words')
const {runGame} = require('../models/gameStatus')

router.get('/', (request, response) => {
  let newWord = newGameWord()

  response.render('index', {title:"hi", word: newWord})
})

router.get('/newGame', (request, response) => {
  const difficulty = 1  //val 1-10
  const minWordLength = 5

  getSpecificLengthWord(difficulty, minWordLength)
    .then(words => oneRandomWord(words))
    .then(word => {
      return {word, uniqueLetters: uniqueLetters(word)}
    })
    .then(wordInfo => {
      let game = runGame(wordInfo)
      response.render('game/game', {wordInfo})
    })
    .catch(err => console.error(err))
})

module.exports = router;
