function getInput()
{
    var str: any;

    str = 100;
    findTypeOf(str);

    str = "string";
    findTypeOf(str);

    str = false;
    findTypeOf(str);

    str = {};
    findTypeOf(str);

    str = function(){};
    findTypeOf(str);

    str = undefined;
    findTypeOf(str);
}

function findTypeOf(str: any)
{
    console.log("Argument: " + str.toString() + "\n" + "Type: " + typeof(str));
}

getInput();