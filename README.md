# Hangman
Rachel Ralston, 
[email](rachel@rachelralston.com)  |  [website](http://www.rachelralston.com)  |  [linkedin](http://www.linkedin.com/in/rachelralston)  |  [twitter](http://www.twitter.com/@rachelralston)

## Installation 
1. Clone repo
2. Install dependancies with `npm install`
3. Run with `npm start`
4. Visit `localhost:3000` to play the game
5. Run tests with `npm test`

## Project Details

### MVP Specs
- [X] Get a word from the [api](http://linkedin-reach.hagbpyjegb.us-west-2.elasticbeanstalk.com/words)
- [X] Losing Condition: User get's 6 incorrect guesses.
- [X] Winning Condition: User guesses word one letter at a time.
- [X] User must be able to see the total number of letters in the Mystery Word.
- [X] Correct guessed letters show while unguessed letters remain hidden.
- [X] Number of guesses remaining is displayed
- [X] List of incorrect guesses is displayed.

### Stretch Goal Specs
- [X] Configure difficulty level
- [X] Hangman diagram... [ASCII](http://ascii.co.uk/art/hangman) maybe? 
- [X] Multiple games in a row
- [ ] Support for guessing full word
- [ ] Multiplayer with socket.io (or similar)

### Known Issues / TODOS
- When a player wins more than one game and then looses the 'won games in a row' doesn't reset to 0
- Slice used words out of total words array for multi game streaks
- Something fun happens when you win a game.
- Polish UI.. maybe rework to look like a console game?
- More testing coverage needed.