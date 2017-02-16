const express = require('express');
const router = express.Router();
const {
  getAnyNewWord, 
  getSpecificLengthWord, 
  chooseAWord
} = require('../models/game')

router.get('/', (request, response) => {
  const difficulty = 1  //val 1-10
  const minWordLength = 5

  getSpecificLengthWord(difficulty, minWordLength)
    .then(words => chooseAWord(words))
    .then(word => response.send(word))
    .catch(err => console.error(err))
})

module.exports = router;
