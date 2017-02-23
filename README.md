# Hangman
Rachel Ralston, 
[email](rachel@rachelralston.com)  |  [website](http://www.rachelralston.com)  |  [linkedin](http://www.linkedin.com/in/rachelralston)  |  [twitter](http://www.twitter.com/@rachelralston)

## Installation 
1. Clone repo
2. install dependancies with `npm install`
3. run with `npm start`
4. visit `localhost:3000` to play the game
5. run tests with `npm test`

## Parameters

### MVP
- [X] Get a word from the [api](http://linkedin-reach.hagbpyjegb.us-west-2.elasticbeanstalk.com/words)
- [X] Losing Condition: User get's 6 incorrect guesses.
- [X] Winning Condition: User guesses word one letter at a time.

- [X] User must be able to see the total number of letters in the Mystery Word.
- [X] Correct guessed letters show while unguessed letters remain hidden.
- [X] Number of guesses remaining is displayed
- [X] List of incorrect guesses is displayed.

### Stretch Goals
- [X] Configure difficulty level
- [X] Hangman diagram... ASCII maybe? 
  + http://ascii.co.uk/art/hangman
- [X] Multi word game
  + TODO slice used words out of total words array
- [ ] Support for guessing full word
- [ ] Multiplayer with socket.io (or similar)

### Issues
- when a player wins more than one game and then looses the 'won games in a row' doesn't reset to 0
- more testing coverage needed