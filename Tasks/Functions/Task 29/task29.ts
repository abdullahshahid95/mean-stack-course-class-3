function getInput()
{
    var temperatureInC: number = parseFloat(prompt("Enter temperature in Celcius"));
    var temperatureInF: number = parseFloat(prompt("Enter temperature in Fahrenheit"));

    celciusToFahrenheit(temperatureInC);
    fahrenheitToCelcius(temperatureInF);
}

function celciusToFahrenheit(temperatureInC: number)
{
    var temperatureInF: number = (temperatureInC * (9/5)) + 32;

    console.log(temperatureInC.toString() + "C is " + temperatureInF.toString() + "F" );
}

function fahrenheitToCelcius(temperatureInF: number)
{
    var temperatureInC: number = (temperatureInF - 32) * (5/9);

    console.log(temperatureInF.toString() + "F is " + temperatureInC.toString() + "C" );
}

getInput();