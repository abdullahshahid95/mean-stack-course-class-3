function getInput() {
    // var age: number = parseInt(prompt("Enter your age"));
    // var amountPerDay: number = parseFloat(prompt("Enter amount per day"));
    calculateSupply(90, 6);
    calculateSupply(65, 10);
    calculateSupply(50, 20);
}
function calculateSupply(age, amountPerDay) {
    amountPerDay = Math.floor(amountPerDay);
    var ageInDays = age * 365;
    var amountInLife = amountPerDay * ageInDays;
    alert("You will need " + amountInLife + " to last you until the ripe old age of " + age);
}
getInput();
