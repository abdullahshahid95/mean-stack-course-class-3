function getNumber() {
    var number = parseInt(prompt("Enter number"));
    alert("Original number: " + number + "\nReversed number: " + reverseNumber(number));
}
function reverseNumber(number) {
    var numberStr = number.toString();
    return parseInt(numberStr.split("").reverse().join(""));
}
getNumber();
