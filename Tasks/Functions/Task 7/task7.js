function factorial(num1) {
    if (num1 > 1)
        return (num1 * factorial(num1 - 1));
    else
        return 1;
}
var num = parseFloat(prompt("Enter a number to find its factorial"));
console.log("Factorial of " + num.toString() + " is " + factorial(num));
