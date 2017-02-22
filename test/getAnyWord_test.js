import { expect } from 'chai'
const {
  getAnyNewWord, 
  getSpecificLengthWord, 
  oneRandomWord
} = require('../models/gameStatus')

describe('getAnyNewWord()', () => {

  it('should be a function', () => {
    expect(getAnyNewWord).to.be.a('function')
  })
})

describe('getSpecificLengthWord()', () => {

  it('should be a function', () => {
    expect(getSpecificLengthWord).to.be.a('function')
  })
})

describe('oneRandomWord()', () => {

  it('should be a function', () => {
    expect(oneRandomWord).to.be.a('function')
  })
})