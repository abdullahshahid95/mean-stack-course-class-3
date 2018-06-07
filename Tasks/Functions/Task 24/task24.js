function getInput() {
    var str = prompt("Enter a string");
    alert("Origianl: " + str + "\n\n" + "Unique characters: " + extractUniqueChars(str));
}
function extractUniqueChars(str) {
    var unique = "";
    for (var i = 0; i < str.length; i++) {
        if (unique.indexOf(str.charAt(i)) < 0) {
            unique += str.charAt(i);
        }
    }
    return unique;
}
getInput();
