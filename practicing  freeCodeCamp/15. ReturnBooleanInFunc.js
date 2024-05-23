//returning boolean values from function
function isLess(a,b){
    // if (a<b){
    //     return true;
    // } else {
    //     return false;
    // }
    return a<b;  // here we can skip above lines and just return the expression to get true or false
}
console.log(isLess(10, 15));






//Return Early pattern fo functions
function abTest(a,b){
    if (a<0 || b<0){
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a)+Math.sqrt(b),3));  //math.sqrt(a) takes the square root //math.pow(.....,2) powers it by 3 //Math.round rounds it up to the nearest whole number
}
console.log(abTest(1,2));




//CountingCards
var count = 0;
function cc(card){
   switch(card){

    case 2:
    case 3: 
    case 4:
    case 5:
    case 6:
        count++;
        break;     //in low card count increaases

    case 10:            
    case 'J':
    case 'Q':
    case 'K':
     case 'A':  
        count--                       //in high card count decreases
        break; }

    var holdbet = 'Hold'             
                if (count>0){
                    holdbet = "bet"                   //if count >0 it sets to bet else it is Hold
                 }
                    return count + " " + holdbet;          // here the count is -2 and hold
}

cc(2); cc('K'); cc(10); cc('K'); cc('A');             
console.log(cc(4));                                   //overall count becomes -2 adding all the card count to previous line
//CONC; HERE THE ABOVE GIVEN CARDS ARE COUNT ON THE PLAYER'S HAND. SINCE CARD IS HIGH SO COUNT IS LOW AND HOLD BECAUSE THE CHANCES OF GETTING HIGH CARD IS LOW BECAUSE GOOD CARDS ARE ALREADY 
// THERE IN THE TABLE

/*Card counting aims to track the ratio of high to low cards remaining in the deck. A higher count suggests a higher probability of getting good cards, favoring the player.*/





