import {expect} from 'chai'
const {
  clear,
  getCorrectGuessedLetters,
  getCurrentWord,
  getDifficulty,
  getGameInfo,
  getIncorrectGuessCount,
  getIncorrectGuessedLetters,
  getLostGame,
  getMinWordLength,
  getSettings,
  getSubmissionWarning,
  getUniqueLetters,
  getWinStreak,
  saveSettings,
} = require('../models/localStorage')

describe('saveSettings() & getSettings(): ', () => {
  it('are functions', () => {
    expect(saveSettings).to.be.a('function')
    expect(getSettings).to.be.a('function')
  })

  it('should save a word & get it back from localstorage', () => {
    saveSettings('currentWord', 'bannana')
    expect(getSettings('currentWord')).to.equal('bannana')
  })
})

describe('clear(): ', () => {
  it('is a function', () => {
    expect(clear).to.be.a('function')
  })

  it('returns null', () => {
    saveSettings('currentWord', 'bannana')
    clear()
    expect(getSettings('currentWord')).to.equal(null)
  })
})

describe('getCorrectGuessedLetters(): ', () => {
  it('is a functions', () => {
    expect(getCorrectGuessedLetters).to.be.a('function')
  })

  it('gets the correct guessed letters', () => {
    saveSettings('correctGuessedLetters', 'abc')
    expect(getCorrectGuessedLetters()).to.equal('abc')
  })
})

describe('getCurrentWord(): ', () => {
  it('is a functions', () => {
    expect(getCurrentWord).to.be.a('function')
  })

  it('gets the correct word', () => {
    saveSettings('currentWord', 'hello')
    expect(getCurrentWord()).to.equal('hello')
  })
})

describe('getDifficulty(): ', () => {
  it('is a functions', () => {
    expect(getDifficulty).to.be.a('function')
  })

  it('gets game\'s difficulty setting', () => {
    saveSettings('difficulty', 3)
    expect(getDifficulty()).to.equal(3)
  })
})

describe('getMinWordLength(): ', () => {
  it('is a functions', () => {
    expect(getMinWordLength).to.be.a('function')
  })

  it('gets game\'s difficulty setting', () => {
    saveSettings('minWordLength', 5)
    expect(getMinWordLength()).to.equal(5)
  })
})

describe('getGameInfo(): ', () => {
  it('is a functions', () => {
    expect(getGameInfo).to.be.a('function')
  })

  //TODO make this test
})

describe('getMinWordLength(): ', () => {
  it('is a functions', () => {
    expect(getMinWordLength).to.be.a('function')
  })

  it('gets game\'s difficulty setting', () => {
    saveSettings('minWordLength', 5)
    expect(getMinWordLength()).to.equal(5)
  })
})
