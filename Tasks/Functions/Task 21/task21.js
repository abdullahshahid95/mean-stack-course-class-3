function getString() {
    var str = prompt("Enter a string");
    alert("Longest word in '" + str + "' is " + findLongestWord(str));
}
function findLongestWord(str) {
    var strArray = str.split(" ");
    var longestIndex = 0;
    for (var i = 0; i < strArray.length; i++) {
        if (strArray[i].length > strArray[longestIndex].length) {
            longestIndex = i;
        }
    }
    return strArray[longestIndex];
}
getString();
