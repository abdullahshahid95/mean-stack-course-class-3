function getString()
{
    var str: string = prompt("Enter string");
    makeUpperCase(str);
}

function makeUpperCase(str: string)
{
    var strArray: string[] = str.split(" ");

    for(var i: number = 0; i < strArray.length; i++)
    {
        strArray[i] = strArray[i].charAt(0).toUpperCase() + strArray[i].substring(1);
    }

    var CapitalizedStr: string = strArray.join(" ");
    
    console.log("Original string: " + str);
    console.log("Uppercase: " + CapitalizedStr);
}

getString();