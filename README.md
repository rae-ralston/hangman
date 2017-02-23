# Hangman
Rachel Ralston: [email](rachel@rachelralston.com)  |  [website](http://www.rachelralston.com)  |  [linkedin](http://www.linkedin.com/in/rachelralston)  |  [twitter](http://www.twitter.com/@rachelralston)

## Installation 
1. Clone repo [from Github](https://github.com/rachel-ftw/hangman)
2. Install dependancies with `npm install`
3. Run with `npm start`
4. Visit `localhost:3000` to play the game
5. Run tests with `npm test`

## Project Walkthrough

**About**
    This project took me 18-20 hrs all together, most of which was one 12 hr marathon. I did rabit hole a bit (console game? That'd be fun! Let's go with full stack though. React? ...My time is super limited, so let's prioritize done over fancy tech.) It was well within my comfort zone. I have a lot of thoughts on how to improve, first is to refactor to use cookie storage (started on a branch) & fix a couple small known bugs, then make it a multi player game with socket.io (I've never used the technology and I'm interested in it). Finally I'd polish the UI.

    If I were to expand it into users I'd probably have to stop using local storage and switch to a database that would hold things like users, their individual games, multi-player games, etc.

**Stack**: 
- Routing: Express
- Javascript: ES6 & Babel
- Temlating: [handlebars](http://handlebarsjs.com/)
- Testing: Mocha & Chai
- Storage: localStorage in Node w [node-localStorage](https://github.com/lmaccherone/node-localstorage)

**File Structure**:
- bin
    + www : sets up server & HTTP details
- models
    + gameStatus.js: Game logic & state
    + hangman.js: ACSII hangman at different stages of gamplay
    + localStorage.js: Save/retrieve game data, setup & logic
    + sadGifs.js: Array of sad gifs for when people lose.
    + words.js: API word retrieval and working with the game words
- public
    + stylesheets
        * style.css
    + favicon.ico
- routes
    + index.js: all the routing for the project
- test
    + localStorage_test.js: testing some of the localStorage functions 
- views
    + error.handlebars: rendering error message
    + index.handlebars: primary gameplay page
    + landing.handlebars: start game page
    + layout.handlebars: html setup
- .babelrc: setting up babel
- .gitignore: outlines the files github should ignore
- app.js: express set up file
- LICENSE: MIT
- package.json: project setup, scripts & modules
- README.md: You're reading this. Good job.

**Branches**:
cookieStorage
    When I initally went through the project I was having trouble with localStorage and because I was short on time and was having trouble making it work I choose to use a node package that reproduces local storage server side. I was talking over my project with a friend and they reasoned that this would mean that multiple browsers couldn't play the game at once. I thought that was smart, so I started to figure out how to store the game in a cookie, but ran out of time. 
 document your thought process and/or code structure, and describe any creative
extensions attempted or implemented

## Specs & Issues

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
- Change storage to cookie storage with express session
- When a player wins more than one game and then looses the 'won games in a row' doesn't reset to 0
- Slice used words out of total words array for multi game streaks
- Something fun happens when you win a game.
- Polish UI.. maybe rework to look like a console game?
- More testing coverage needed.
