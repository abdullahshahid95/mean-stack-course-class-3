function getString() {
    var str = prompt("Enter a string");
    alert("Number of vowels in '" + str + "': " + countVowels(str));
}
function countVowels(str) {
    var count = 0;
    // var countA: number = 0;
    // var countE: number = 0;
    // var countI: number = 0;
    // var countO: number = 0;
    // var countU: number = 0;
    str = str.toLowerCase();
    for (var i = 0; i < str.length; i++) {
        // if(str[i] == 'a')
        // {
        //     if(countA == 0)
        //         countA++;
        // }
        // else if(str[i] == 'e')
        // {
        //     if(countE == 0)
        //         countE++;
        // }
        // else if(str[i] == 'i')
        // {
        //     if(countI == 0)
        //         countI++;
        // }
        // else if(str[i] == 'o')
        // {
        //     if(countO == 0)
        //         countO++;
        // }
        // else if(str[i] == 'u')
        // {
        //     if(countU == 0)
        //         countU++;
        // }
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u')
            count++;
    }
    //return (countA + countE + countI + countO + countU);
    return count;
}
getString();
