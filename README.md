# Hangman

## Installation 


## Parameters

### MVP
- Get a word from the api: http://linkedin-reach.hagbpyjegb.us-west-2.elasticbeanstalk.com/words
- Losing Condition: User get's 6 incorrect guesses.
- Winning Condition: User guesses word.

- User must be able to see the total number of letters in the Mystery Word.
- Correct guessed letters show while unguessed letters remain hidden.
- Number of guesses remaining is displayed
- List of incorrect guesses is displayed.

### Stretch Goals
- Configure difficulty level
- Hangman diagram... ASCII maybe? 
    - http://www.berkeleyinternet.com/perl/node30.html
    - http://ascii.co.uk/art/hangman
- Support for guessing full word
- multi word game
  + add score += 1 to correct answer logic
  + slice used words out of total words array

### Todo
- write a route that can get the word from the API
- write game logic that starts a game
- write logic for check guess
  - if correct push to letter display 
      - check if game won
  - if incorrect 
      - --guess left, 
      - add to guessed letters, 
      - STRETCH add hanging man view
      - check if game lost
- write game logic that ends a game
    + if won give won data to modal
    + if lost give lost data modal
    + (both modal have restart game, stretch: multi word games)


## Contact

Rachel Ralston, rachel@rachelralston.com
