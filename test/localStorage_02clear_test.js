import {expect} from 'chai'
const {
  clear,
  getSettings,
  saveSettings,
} = require('../models/localStorage')

describe('clear()', () => {

  saveSettings('currentWord', 'bannana')
  clear()

  it('is a function', () => {
    expect(clear).to.be.a('function')
  })

  it('returns null', () => {
    expect(getSettings('currentWord')).to.equal(null)
  })
})