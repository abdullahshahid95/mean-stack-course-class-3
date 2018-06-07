function getValues()
{
    var field1: number = parseInt(prompt("Enter a number for field 1"));
    var field2: number = parseInt(prompt("Enter a number for field 2"));
    var field3: number = parseInt(prompt("Enter a number for field 3"));
    var field4: number = parseInt(prompt("Enter a number for field 4"));
    
    alert("Open Console");

    console.log("Largest number: " + printLargest(field1, field2, field3, field4));
}

function printLargest(...args : number[]): number
{
    var largest: number = 0;
    for(var arg: number = 0; arg < args.length; arg++)
    {
        if(isNaN(args[arg]))
            continue;
        else
        {
            if(args[arg] > largest)
                largest = args[arg];
        }
    }

    return largest;
}

getValues();