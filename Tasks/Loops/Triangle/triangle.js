function drawTriangle() {
    var numberofRows = 10;
    var outputBlock = "";
    for (var i = 1; i <= numberofRows; i++) {
        for (var j = 1; j <= (numberofRows - i); j++) {
            outputBlock += " ";
        }
        for (var k = 1; k <= i; k++) {
            outputBlock += "* ";
        }
        console.log(outputBlock);
        outputBlock = "";
    }
}
drawTriangle();
