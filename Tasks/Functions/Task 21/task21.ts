function getString()
{
    var str: string = prompt("Enter a string");
    alert("Longest word in '" + str + "' is " + findLongestWord(str));
}

function findLongestWord(str: string): string
{
    var strArray: string[] = str.split(" ");

    var longestIndex: number = 0;
    for(var i: number = 0; i < strArray.length; i++)
    {
        if(strArray[i].length > strArray[longestIndex].length)
        {
            longestIndex = i;
        }
    }

    return strArray[longestIndex];
}

getString();