function getInput() {
    var temperatureInC = parseFloat(prompt("Enter temperature in Celcius"));
    var temperatureInF = parseFloat(prompt("Enter temperature in Fahrenheit"));
    celciusToFahrenheit(temperatureInC);
    fahrenheitToCelcius(temperatureInF);
}
function celciusToFahrenheit(temperatureInC) {
    var temperatureInF = (temperatureInC * (9 / 5)) + 32;
    console.log(temperatureInC.toString() + "C is " + temperatureInF.toString() + "F");
}
function fahrenheitToCelcius(temperatureInF) {
    var temperatureInC = (temperatureInF - 32) * (5 / 9);
    console.log(temperatureInF.toString() + "F is " + temperatureInC.toString() + "C");
}
getInput();
