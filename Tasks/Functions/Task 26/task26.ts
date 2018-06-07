function getInput()
{
    var birthYear: number = parseInt(prompt("Enter birth year"));
    var todayDate: Date = new Date();
    var currentYear: number = todayDate.getFullYear();

    alert(calculateAge(birthYear, currentYear));
}

function calculateAge(birthYear: number, currentYear: number)
{
    var age: number = currentYear - birthYear;

    return "You are either " + age.toString() + " or " + (age-1).toString();
}

getInput();