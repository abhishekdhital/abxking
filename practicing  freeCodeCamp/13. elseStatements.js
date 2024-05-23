//ELSE STATEMENTS

function testElse(val){
var result= "";
    if (val>10){
          result="bigger than 10";
    } else { result="smaller than 10";
}
return result;
}
console.log(testElse(20));

//ELSE IF STATEMENTS

function testElseIf(val){
  if (val<5){
    return "smaller than 5";
  } else if (val<10){
    return "smaller than 10";
  }else return "between 5 and 10";   //while writing the conditions here. we started with the smallest because it has to be in the correct order (which depends upon question)
}
console.log(testElseIf(7));




//===========================CHAINING ELSE IF STATEMENTS=====================================================================================


/* WRITE CHAINED IF/ELSE if statements to fulfill the following conditions
num<5 - return "tiny"
num <10 - return "small"
num <15 - return "medium"
num <20 - return "large"
num > 20 - return "huge"
*/

function chainIfElseIf(num){
    if (num<5){
        return "tiny";
    } else if (num<10){
        return "small";
    } else if (num<15){
            return "medium";
        } else if (num<20){
                return "large";} 
                else if (num>=250){
                    return "huge";
}
else return "extra large";
}

console.log(chainIfElseIf(22));


//===========CRICKET SCORE======================================================

var names=["dot", "single", "double", "four", "six", "extra"]
function cricketScore( ball, runs){
    if (runs ==0 && ball==1){
        return names[0];               //first elemnt from the array names is taken
    }else if (runs==1 && ball==1){
        return names[1]
    }else if (runs==2 && ball==1){
        return names[2]
    }else if (runs==4 && ball==1){
        return names[3]
    }else if (runs==6 && ball==1){
        return names[4]
    }else if (runs==1 && ball==0){
        return names[5]
    }
}
console.log(cricketScore(1,1));
console.log(cricketScore(1,4));
console.log(cricketScore(0,1));
console.log(cricketScore(1,0));


