function showDateAndTime() {
    var today = new Date();
    var date = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log("Date: " + date);
    console.log("Time: " + time);
}
showDateAndTime();
