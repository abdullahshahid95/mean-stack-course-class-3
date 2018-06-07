function getUserData() {
    var user = {
        name: prompt("Enter name"),
        fullName: prompt("Enter full name"),
        nic: prompt("Enter NIC"),
        contact: prompt("Enter contact number"),
        city: prompt("Enter city"),
        country: prompt("Enter country")
    };
    //var picture: string = prompt("Enter name");
    alert("Name: " + user.name + "\n\n" +
        "Full name: " + user.fullName + "\n\n" +
        "NIC: " + user.nic + "\n\n" +
        "Contact: " + user.contact + "\n\n" +
        "City: " + user.city + "\n\n" +
        "Country: " + user.country);
}
getUserData();
