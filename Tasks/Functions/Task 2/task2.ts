function showDateAndTime()
{
    var today: Date = new Date();
    var date: string = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
    var time: string = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    console.log("Date: " + date);
    console.log("Time: " + time);

}

showDateAndTime();