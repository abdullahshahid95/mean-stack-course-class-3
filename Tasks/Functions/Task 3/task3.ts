function greeting()
{
    var firstName: string, lastName: string;

    firstName = prompt("Enter first name");
    lastName = prompt("Enter last name");

    console.log("Greetings " + firstName + " " + lastName + "!");
}

greeting();