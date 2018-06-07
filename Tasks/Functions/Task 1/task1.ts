function greeting(name: string): string
{
    return "Hello " + name;
}
var userName: string = prompt("Enter your name");
alert(greeting(userName));