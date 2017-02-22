import {expect} from 'chai'
const {
  clear,
  getSettings,
  saveSettings,
} = require('../models/localStorage')

describe('clear()', () => {


  it('is a function', () => {
    expect(clear).to.be.a('function')
  })

  it('returns null', () => {
    saveSettings('currentWord', 'bannana')
    clear()
    expect(getSettings('currentWord')).to.equal(null)
  })
})