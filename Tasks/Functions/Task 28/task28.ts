function getInput()
{
    var radius: number = parseFloat(prompt("Enter radius"));

    console.log("Radius: " +  radius);
    calcCircumference(radius);
    calcArea(radius);
}

function calcCircumference(radius: number)
{
    var circumference: number = 2 * (22/7) * radius;

    console.log("The circumference is " + circumference);
}

function calcArea(radius: number)
{
    var area: number = (22/7) * (radius * radius);

    console.log("The is area is " + area);
}

getInput();