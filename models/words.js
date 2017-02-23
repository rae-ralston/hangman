require('isomorphic-fetch');

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

const getRandomSadGif = gifArray => {
  const i = getRandomInt(0, gifArray.length)
  return gifArray[i]
}

const getRandomLevel = () => getRandomInt(1, 10)

const getRandomInt = (min, max) => 
  Math.floor(Math.random() * (max - min + 1) + min)

module.exports = {
  oneRandomWord, 
  getSpecificLengthWord, 
  uniqueLetters,
  displayHangmanWord,
  getRandomSadGif,
  getRandomLevel
}
