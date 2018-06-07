function operation(num1, num2, operator) {
    if (operator == "+")
        return num1.toString() + " + " + num2.toString() + " = " + (num1 + num2);
    else if (operator == "-")
        return num1.toString() + " - " + num2.toString() + " = " + (num1 - num2);
    else if (operator == "*")
        return num1.toString() + " x " + num2.toString() + " = " + (num1 * num2);
    else if (operator == "/")
        return num1.toString() + " / " + num2.toString() + " = " + (num1 / num2);
    else
        return "Invalid Operator";
}
console.log(operation(parseFloat(prompt("Enter 1st number")), parseFloat(prompt("Enter 2nd number")), prompt("Enter operator")));
