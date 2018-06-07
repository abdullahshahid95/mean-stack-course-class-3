function getInput() {
    var radius = parseFloat(prompt("Enter radius"));
    console.log("Radius: " + radius);
    calcCircumference(radius);
    calcArea(radius);
}
function calcCircumference(radius) {
    var circumference = 2 * (22 / 7) * radius;
    console.log("The circumference is " + circumference);
}
function calcArea(radius) {
    var area = (22 / 7) * (radius * radius);
    console.log("The is area is " + area);
}
getInput();
