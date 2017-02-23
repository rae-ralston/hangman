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
  getDifficulty,
  getMinWordLength,
  getGameInfo,  
  saveGameDifficultySettings,
} = require('../models/localStorage')
const {newGame, checkGuess, continueGame} = require('../models/gameStatus')
const {hungMan} = require('../models/hangman')
const sadGifs = require('../models/sadGifs')

router.get('/', (request, response) => {
  response.cookie('hii', 'yes')
  console.log('cookie?', request.cookies)
  clear()
  response.render('landing', {hungMan:hungMan.whole})
})

router.all('/newgame', (request, response) => {
    const difficulty = request.body.selectDifficulty
    let minWordLength = request.body.selectWordLength
    let save = request.cookies
    // console.log('=====', request.cookies.difficulty = 8)
    save.difficulty = "blerg"
    if(minWordLength === "Surprise Me") {minWordLength = getRandomLevel()}
    // save("minWordLength", minWordLength)
    console.log('minwordlenght', minWordLength)
    getSpecificLengthWord(difficulty, minWordLength)
      .then(words => oneRandomWord(words))
      .then(word => {
        console.log('cookie', response.cookie)
        // save("word", word)
        // save("uniqueLetters", uniqueLetters(word))
        // save("correctLetters", "")
        // save("incorrectLetters", "")
        // save("incorrectGuessCount", 0)
        // save("lostGame", false)
        // save("warning", "")
        // save("winStreak", 0)
  response.render('landing', {hungMan:hungMan.whole})

        console.log('at the end cokie', request.cookies)
        response.redirect('/play')
      })
      .catch(err => console.error(err))
  })

router.get('/continuegame', (request, response) => {
  let difficulty = getDifficulty()
  let minWordLength = getMinWordLength()

  getSpecificLengthWord(difficulty, minWordLength)
    .then(words => oneRandomWord(words))
    .then(word => {
      return {word, uniqueLetters: uniqueLetters(word)}
    })
    .then(wordInfo => {
      wordInfo.difficulty = difficulty
      wordInfo.minWordLength = minWordLength
      continueGame(wordInfo)
      response.redirect('/play')
    })
    .catch(err => console.error(err))
})

router.get('/play', (request, response) => {
  console.log('cookie?', request.cookies)
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
