function getInput()
{
    // var age: number = parseInt(prompt("Enter your age"));
    // var amountPerDay: number = parseFloat(prompt("Enter amount per day"));

    calculateSupply(90, 6);
    calculateSupply(65, 10);
    calculateSupply(50, 20);
}

function calculateSupply(age: number, amountPerDay: number)
{
    amountPerDay = Math.floor(amountPerDay);

    var ageInDays: number = age * 365;

    var amountInLife: number = amountPerDay * ageInDays;

    alert("You will need " + amountInLife + " to last you until the ripe old age of " + age);
}

getInput();