const express = require('express');
const router = express.Router();
const {
  getAnyNewWord, 
  getSpecificLengthWord, 
  oneRandomWord,
  checkGuess
} = require('../models/game')

router.get('/', (request, response) => {
  const difficulty = 1  //val 1-10
  const minWordLength = 5

  getSpecificLengthWord(difficulty, minWordLength)
    .then(words => oneRandomWord(words))
    .then(word => checkGuess(word, "a"))
    .then(answer => response.send(answer))
    .catch(err => console.error(err))
})



module.exports = router;
