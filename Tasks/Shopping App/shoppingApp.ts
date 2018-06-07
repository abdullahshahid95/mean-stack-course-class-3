function getOrder()
{
    var menMenu = [[], [], []];
    menMenu[0].push({name: "Round neck", price: 1300, category: "T.shirt"});
    menMenu[0].push({name: "V neck", price: 800, category: "T.shirt"});
    menMenu[0].push({name: "Multicolor", price: 900, category: "T.shirt"});
    menMenu[0].push({name: "Collor Front Button", price: 1000, category: "T.shirt"});

    menMenu[1].push({name: "Multicolor Denim", price: 1900, category: "Jeans"});
    menMenu[1].push({name: "Slim Fit Za Blue", price: 2400, category: "Jeans"});
    menMenu[1].push({name: "Slim Fit Trashed", price: 1900, category: "Jeans"});
    menMenu[1].push({name: "Regular Fit Za Blue", price: 2400, category: "Jeans"});

    menMenu[2].push({name: "Fitness Tracker", price: 2499, category: "Watch"});
    menMenu[2].push({name: "Quartz White Dial", price: 2199, category: "Watch"});
    menMenu[2].push({name: "Black Leather", price: 2199, category: "Watch"});
    menMenu[2].push({name: "GSM Bluetooth Smart", price: 1499, category: "Watch"});

    var womenMenu = [[], [], []];
    womenMenu[0].push({name: "Round neck", price: 1300, category: "Shirt"});
    womenMenu[0].push({name: "V neck", price: 800, category: "Shirt"});
    womenMenu[0].push({name: "Multicolor", price: 900, category: "Shirt"});
    womenMenu[0].push({name: "Collor Front Button", price: 1000, category: "Shirt"});

    womenMenu[1].push({name: "Multicolor Denim", price: 1900, category: "Jeans"});
    womenMenu[1].push({name: "Slim Fit Za Blue", price: 2400, category: "Jeans"});
    womenMenu[1].push({name: "Slim Fit Trashed", price: 1900, category: "Jeans"});
    womenMenu[1].push({name: "Regular Fit Za Blue", price: 2400, category: "Jeans"});

    womenMenu[2].push({name: "Fitness Tracker", price: 2499, category: "Watch"});
    womenMenu[2].push({name: "Quartz White Dial", price: 2199, category: "Watch"});
    womenMenu[2].push({name: "Black Leather", price: 2199, category: "Watch"});
    womenMenu[2].push({name: "GSM Bluetooth Smart", price: 1499, category: "Watch"});

    var homeMenu = [[], []];
    homeMenu[0].push({name: "12 in 1 tool", price: 300, category: "Kitchen Set"});
    homeMenu[0].push({name: "BPA Free Foldable Dish Rack", price: 800, category: "Kitchen Set"});
    homeMenu[0].push({name: "Manual Hand Press Juicer", price: 900, category: "Kitchen Set"});
    homeMenu[0].push({name: "Wall Mount Paper Towel Holder", price: 700, category: "Kitchen Set"});

    homeMenu[1].push({name: "Panasonic Steam Iron", price: 1900, category: "Iron"});
    homeMenu[1].push({name: "Dawlance Steam Iron", price: 2400, category: "Iron"});
    homeMenu[1].push({name: "FeatherLight Steam Iron", price: 1900, category: "Iron"});
    homeMenu[1].push({name: "Travel Steamer Handheld Iron", price: 2400, category: "Iron"});

    var bookMenu = [[], []];
    bookMenu[0].push({name: "XYZ", price: 1500, category: "Novel"});
    bookMenu[0].push({name: "XYZ", price: 800, category: "Novel"});
    bookMenu[0].push({name: "XYZ", price: 900, category: "Novel"});
    bookMenu[0].push({name: "XYZ", price: 700, category: "Novel"});

    bookMenu[1].push({name: "ABC", price: 1900, category: "Cooking"});
    bookMenu[1].push({name: "ABC", price: 2400, category: "Cooking"});
    bookMenu[1].push({name: "ABC", price: 1900, category: "Cooking"});
    bookMenu[1].push({name: "ABC", price: 2400, category: "Cooking"});

    var menOrder = [];
    var womenOrder = [];
    var homeOrder = [];
    var bookOrder = [];

    var loadMenMenu: number;
    var loadWomenMenu: number;
    var loadHomeMenu: number;
    var loadBookMenu: number;

    var categoryChoice: number;

    var yN: string;
    do
    {    
        categoryChoice = parseInt(prompt("Select category\n"
                                                    + "0 for exit\n" 
                                                    + "1. Men\n"
                                                    + "2. Women\n"
                                                    + "3. Home Appliances\n"
                                                    + "4. Books"));

        //================Men Menu===========================//
        if(categoryChoice == 1)
        {
            var menCategory: number = parseInt(prompt("Select Men category.\n" 
                        + "0. For no item\n"
                        + "1. T.shirts\n"
                        + "2. Jeans\n"
                        + "3. Watches"));

            if(menCategory != 0)
            {
                if(menCategory == 1)
                {
                    var menShirt: string = prompt("Select Men T.shirt."
                    + " Separate multiple choices with comma.\n" 
                    + "0. For no item\n"
                    + "1. Round neck Rs 1300\n"
                    + "2. V neck Rs 800\n"
                    + "3. Multicolor Rs 900\n"
                    + "4. Collor Front Button Rs 1000");

                    if(menShirt != "0")
                    {
                        var choiceArray: string[] = menShirt.split(",");
                        choiceArray.forEach(element => {
                            menMenu[0][parseInt(element) - 1].amount = parseInt(prompt("Enter amount of " 
                                                                        + menMenu[0][parseInt(element) - 1].name + " " 
                                                                        + menMenu[0][parseInt(element) - 1].category));

                            menOrder.push(menMenu[0][parseInt(element) - 1]);
                        });
                    }
                }
                else if(menCategory == 2)
                {
                    var menJeans: string = prompt("Select Men Jeans."
                    + " Separate multiple choices with comma.\n" 
                    + "0. For no item\n"
                    + "1. Multicolor Denim Rs 1900\n"
                    + "2. Slim Fit Za Blue Rs 2400\n"
                    + "3. Slim Fit Trashed Rs 1900\n"
                    + "4. Regular Fit Za Blue Rs 2400");

                    if(menJeans != "0")
                    {
                        var choiceArray: string[] = menJeans.split(",");
                        choiceArray.forEach(element => {
                            menMenu[1][parseInt(element) - 1].amount = parseInt(prompt("Enter amount of " 
                                                                        + menMenu[1][parseInt(element) - 1].name + " " 
                                                                        + menMenu[1][parseInt(element) - 1].category));

                            menOrder.push(menMenu[1][parseInt(element) - 1]);
                        });
                    }
                }
                else if(menCategory == 3)
                {
                    var menWatch: string = prompt("Select Men Watches."
                    + " Separate multiple choices with comma.\n" 
                    + "0. For no item\n"
                    + "1. Fitness Tracker Rs 2499\n"
                    + "2. Quartz White Dial Rs 2199\n"
                    + "3. Black Leather Rs 2199\n"
                    + "4. GSM Bluetooth Smart Rs 1499");

                    if(menWatch != "0")
                    {
                        var choiceArray: string[] = menWatch.split(",");
                        choiceArray.forEach(element => {
                            menMenu[2][parseInt(element) - 1].amount = parseInt(prompt("Enter amount of " 
                                                                        + menMenu[2][parseInt(element) - 1].name + " " 
                                                                        + menMenu[2][parseInt(element) - 1].category));

                            menOrder.push(menMenu[2][parseInt(element) - 1]);
                        });
                    }
                }
            }
            
        }

        //================Women Menu===========================//
        if(categoryChoice == 2)
        {
            var womenCategory: number = parseInt(prompt("Select Women items' category.\n" 
                        + "0. For no item\n"
                        + "1. Shirts\n"
                        + "2. Jeans\n"
                        + "3. Watches"));

            if(womenCategory != 0)
            {
                if(womenCategory == 1)
                {
                    var womenShirt: string = prompt("Select women Shirts."
                    + " Separate multiple choices with comma.\n" 
                    + "0. For no item\n"
                    + "1. Round neck Rs 1300\n"
                    + "2. V neck Rs 800\n"
                    + "3. Multicolor Rs 900\n"
                    + "4. Collor Front Button Rs 1000");

                    if(womenShirt != "0")
                    {
                        var choiceArray: string[] = womenShirt.split(",");
                        choiceArray.forEach(element => {
                            womenMenu[0][parseInt(element) - 1].amount = parseInt(prompt("Enter amount of " 
                                                                        + womenMenu[0][parseInt(element) - 1].name + " " 
                                                                        + womenMenu[0][parseInt(element) - 1].category));

                            womenOrder.push(womenMenu[0][parseInt(element) - 1]);
                        });
                    }
                }
                else if(womenCategory == 2)
                {
                    var womenJeans: string = prompt("Select women Jeans."
                    + " Separate multiple choices with comma.\n" 
                    + "0. For no item\n"
                    + "1. Multicolor Denim Rs 1900\n"
                    + "2. Slim Fit Za Blue Rs 2400\n"
                    + "3. Slim Fit Trashed Rs 1900\n"
                    + "4. Regular Fit Za Blue Rs 2400");

                    if(womenJeans != "0")
                    {
                        var choiceArray: string[] = womenJeans.split(",");
                        choiceArray.forEach(element => {
                            womenMenu[1][parseInt(element) - 1].amount = parseInt(prompt("Enter amount of " 
                                                                        + womenMenu[1][parseInt(element) - 1].name + " " 
                                                                        + womenMenu[1][parseInt(element) - 1].category));

                            womenOrder.push(womenMenu[1][parseInt(element) - 1]);
                        });
                    }
                }
                else if(womenCategory == 3)
                {
                    var womenWatch: string = prompt("Select Men Watches."
                    + " Separate multiple choices with comma.\n" 
                    + "0. For no item\n"
                    + "1. Fitness Tracker Rs 2499\n"
                    + "2. Quartz White Dial Rs 2199\n"
                    + "3. Black Leather Rs 2199\n"
                    + "4. GSM Bluetooth Smart Rs 1499");

                    if(womenWatch != "0")
                    {
                        var choiceArray: string[] = womenWatch.split(",");
                        choiceArray.forEach(element => {
                            womenMenu[2][parseInt(element) - 1].amount = parseInt(prompt("Enter amount of " 
                                                                        + womenMenu[2][parseInt(element) - 1].name + " " 
                                                                        + womenMenu[2][parseInt(element) - 1].category));

                            womenOrder.push(womenMenu[2][parseInt(element) - 1]);
                        });
                    }
                }
            }
            
        }

        //================Home Appliances Menu===========================//
        if(categoryChoice == 3)
        {
            var homeCategory: number = parseInt(prompt("Select Home Appliances category.\n" 
                        + "0. For no item\n"
                        + "1. Kitchen Set\n"
                        + "2. Iron\n"));
    
            if(homeCategory != 0)
            {
                if(homeCategory == 1)
                {
                    var homeKitchen: string = prompt("Select " + homeMenu[0][0].category + "."
                    + " Separate multiple choices with comma." 
                    + "\n0. For no item"
                    + "\n1. " + homeMenu[0][0].name + " Rs " + homeMenu[0][0].price
                    + "\n2. " + homeMenu[0][1].name + " Rs " + homeMenu[0][1].price
                    + "\n3. " + homeMenu[0][2].name + " Rs " + homeMenu[0][2].price
                    + "\n4. " + homeMenu[0][3].name + " Rs " + homeMenu[0][3].price);
    
                    if(homeKitchen != "0")
                    {
                        var choiceArray: string[] = homeKitchen.split(",");
                        choiceArray.forEach(element => {
                            homeMenu[0][parseInt(element) - 1].amount = parseInt(prompt("Enter amount of " 
                                                                        + homeMenu[0][parseInt(element) - 1].name + " " 
                                                                        + homeMenu[0][parseInt(element) - 1].category));
    
                            homeOrder.push(homeMenu[0][parseInt(element) - 1]);
                        });
                    }
                }
                else if(homeCategory == 2)
                {
                    var homeIron: string = prompt("Select " + homeMenu[1][0].category + "."
                    + " Separate multiple choices with comma.\n" 
                    + "0. For no item\n"
                    + "\n1. " + homeMenu[1][0].name + " Rs " + homeMenu[1][0].price
                    + "\n2. " + homeMenu[1][1].name + " Rs " + homeMenu[1][1].price
                    + "\n3. " + homeMenu[1][2].name + " Rs " + homeMenu[1][2].price
                    + "\n4. " + homeMenu[1][3].name + " Rs " + homeMenu[1][3].price);
    
                    if(homeIron != "0")
                    {
                        var choiceArray: string[] = homeIron.split(",");
                        choiceArray.forEach(element => {
                            homeMenu[1][parseInt(element) - 1].amount = parseInt(prompt("Enter amount of " 
                                                                        + homeMenu[1][parseInt(element) - 1].name + " " 
                                                                        + homeMenu[1][parseInt(element) - 1].category));
    
                            homeOrder.push(homeMenu[1][parseInt(element) - 1]);
                        });
                    }
                }
            }
            
        }

        //================Books Menu===========================//
        if(categoryChoice == 4)
        {
            var bookCategory: number = parseInt(prompt("Select Books category.\n" 
                        + "0. For no item\n"
                        + "1. Novels\n"
                        + "2. Cooking\n"));
    
            if(bookCategory != 0)
            {
                if(bookCategory == 1)
                {
                    var bookNovel: string = prompt("Select " + bookMenu[0][0].category + "."
                    + " Separate multiple choices with comma." 
                    + "\n0. For no item"
                    + "\n1. " + bookMenu[0][0].name + " Rs " + bookMenu[0][0].price
                    + "\n2. " + bookMenu[0][1].name + " Rs " + bookMenu[0][1].price
                    + "\n3. " + bookMenu[0][2].name + " Rs " + bookMenu[0][2].price
                    + "\n4. " + bookMenu[0][3].name + " Rs " + bookMenu[0][3].price);
    
                    if(bookNovel != "0")
                    {
                        var choiceArray: string[] = bookNovel.split(",");
                        choiceArray.forEach(element => {
                            bookMenu[0][parseInt(element) - 1].amount = parseInt(prompt("Enter amount of " 
                                                                        + bookMenu[0][parseInt(element) - 1].name + " " 
                                                                        + bookMenu[0][parseInt(element) - 1].category));
    
                            bookOrder.push(bookMenu[0][parseInt(element) - 1]);
                        });
                    }
                }
                else if(bookCategory == 2)
                {
                    var bookCooking: string = prompt("Select " + bookMenu[1][0].category + "."
                    + " Separate multiple choices with comma.\n" 
                    + "0. For no item\n"
                    + "\n1. " + bookMenu[1][0].name + " Rs " + bookMenu[1][0].price
                    + "\n2. " + bookMenu[1][1].name + " Rs " + bookMenu[1][1].price
                    + "\n3. " + bookMenu[1][2].name + " Rs " + bookMenu[1][2].price
                    + "\n4. " + bookMenu[1][3].name + " Rs " + bookMenu[1][3].price);
    
                    if(bookCooking != "0")
                    {
                        var choiceArray: string[] = bookCooking.split(",");
                        choiceArray.forEach(element => {
                            bookMenu[1][parseInt(element) - 1].amount = parseInt(prompt("Enter amount of " 
                                                                        + bookMenu[1][parseInt(element) - 1].name + " " 
                                                                        + bookMenu[1][parseInt(element) - 1].category));
    
                            bookOrder.push(bookMenu[1][parseInt(element) - 1]);
                        });
                    }
                }
            }
            
        }

        yN = prompt("Continue shopping. Y / N?");
    }
    while(yN == 'Y' || yN == 'y');

     var result: string = "Order Receipt";
     var total: number = 0;

    var order = [];
    order.push(menOrder);
    order.push(womenOrder);
    order.push(homeOrder);
    order.push(bookOrder);

    if(order.length > 0)
    {
        order.forEach(oElement => {
            if(oElement.length > 0)
            {
                oElement.forEach(element => {
                    result += "\n\n" + element.name + " " + element.category + " Rs " + element.price + " x " 
                                                            + element.amount 
                                                            + ": Rs " 
                                                            + (element.price * element.amount);
            
                    total += (element.price * element.amount);
                });
            }
        });
    }
    alert(result + "\n\n" + "Total: Rs " + total.toString());

    alert("Redirecting to Login");

    window.location.href = "../Login System/loginsystem.html";
}
getOrder();