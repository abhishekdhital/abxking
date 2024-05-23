//IF Statements

function TrueOrFalse(condition){  //condition checks if it is true. it is a boolean parameter. other boolean parameter can be condition, flag, isValid
    if(condition){
        return "yes, its true";   //if it is true, it prints it and returns and doesn't go to the next line

    }
    return "no, its false";
}

console.log(TrueOrFalse(8>0));


//============COMPARISON WITH EQUALITY OPERATOR===============================

function testEqual(val){
    if (val ==12){  //we have to check so it has double equal sign, signal equal sign is for assigning
        return "equal";
    }
    return "not equal"
}
console.log(testEqual(12));  
console.log(testEqual("12"));  

//

function testEquall(value){
    if (value === 5){  //we have to check so it has double equal sign, signal equal sign is for assigning
        return "equal";
    }
    return "not equal"
}
console.log(testEquall(5));  
console.log(testEquall("5"));  //in triple equal operator the datatype also should be same so it is false. (it was true in the above)


//

function comparison(a,b){
    if (a==b){                       //it is equal since it checks if the number 10 and string 10 has equal value (in double equal)
        return "oh its true bro";
    }
    return "sorry its false";
}

console.log(comparison(10, "10"))

//

function notEqual(value){
    if (value!=99){             //it is not equal since 10 is not equal to 99
        return "it is not equal";
    }
    return "it is equal";
}
console.log(notEqual(10))



//===========AND OR OPERATIONS========================


function testLogicalAnd(val){

    if (val<=50 && val>=20){  //AND statement ie both conditions should be true (we have two ifs condions checked here)
            return "betweeen 20 and 50";
        }
    
    return "not between 20 and 50"
}
console.log(testLogicalAnd(36));   


function  testLogicalOr(value){
    if(value>50 || value<20){   //OR Statements ie both conditions should be false
        return "outside 20 and 50";
    }
    return  "inside 20 and 50"
}
console.log(testLogicalOr(36));

