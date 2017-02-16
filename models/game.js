require('es6-promise').polyfill();
require('isomorphic-fetch');
// TODO: try https://github.com/github/fetch && do I really need isomorphic

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
  const wordIndex = getRandomInt(0, words.length)
  
  words = words.split('\n')
  console.log('words', words[wordIndex])
  return words[wordIndex]
}

const getRandomInt = (min, max) => 
  Math.floor(Math.random() * (max - min + 1) + min)

const checkGuess = (word, guess) => 
  word.includes(guess) ? correctAnswer() : incorrectAnswer()

const correctAnswer = () => {
  // display updated game/guess UI
  console.log('You got it right!')
}
const incorrectAnswer = () => {
  // guesses left -= 1
  // push letters to guessed letters UI
  console.log('Wrong :<')
}


module.exports = {
  getAnyNewWord,
  getSpecificLengthWord,
  oneRandomWord,
  checkGuess
}