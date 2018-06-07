function getInput()
{
    var str: string = prompt("Enter a string");
    var letter: string = prompt("Enter the letter to find in the string");

    alert("Number of '" + letter + "' in " + str + ": " + findOccurrence(str, letter));
}

function findOccurrence(str: string, letter: string): number
{
    str = str.toLocaleLowerCase();
    letter = letter.toLocaleLowerCase();

    var count = 0;
    for(var i: number = 0; i < str.length; i++)
    {
        if(str[i] == letter)
            count++;

    }

    return count;
}

getInput();