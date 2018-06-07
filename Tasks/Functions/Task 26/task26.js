function getInput() {
    var birthYear = parseInt(prompt("Enter birth year"));
    var todayDate = new Date();
    var currentYear = todayDate.getFullYear();
    alert(calculateAge(birthYear, currentYear));
}
function calculateAge(birthYear, currentYear) {
    var age = currentYear - birthYear;
    return "You are either " + age.toString() + " or " + (age - 1).toString();
}
getInput();
