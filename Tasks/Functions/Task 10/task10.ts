function getValues()
{
    var field1: number = parseFloat(prompt("Enter value for field 1"));
    var field2: number = parseFloat(prompt("Enter value for field 2"));
    var field3: number = parseFloat(prompt("Enter value for field 3"));
    var field4: number = parseFloat(prompt("Enter value for field 4"));

    console.log("Function call 1");
    printValues(field1, field2, field3, field4);

    console.log("\nFunction call 2");
    printValues(field1, field2, field3);

    console.log("\nFunction call 3");
    printValues(field1, field2);
}

function printValues(...args: number[])
{
    for(var arg: number = 0; arg < args.length; arg++)
    {
        if(isNaN(args[arg]))
            continue;
        
        console.log("Argument " + (arg + 1) + ": " + args[arg]);
    }
}

getValues();