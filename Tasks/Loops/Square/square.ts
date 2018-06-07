function drawSquare()
{
    var outputBlock: string = "";

    // for(var i: number = 1; i <= 10; i++)
    // {
    //     for(var j: number = 1; j <= 10; j++)
    //     {
    //         outputBlock += "* ";
    //     }

    //     outputBlock += "\n";
    // }

    // console.log(outputBlock);
    
    for(var i: number = 1; i <= 10; i++)
    {
        if(i == 1 || i == 10)
        {
            for(var line = 1; line <= 10; line++)
            {
                outputBlock += "* ";
            }

            outputBlock += "\n";
        }

        else
        {
            for(var j: number = 1; j <= 10; j++)
            {
                if(j == 1 || j == 10)
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
    console.log(outputBlock);
}
drawSquare();