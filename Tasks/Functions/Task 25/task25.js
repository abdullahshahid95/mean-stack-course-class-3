function getInput() {
    var str = prompt("Enter a string");
    var letter = prompt("Enter the letter to find in the string");
    alert("Number of '" + letter + "' in " + str + ": " + findOccurrence(str, letter));
}
function findOccurrence(str, letter) {
    str = str.toLocaleLowerCase();
    letter = letter.toLocaleLowerCase();
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == letter)
            count++;
    }
    return count;
}
getInput();
