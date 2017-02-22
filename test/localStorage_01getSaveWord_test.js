import {expect} from 'chai'
const {
  clear,
  saveSettings,
  getCurrentWord,
  getSettings,
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

