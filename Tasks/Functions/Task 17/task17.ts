function getRandomDice(): number
{
    return Math.floor(Math.random() * 6) + 1;
}

alert("Random number from dice: " + getRandomDice());