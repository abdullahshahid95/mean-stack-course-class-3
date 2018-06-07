function drawTriangle()
{
    var numberofRows: number =10;
	var outputBlock: string="";
    for (var i: number = 1; i <= numberofRows; i++)
    {
        for (var j: number = 1; j <= (numberofRows - i); j++)
        {
			outputBlock+=" ";
        }
        for(var k: number = 1; k <= i; k++)
        {
            outputBlock += "* ";
        }
		console.log(outputBlock);
		outputBlock="";
	}

}

drawTriangle();