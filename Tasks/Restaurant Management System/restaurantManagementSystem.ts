function getOrder()
{
    var pakMenu = [];
    pakMenu.push({name: "Chicken Biryani", price: 300});
    pakMenu.push({name: "Chicken Tikka", price: 400});
    pakMenu.push({name: "Channa Chaat", price: 150});
    pakMenu.push({name: "Grilled Seekh Kebabs", price: 500});
    pakMenu.push({name: "Chicken Sajji", price: 600});

    var chineseMenu = [];
    chineseMenu.push({name: "Chicken Sweet Corn Soup", price: 100});
    chineseMenu.push({name: "Chicken Mashroom Soup", price: 100});
    chineseMenu.push({name: "Vegetable Sweet Corn Soup", price: 100});
    chineseMenu.push({name: "Quick Fried Shredded Chicken", price: 500});
    chineseMenu.push({name: "Shrimps Chow Mein", price: 500});

    var refreshmentMenu = [];
    refreshmentMenu.push({name: "Tea", price: 20});
    refreshmentMenu.push({name: "Mineral Water", price: 30});

    var pakOrder = [];
    var chineseOrder = [];
    var refreshmentOrder = [];

    var loadChineseMenu: number;
    var loadRefreshmentMenu: number;

    var duration: number;
    var tableNumber: number;

    //================Pakistani Menu===========================//
    var loadPakMenu: number = parseInt(prompt("Load Pakistani Menu?\n1 for yes, 0 for no."));
    if(loadPakMenu == 1)
    {
        var pakMenuChoice: string = prompt("Enter the number related to the choice." 
                    + "Separate with comma for multiple choices.\n\n"
                    + "0. For no item\n"
                    + "1. Chicken Biryani Rs 300\n"
                    + "2. Chicken Tikka Rs 400\n"
                    + "3. Channa Chaat Rs 150\n"
                    + "4. Grilled Seekh Kebabs Rs 500\n"
                    + "5. Chicken Sajji Rs 600");
                    // + "6. Chicken Malai Botti Rs 200\n"
                    // + "7. Reshmi Kebab Rs 700\n"
                    // + "8. Chapati Rs 15\n"
                    // + "9. Garlic Naan Rs 50\n"
                    // + "10. Naan Rs 20");

        if(pakMenuChoice != "0")
        {
            var choiceArray1: string[] = pakMenuChoice.split(",");
            choiceArray1.forEach(element => {
                pakMenu[parseInt(element) - 1].amount = parseInt(prompt("Enter amount of " + 
                                                                    pakMenu[parseInt(element) - 1].name));
                
                pakOrder.push(pakMenu[parseInt(element) - 1]);
                
            });
        }
        
    }

    //================Chinese Menu===========================//
    loadChineseMenu = parseInt(prompt("Load Chinese Menu?\n1 for yes, 0 for no."));
    if(loadChineseMenu == 1)
    {
        var chineseMenuChoice: string = prompt("Enter the number related to the choice." 
                    + "Separate with comma for multiple choices.\n\n"
                    + "0. For no item\n"
                    + "1. Chicken Sweet Corn Soup Rs 100\n"
                    + "2. Chicken Mashroom Soup Rs 100\n"
                    + "3. Vegetable Sweet Corn Soup Rs 100\n"
                    + "4. Quick Fried Shredded Chicken Rs 500\n"
                    + "5. Shrimps Chow Mein Rs 500");

        if(chineseMenuChoice != "0")
        {
            var choiceArray2: string[] = chineseMenuChoice.split(",");
            choiceArray2.forEach(element => {
                chineseMenu[parseInt(element) - 1].amount = parseInt(prompt("Enter amount of " + 
                                                                    chineseMenu[parseInt(element) - 1].name));
                
                chineseOrder.push(chineseMenu[parseInt(element) - 1]);
            });
        }
        
    }

    //================Refreshment Menu===========================//
    loadRefreshmentMenu = parseInt(prompt("Load Refreshment Menu?\n1 for yes, 0 for no."));
    if(loadRefreshmentMenu == 1)
    {
        var refreshmentMenuChoice: string = prompt("Enter the number related to the choice." 
                    + "Separate with comma for multiple choices.\n\n"
                    + "0. For no item\n"
                    + "1. Tea Rs 20\n"
                    + "2. Mineral Water Rs 30\n");

        if(refreshmentMenuChoice != "0")
        {
            var choiceArray3: string[] = refreshmentMenuChoice.split(",");
            choiceArray3.forEach(element => {
                refreshmentMenu[parseInt(element) - 1].amount = parseInt(prompt("Enter amount of " + 
                                                                    refreshmentMenu[parseInt(element) - 1].name));
                
            refreshmentOrder.push(refreshmentMenu[parseInt(element) - 1]);
            });
        }
        
    }

    duration = Math.floor((Math.random() * 59) + 15);
    tableNumber = Math.floor((Math.random() * 40) + 1);

    var total: number = 0;
    var result: string = "Order Detail\n";
    result += "Estimated duration: " + duration + " minutes";
    result += "\nTable number: " + tableNumber + "\n";

    if(pakOrder.length > 0)
    {
        result += "\nPakistani Menu";

        pakOrder.forEach(element => {
            total += element.price;

            result += "\n" + element.name + ":Rs " + element.price + " x " + element.amount 
                                        + " Rs " + (element.price * element.amount);
            
        });
    }

    if(chineseOrder.length > 0)
    {
        result += "\n";
        result += "\nChinese Menu";

        chineseOrder.forEach(element => {
            total += element.price;

            result += "\n" + element.name + ":Rs " + element.price + " x " + element.amount 
                                        + " Rs " + (element.price * element.amount);
            
        });
    }

    if(refreshmentOrder.length > 0)
    {
        result += "\n";
        result += "\nRefreshment Menu";
        
        refreshmentOrder.forEach(element => {
            total += element.price;

            result += "\n" + element.name + ":Rs " + element.price + " x " + element.amount 
                                        + " Rs " + (element.price * element.amount);
            
        });
    }

    result += "\n\nTotal: Rs " + total;
    alert(result);
}
getOrder();