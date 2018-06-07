function getValues() {
    var arr = [5, 4, 3, 2, 1];
    console.log("Unsorted array: " + arr);
    console.log("Sorted array: " + sortArray(arr));
}
function sortArray(arr) {
    // var temp: number = 0;
    // for(var i: number = 0; i < arr.length; i++)
    // {
    //     for(var j: number = 0; j < arr.length-1; j++)
    //     {
    //         if(arr[j] > arr[j+1])
    //         {
    //             temp = arr[j];
    //             arr[j] = arr[j+1];
    //             arr[j+1] = temp;
    //         }
    //     }
    // }
    return arr.sort();
}
getValues();
