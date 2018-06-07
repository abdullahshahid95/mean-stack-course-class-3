function calculateHypotenuse(base: number, perpendicular: number): number
{
    function calculateSquare(): number
    {
        var hypotenuseSquare = (base*base) + (perpendicular*perpendicular);
        return hypotenuseSquare;
    }

    return Math.sqrt(calculateSquare());
}

var base: number = parseFloat(prompt("Enter base"));
var perpendicular: number = parseFloat(prompt("Enter perpendicular"));

var hypotenuse: number = calculateHypotenuse(base, perpendicular);

console.log("Base = " + base);
console.log("Perpendicular = " + perpendicular);
console.log("Hypotenuse = " + hypotenuse);