function getInput()
{
    var str: string = prompt("Enter a string");

    alert("Origianl: " + str + "\n\n" + "Unique characters: " + extractUniqueChars(str));
}

function extractUniqueChars(str: string): string
{
    var unique: string = "";

    for(var i: number = 0; i < str.length; i++)
      {
        if(unique.indexOf(str.charAt(i)) < 0) 
        {
          unique += str.charAt(i);
        }
      }
      return unique;
}

getInput();