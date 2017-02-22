import {expect} from 'chai'
const {
  clear,
  getCorrectGuessedLetters,
  getCurrentWord,
  getGameDifficultySettings,
  getGameInfo,
  getIncorrectGuessCount,
  getIncorrectGuessedLetters,
  getLostGame,
  getSettings,
  getSubmissionWarning,
  getUniqueLetters,
  getWinStreak,
  saveGameDifficultySettings,
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

describe('the getting functions get the appropriate data: ', () => {
  it('they\'re all functions', () => {
    expect(getGameDifficultySettings).to.be.a('function')
    expect(getGameInfo).to.be.a('function')
    expect(getIncorrectGuessCount).to.be.a('function')
    expect(getIncorrectGuessedLetters).to.be.a('function')
    expect(getLostGame).to.be.a('function')
    expect(getSettings).to.be.a('function')
    expect(getSubmissionWarning).to.be.a('function')
    expect(getUniqueLetters).to.be.a('function')
    expect(getWinStreak).to.be.a('function')
  })

  it('getCorrectGuessedLetters() gets the correct guessed letters', () => {
    saveSettings('correctGuessedLetters', 'abc')
    expect(getCorrectGuessedLetters()).to.equal('abc')
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

describe('getGameDifficultySettings(): ', () => {
  it('is a functions', () => {
    expect(getGameDifficultySettings).to.be.a('function')
  })

  it('gets game\'s diffiuclty setting', () => {
    let difficultySettings = {difficulty: 3, minWordLength: 5}
    saveGameDifficultySettings(difficultySettings)
    let settings = getGameDifficultySettings()
    console.dir('!!!!!!!',settings)
    expect(getGameDifficultySettings()).to.be.a('object')
    expect(settings.difficulty).to.equal(3)
    expect(settings.minWordLength).to.equal(5)
  })
})
