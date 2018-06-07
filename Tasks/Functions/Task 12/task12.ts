function getValues()
{
    var width: number = parseFloat(prompt("Enter width"));
    var height: number = parseFloat(prompt("Enter height"));

    var area: number = findArea(width, height);

    alert("Width: " + width + "\n" + 
          "Height: " + height + "\n" +
          "Area: " + area);
}

function findArea(width: number, height: number): number
{
    var area: number = width * height;

    return area;
}

getValues();