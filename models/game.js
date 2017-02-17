require('es6-promise').polyfill();
require('isomorphic-fetch');

module.exports = class Game {
  constructor(word, uniqueLetters) {
    this.word = word
    this.uniqueLetters = uniqueLetters
    this.incorrectGuessCount = 0
    this.guessedLetters = []
    this.correctGuesses = []
    this.won = false
  }

  checkGuess(guess) {
    return this.word.includes(guess) 
      ? this.correctAnswer(guess) 
      : this.incorrectAnswer(guess)
  }

  correctAnswer(guess) {
    this.correctGuesses += guess
    checkWin()
  }

  incorrectAnswer(guess) {
    this.incorrectGuessCount += 1
    this.guessedLetters.push(guess)
    checkWin()
  }

  checkWin(){
    if(this.incorrectGuessCount >= 6){
      // Sorry, you lose
    }

    if(this.uniqueLetters.length === this.correctGuesses.length){
      // You WON :D
    }
  }
}
