function ourFunctionWithArgs(a,b){ //this is arguments

    console.log(a-b);
}
ourFunctionWithArgs(10,5); //this is called here




function functionWithArgs(a,b,c){
    add= a+b+c;
    console.log(add);
}
functionWithArgs(5,10,15); //first call
functionWithArgs(15,20,25);   //second call



 

//=====================================================================================



// #GlobalAndLocalScope
var myGlobal =10; //this can be accessed by every funcitons

function fun1(){
   oopsGlobal =5;  // this can be accessed by every function despite being in fun1() because it has no "var" written before letting it
   var uppsGlobal =2  //this can be acessed by fun1() only
}

function fun2(){
    var output= "";
    if(typeof myGlobal != "undefined"){
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined"){
        output += " oopsGlobal: "+ oopsGlobal;
    }
    if (typeof uppsGlobal != "undefined"){
        output += " uppsGlobal: "+ uppsGlobal;  //its output is not printed because above line's condition is false
    }
    console.log(output);
}
fun1();
fun2();




//-----------LOCAL-VARIABLE-----------------------------


function LocalScope(){
   var myVar=5;
    console.log(myVar);
}
LocalScope();
// console.log(myVar); 
 //this above line shows error because the variable inside the function is triedto be accessed outside the function
   


//---------Global vs Local Vaiable-----------------------------------


var outerwear = "T-Shirst";
function myOutfit(){
    var outerwear ="sweater";
    return outerwear;
}
console.log(myOutfit()); //here sweator takes preference insteead of tshirt i.e local variable is prioritized in a function
console.log(outerwear);    //tshirt is preferred because it is outside the function and uses glovbal variabela

//----------------------------------------------------------



function minusFive(num){
    return num-5;
}
console.log(minusFive(69));   //when called it returns the number after sub by 5



function timesFive(num){
    return num *5;
} console.log(timesFive(7));  //when called it returns the number after multiplied by 5




//------------Understanding Undefined value returned from a functionn--------------------------


var sum=0;
function addThree(){
   sum = sum +3;
}

var sum=0;
function addFour(){
   sum = sum +4;
}
console.log(addFour())



//------------Understanding Defined value returned from a functionn--------------------------

var sum=0;
function addFour(num){
   sum = num +4;
   return sum;
}
console.log(addFour(10))



var first=0;
function last(num){
return (num*3)/2;
}
console.log(last(10));



//-------------STAND IN LINE-----------------------

function nextInLine(arr, item){

    arr.push(item);
   return arr.shift();

}

var myArray= [1,2,3,4,5];

console.log("before :" + JSON.stringify(myArray));
console.log(nextInLine(myArray, 6));
console.log("after :"+ JSON.stringify((myArray)))


//===================BOOLEAN VALUES=============================

function welcomeToBooleans(){
    return false;
}

console.log((welcomeToBooleans()))

