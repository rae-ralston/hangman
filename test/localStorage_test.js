import {expect} from 'chai'
const {
  saveSettings,
  getCurrentWord,
  getSettings,
} = require('../models/localStorage')

describe('saveSettings() & getSettings()', () => {


  it('save & get settings are functions', () => {
    expect(saveSettings).to.be.a('function')
    expect(getSettings).to.be.a('function')
  })

  saveSettings('currentWord', 'bannana')

  it('should save a word', () => {
    expect(getSettings('currentWord')).to.equal('bannana')
  })
})

