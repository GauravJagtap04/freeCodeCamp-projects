#!/bin/bash

PSQL="psql --username=freecodecamp --dbname=number_guess -t --no-align --tuples-only -c"

echo "Enter your username:"
read USERNAME

# Get user information if exists
GAMES_PLAYED=$($PSQL "SELECT games_played FROM users WHERE username='$USERNAME'")
BEST_GAME=$($PSQL "SELECT best_game FROM users WHERE username='$USERNAME'")

# If user doesn't exist
if [[ -z $GAMES_PLAYED ]]
then
  # Insert new user
  INSERT_USER=$($PSQL "INSERT INTO users(username, games_played, best_game) VALUES('$USERNAME', 0, 0)")
  echo "Welcome, $USERNAME! It looks like this is your first time here."
else
  echo "Welcome back, $USERNAME! You have played $GAMES_PLAYED games, and your best game took $BEST_GAME guesses."
fi

# Generate random number between 1 and 1000
SECRET_NUMBER=$(( RANDOM % 1000 + 1 ))
NUMBER_OF_GUESSES=0

echo "Guess the secret number between 1 and 1000:"

while true
do
  read GUESS
  
  # If input is not an integer
  if [[ ! $GUESS =~ ^[0-9]+$ ]]
  then
    echo "That is not an integer, guess again:"
    continue
  fi

  # Increment number of guesses
  ((NUMBER_OF_GUESSES++))

  # Check guess
  if [[ $GUESS -eq $SECRET_NUMBER ]]
  then
    break
  elif [[ $GUESS -gt $SECRET_NUMBER ]]
  then
    echo "It's lower than that, guess again:"
  else
    echo "It's higher than that, guess again:"
  fi
done

# Game is won - update stats
echo "You guessed it in $NUMBER_OF_GUESSES tries. The secret number was $SECRET_NUMBER. Nice job!"

# Update games played
if [[ -z $GAMES_PLAYED ]]
then
  GAMES_PLAYED=0
fi
NEW_GAMES_PLAYED=$((GAMES_PLAYED + 1))

# Update best game if this game was better or if it's their first game
if [[ -z $BEST_GAME || $BEST_GAME -eq 0 || $NUMBER_OF_GUESSES -lt $BEST_GAME ]]
then
  UPDATE_STATS=$($PSQL "UPDATE users SET games_played = $NEW_GAMES_PLAYED, best_game = $NUMBER_OF_GUESSES WHERE username = '$USERNAME'")
else
  UPDATE_STATS=$($PSQL "UPDATE users SET games_played = $NEW_GAMES_PLAYED WHERE username = '$USERNAME'")
fi