function getString() {
    var str = prompt("Enter string");
    checkString(str);
}
function checkString(str) {
    var lowerCase = str.toLowerCase();
    var reversed = lowerCase.split("").reverse().join("");
    if (lowerCase == reversed)
        alert("'" + str + "' is palindrome");
    else
        alert("'" + str + "' is not palindrome");
}
getString();
