function sum(num1, num2) {
    return num1.toString() + " + " + num2.toString() + " = " + (num1 + num2);
}
console.log(sum(parseFloat(prompt("Enter 1st number")), parseFloat(prompt("Enter 2nd number"))));
