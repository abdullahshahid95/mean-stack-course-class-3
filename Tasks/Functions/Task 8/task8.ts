function counting(start: number, end: number)
{
    console.log("Start: " + start.toString());

    for(var i = start + 1; i < end; i++)
    {
        console.log(i);
    }

    console.log("End: " + end.toString());
}

var start: number = parseInt(prompt("Enter starting number"));
var end: number = parseInt(prompt("Enter ending number"));

counting(start, end);