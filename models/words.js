require('es6-promise').polyfill();
require('isomorphic-fetch');
// TODO: if time- try https://github.com/github/fetch && do I really need isomorphic
const {
  getIncorrectGuessCount, 
  getUniqueLetters, 
  saveSettings,
  saveCorrectGuess
} = require('./localStorage')

const getAnyNewWord = () => {
  const library = 'http://linkedin-reach.hagbpyjegb.us-west-2.elasticbeanstalk.com/words'
  return fetch(library)
    .then(words => words.text())
    .catch(err => console.error(err))
}

const getSpecificLengthWord = (level, minWordLength) => {
  const library = `http://linkedin-reach.hagbpyjegb.us-west-2.elasticbeanstalk.com/words?difficulty=${level}&minLength=${minWordLength}`
  return fetch(library)
    .then(words => words.text())
    .catch(err => console.error(err))
}

const oneRandomWord = words => {
  words = words.split('\n')
  const wordIndex = getRandomInt(0, words.length)
  return words[wordIndex]
}

const newGameWord = () => {
  const difficulty = 1  //val 1-10
  const minWordLength = 5

  getSpecificLengthWord(difficulty, minWordLength)
    .then(words => oneRandomWord(words))
    .then(word => {
      return {word, uniqueLetters: uniqueLetters(word)}
    })
    .catch(err => console.error(err))
}

const uniqueLetters = word => {
  let uniqueLetters = ""
  for(let i = 0; i < word.length; i++) {
    if(!uniqueLetters.includes(word[i])) {uniqueLetters += word[i]}
  }
  return uniqueLetters
}

const displayHangmanWord = (correctGuessedLetters, currentWord) => {
  let hangmanDisplay
  if(correctGuessedLetters.length > 0) {
    console.log('inside if')
    // correctGuessedLetters = correctGuessedLetters.split('')
    hangmanDisplay = currentWord.reduce((hangmanArray, letter) => {
      correctGuessedLetters.includes(letter) 
        ? hangmanArray.push(letter) 
        : hangmanArray.push(" ")
      return hangmanArray
    }, [])
    return hangmanDisplay
  }
  hangmanDisplay = []
  return hangmanDisplay
}

const getRandomInt = (min, max) => 
  Math.floor(Math.random() * (max - min + 1) + min)

module.exports = {
  newGameWord, 
  oneRandomWord, 
  getSpecificLengthWord, 
  uniqueLetters,
  displayHangmanWord
}
