function getString() {
    var str = prompt("Enter string");
    makeUpperCase(str);
}
function makeUpperCase(str) {
    var strArray = str.split(" ");
    for (var i = 0; i < strArray.length; i++) {
        strArray[i] = strArray[i].charAt(0).toUpperCase() + strArray[i].substring(1);
    }
    var CapitalizedStr = strArray.join(" ");
    console.log("Original string: " + str);
    console.log("Uppercase: " + CapitalizedStr);
}
getString();
