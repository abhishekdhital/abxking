//example
var ourArray= ["John", 23]

//only change code below
var myArray = ["Quincy", 1];


// ------------------------------------------------------------------------------------------------------

var ourArray = [["theuniverse", 42], ["everyhting", 100010]];
//this is nested array i.e a array inside another array

//------------------------------------------------------------------------------------------------------------


var myArray = ["Quincy", 1];
myArray[0]= "abhishek";
var name = myArray[0]; //access first element from above line
console.log(name);


var yourArray= [[10,20,30],[20,30,40],[[30,40],50,60]];
var myData= yourArray[2][0]; //multiDimensional array accessed the 3rd array's first element
console.log(myData);



var ourArray= ["apple", "ball", "cat", "dog"];
ourArray.push("elephant", "fish");  //added elephant and fish in the above line i.e got printed in output #PushFunction
console.log(ourArray);
var poppedArray = ourArray.pop(); //pop puts the last array into poppedArray and other remains in ourArray #PopFunction
console.log(poppedArray);
console.log(ourArray);
var shiftedArray = ourArray.shift(); //shift puts the first array into poppedArray and other remains in ourArray #shiftFunction
console.log(shiftedArray);
console.log(ourArray);






