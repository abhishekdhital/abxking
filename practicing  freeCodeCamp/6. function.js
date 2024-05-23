function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
    //enter code below
    var result= "";

    result = "The " + myAdjective +" "+ myNoun + " "+myVerb + " to the store " + myAdverb + ".";
   //Your code above this line

    return result;

}

console.log(wordBlanks("dogs", "big", "ran", "quickly"));
console.log(wordBlanks("cats", "small", "jumped", "slowly"));


// -------------------------------------------------------------------------------

function multiply(a, b, c){
var product= a*b*c;
return product;}

console.log(multiply(10, 20, 30));


//=============================================================================

function ReusableFunction(){
   console.log("Heyyaaaa");
}
ReusableFunction();
ReusableFunction();
ReusableFunction();
