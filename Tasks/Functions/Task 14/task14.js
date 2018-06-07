function getValues() {
    var arr = [5, 4, 3, 2, 1];
    console.log("Array: " + arr);
    console.log("Sum: " + sumArray(arr));
}
function sumArray(arr) {
    var arrSum = arr.reduce(function (acc, val) {
        return acc + val;
    });
    return arrSum;
}
getValues();
