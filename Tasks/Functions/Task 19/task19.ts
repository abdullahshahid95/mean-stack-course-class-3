function getString()
{
    var str: string = prompt("Enter string");
    checkString(str);
}

function checkString(str: string)
{
    var lowerCase: string = str.toLowerCase();
    var reversed: string = lowerCase.split("").reverse().join("");

    if(lowerCase == reversed)
        alert("'" + str + "' is palindrome");
    else
    alert("'" + str + "' is not palindrome");
}

getString();