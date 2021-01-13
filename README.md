# lab-02-guess-number

- Guess the number
  > generate random number 1-20 (inclusive)
  > user has 4 guesses
  > update guesses left each turn
  > inform user if guess was too high or too low
  > end game on win and/or no guesses remaining
  > display win/loss message
  > track user wins & losses

- Guessing Game Title

- Instructions to user

- Number input for guess
  *> const for DOM element #guess-input
  > if guess is invalid, notify user and have them guess again

- Buttons
  *> const for DOM element
  > start game #start-game
  > reset game #reset-game
  > submit guess #submit-guess

- Spans for user info
  *> const for DOM element
  > remaining guesses #remaining-guesses
  > wins #total-wins
  > losses #total-losses

- Div for game info
  *> const for DOM element #user-outcome
  > guess qualifier #guess-qualifier
  > success story #end-game-message

- Information to display
  > remaining guesses
  > previous guess too high/low
  > success story
  > win/loss totals

- compareNumbers function
  > return 1 for too high
  > return -1 for too low
  > return 0 for right
  > write test for each outcome
  > refactor function in utils.js with parameters for guess and correctNumber





// Stretch Goals

- Reset Button

- Refactor UI Work Functions