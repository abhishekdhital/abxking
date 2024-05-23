function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
    //enter code below
    var result= "";

    result += "the" + myAdjective + myNoun +myVerb + "to the store" + myAdverb;
   //Your code above this line

    return result;

}

console.log(wordBlanks("dogs", "big", "ran", "quickly"));