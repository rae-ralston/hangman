// The things I'm saving
// word
// uniqueLetters 
// incorrectGuessCount
// guessedLetters 

const saveSettings = (name, settings) => {
  const name = name.toString();
  const settings = settings.toString();

  (typeof(name) === 'string' && typeof(settings) === 'string')
    ? localStorage.setItem(name, settings)
    : console.log('Error: Saving state of ' + name + ': ' + settings);
}

const getSettings = name => {
  if (name === ('currentWord' || 'uniqueLetters' || 'guessedLetters')) 
    return localStorage.getItem(name)
  else if (name === 'incorrectGuessCount') 
    return (parseInt(localStorage.getItem(name)))
  else {console.log('Error in getting setting ' + name)}
}

const getIncorrectGuesses = () => parseInt(getSettings('incorrectGuessCount'))

const incrementGuesses = () => {
  let incorrectGuesses = getIncorrectGuesses();
  incorrectGuesses += 1
  saveSettings('incorrectGuessCount', incorrectGuesses)
}

module.exports = {getIncorrectGuesses, saveSettings, getSettings, incrementScore}