function getNumber()
{
    var number: number = parseInt(prompt("Enter number"));
    alert("Original number: " + number + "\nReversed number: " + reverseNumber(number));
}

function reverseNumber(number: number)
{
    var numberStr: string = number.toString();
    
    return parseInt(numberStr.split("").reverse().join(""));
}

getNumber();