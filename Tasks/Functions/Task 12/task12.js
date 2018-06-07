function getValues() {
    var width = parseFloat(prompt("Enter width"));
    var height = parseFloat(prompt("Enter height"));
    var area = findArea(width, height);
    alert("Width: " + width + "\n" +
        "Height: " + height + "\n" +
        "Area: " + area);
}
function findArea(width, height) {
    var area = width * height;
    return area;
}
getValues();
