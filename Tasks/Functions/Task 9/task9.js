function calculateHypotenuse(base, perpendicular) {
    function calculateSquare() {
        var hypotenuseSquare = (base * base) + (perpendicular * perpendicular);
        return hypotenuseSquare;
    }
    return Math.sqrt(calculateSquare());
}
var base = parseFloat(prompt("Enter base"));
var perpendicular = parseFloat(prompt("Enter perpendicular"));
var hypotenuse = calculateHypotenuse(base, perpendicular);
console.log("Base = " + base);
console.log("Perpendicular = " + perpendicular);
console.log("Hypotenuse = " + hypotenuse);
