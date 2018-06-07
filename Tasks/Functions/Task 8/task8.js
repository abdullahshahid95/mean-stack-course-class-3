function counting(start, end) {
    console.log("Start: " + start.toString());
    for (var i = start + 1; i < end; i++) {
        console.log(i);
    }
    console.log("End: " + end.toString());
}
var start = parseInt(prompt("Enter starting number"));
var end = parseInt(prompt("Enter ending number"));
counting(start, end);
