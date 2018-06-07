function square(num1) {
    return num1.toString() + "^2" + " = " + (num1 * num1);
}
console.log(square(parseFloat(prompt("Enter a number to find its square"))));
