function drawParallelogram()
{
    var outputBlock: string =  "";

    for(var i: number = 1; i <= 10; i++)
    {
        if(i == 1 || i == 10)
        {
            for(var space = 1; space <= (10 - i); space++)
            {
                outputBlock += " ";
            }
            for(var line = 1; line <= 20; line++)
            {
                outputBlock += "* ";
            }

            outputBlock += "\n";
        }

        else
        {
            for(var space = 1; space <= (10 - i); space++)
            {
                outputBlock += " ";
            }
            for(var j: number = 1; j <= 20; j++)
            {
                if(j == 1 || j == 20)
                {
                    outputBlock += "* "
                }
                else
                {
                    outputBlock += "  ";
                }
            }

            outputBlock += "\n";
        }
    }

    console.clear();
    console.log("Parallelogram")
    console.log(outputBlock);
}

drawParallelogram();