import {expect} from 'chai'
const {
  saveSettings,
  getCurrentWord,
  getSettings,
} = require('../models/localStorage')

describe.only('saveSettings() & getSettings()', () => {

  it('should be a function', () => {
    expect(saveSettings).to.be.a('function')
    expect(getSettings).to.be.a('function')
  })

  saveSettings('currentWord', 'bannana')

  it('should save a word', () => {
    expect(getSettings()).to.be('bannana')
  })
})

