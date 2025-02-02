#! /bin/bash

PSQL="psql --username=freecodecamp --dbname=periodic_table -t --no-align --tuples-only -c"

if [[ -z $1 ]]
then
  echo "Please provide an element as an argument."
else
  INPUT_EXISTS=$($PSQL "select * from elements where atomic_number::TEXT = '$1' or symbol = '$1' or name = '$1'")
  if [[ -z $INPUT_EXISTS ]]
  then
    echo "I could not find that element in the database."
  else
    COMBINED_TABLE=$($PSQL "select * from properties left join elements on properties.atomic_number = elements.atomic_number inner join types on properties.type_id = types.type_id where properties.atomic_number::TEXT = '$1' or symbol = '$1' or name = '$1'")
    echo "$COMBINED_TABLE" | while IFS="|" read ATOMIC_NUMBER ATOMIC_MASS MELTING_POINT BOILING_POINT TYPE_ID ATOMIC_NUMBER_N SYMBOL NAME TYPE_ID_N TYPE
    do
      echo "The element with atomic number $ATOMIC_NUMBER is $NAME ($SYMBOL). It's a $TYPE, with a mass of $ATOMIC_MASS amu. $NAME has a melting point of $MELTING_POINT celsius and a boiling point of $BOILING_POINT celsius."
    done
  fi
fi