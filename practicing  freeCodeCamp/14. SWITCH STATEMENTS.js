

//====================SWITCH STATEMENTS========================================

function caseInSwitch(runs){
    var question="what did he/she score?";
    var answer="";
    console.log(question);
    switch(runs){
        case 1:
            answer = "single";
            break;
        case 2:
            answer = "double";
            break;
        case 3:
            answer = "triple";
            break;
        case 4:
                answer = "four";
                break;
        case 5:
                 answer = "five";
                 break;
         case 6:
                answer = "six";
                 break; 
        default:
            answer= "no run";
            return answer;       //if no runs i.e 1,2,3,4,5,6
    }
    return answer;
}
console.log(caseInSwitch(1));
console.log(caseInSwitch(0));




//gues if the person is kid oe teen or adult by the show size

function shoeSize(value){
   var ans="";
   switch(value){ 
    case 1:
        case 2:
            case 3:
                ans = "you are a kid"
                return ans;
                break;
     case 4:
         case 5:
             case 6:
                  ans = "you are a teen"
                   return ans;
                   break;
      case 7:
        case 8:
         case 9:
            default:
                 ans = "you are a adult"
                return ans;
                break;
   }
}
console.log(shoeSize(11));



// replacing if else chains with switch statements
// fav mythological charcater

function chainToSwitch(val){

    var result="";

     switch(val){
        case "ram":
            result="i am the god";
            return result;
            break;

            case "ravan":
                result= "i am the devil";
                return result;
                break;

                case "sakuni":
                    result= " iam smart";
                    return result;
                    break;

                    case "kans":
                    result= " iam MAMA";
                    return result;
                    break;

                    case "dronacharya":
                    result= " iam ThumbLess";
                    return result;
                    break;

                    case "krishna":
                        result= " iam not heartless";
                        return result;
                        break;

     }
}

console.log((chainToSwitch("ram")));
console.log((chainToSwitch("krishna")));



