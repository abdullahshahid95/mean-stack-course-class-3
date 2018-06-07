function getValues() {
    var field1 = parseInt(prompt("Enter a number for field 1"));
    var field2 = parseInt(prompt("Enter a number for field 2"));
    var field3 = parseInt(prompt("Enter a number for field 3"));
    var field4 = parseInt(prompt("Enter a number for field 4"));
    alert("Open Console");
    console.log("Largest number: " + printLargest(field1, field2, field3, field4));
}
function printLargest() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var largest = 0;
    for (var arg = 0; arg < args.length; arg++) {
        if (isNaN(args[arg]))
            continue;
        else {
            if (args[arg] > largest)
                largest = args[arg];
        }
    }
    return largest;
}
getValues();
