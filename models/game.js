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

const chooseAWord = words => {
  words = words.split('\n')
  // TODO for multi word games at same dificulty level slice used words out of array
  const wordIndex = getRandomInt(0, words.length)
  console.log('words', words[wordIndex])
  return words[wordIndex]
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = {
  getAnyNewWord,
  getSpecificLengthWord,
  chooseAWord
}