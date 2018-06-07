function getValues()
{
    var base: number = parseFloat(prompt("Enter base"));
    var power: number = parseFloat(prompt("Enter power"));

    var result:number = findPower(base, power);

    console.log(base.toString() + "^" + power.toString() + " = " + 
                findPower(base, power).toString());
}

function findPower(base: number, power: number): number
{
    return Math.pow(base, power);
}

getValues();