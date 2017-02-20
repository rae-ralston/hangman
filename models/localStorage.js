const saveSettings = (name, settings) => {
  const saveName = name.toString();
  const saveSettings = settings.toString();

  (typeof(saveName) === 'string' && typeof(saveSettings) === 'string')
    ? localStorage.setItem(saveName, saveSettings)
    : console.log('Error in saving state of ' + saveName + ': ' + saveSettings);
}

const getSettings = name => {
  if (name === ('currentWord' || 'uniqueLetters' || 'guessedLetters' || 'correctGuessedLetters')) 
    return localStorage.getItem(name)
  else if (name === 'incorrectGuessCount') 
    return (parseInt(localStorage.getItem(name)))
  else {console.log('Error in getting setting ' + name)}
}

const getIncorrectGuessCount = () => parseInt(getSettings('incorrectGuessCount'))
const getUniqueLetters = () => getSettings('uniqueLetters')

const incrementBadGuesses = () => {
  let incorrectGuesses = getIncorrectGuessCount();
  incorrectGuesses += 1
  saveSettings('incorrectGuessCount', incorrectGuesses)
}

module.exports = {
  getIncorrectGuessCount,
  getUniqueLetters,
  saveSettings, 
  getSettings, 
  incrementBadGuesses
}
