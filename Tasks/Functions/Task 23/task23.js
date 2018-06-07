function getInput() {
    var str;
    str = 100;
    findTypeOf(str);
    str = "string";
    findTypeOf(str);
    str = false;
    findTypeOf(str);
    str = {};
    findTypeOf(str);
    str = function () { };
    findTypeOf(str);
    str = undefined;
    findTypeOf(str);
}
function findTypeOf(str) {
    console.log("Argument: " + str.toString() + "\n" + "Type: " + typeof (str));
}
getInput();
