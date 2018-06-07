function getValues() {
    var field1 = parseFloat(prompt("Enter value for field 1"));
    var field2 = parseFloat(prompt("Enter value for field 2"));
    var field3 = parseFloat(prompt("Enter value for field 3"));
    var field4 = parseFloat(prompt("Enter value for field 4"));
    console.log("Function call 1");
    printValues(field1, field2, field3, field4);
    console.log("\nFunction call 2");
    printValues(field1, field2, field3);
    console.log("\nFunction call 3");
    printValues(field1, field2);
}
function printValues() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    for (var arg = 0; arg < args.length; arg++) {
        if (isNaN(args[arg]))
            continue;
        console.log("Argument " + (arg + 1) + ": " + args[arg]);
    }
}
getValues();
