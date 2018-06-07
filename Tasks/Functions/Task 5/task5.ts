function operation(num1: number, num2: number, operator: string): string
{
    if(operator == "+")
        return num1.toString() + " + " + num2.toString() + " = " + (num1 + num2);
    
    else if(operator == "-")
        return num1.toString() + " - " + num2.toString() + " = " + (num1 - num2);
    
    else if(operator == "*")
        return num1.toString() + " x " + num2.toString() + " = " + (num1 * num2);

    else if(operator == "/")
        return num1.toString() + " / " + num2.toString() + " = " + (num1 / num2);
    
    else
        return "Invalid Operator";
}

console.log
(
    operation
    (
        parseFloat(prompt("Enter 1st number")), 
        parseFloat(prompt("Enter 2nd number")),
        prompt("Enter operator")
    )
);