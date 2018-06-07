function getValues() {
    var base = parseFloat(prompt("Enter base"));
    var power = parseFloat(prompt("Enter power"));
    var result = findPower(base, power);
    console.log(base.toString() + "^" + power.toString() + " = " +
        findPower(base, power).toString());
}
function findPower(base, power) {
    return Math.pow(base, power);
}
getValues();
