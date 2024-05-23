var ourDog = {
    "name" :"campher",
    "legs": "4",
    "1 age": "555 days",
    "friends": ["everything!"]
};
ourDog.name= "Robert";   // dog`1 name was campher which is now updated to robert
ourDog.bark= "vauu vauu"; //new properties is added to dog1. now it has five properties

var myDog= {
    "name": "ampy",
    "legs": 3,
    "2 age": "631 days",
    "friends": [],
    "bark" : "woof"
};
delete myDog.bark //bark property is now deleted from dog2. now it has four properties. dog1 has still five properities

var Dog1= ourDog.name;   //using dot notaion to access the name inside objectClasses ourDog nd myDog
var Dog2= myDog.name;
console.log(Dog1, Dog2);

var Age1= ourDog["1 age"];   //accessing the value using bracket
var Age2= myDog["2 age"];
console.log("the dogs are", Age1, "and", Age2, "years old respectively.");



//==============================================================================================================================================================================================


var testObj={
    12: "namath",
    16: "montana",
    19: "unitas"
};

var playerNumber= 16;
var player = testObj[playerNumber]; // accessing the value using variabele i.e 16 here
console.log(player);




//==============OBJECTS FOR LOOKUPS============================================================================================================================================================

function phoneticLookup(val) {  // Function definition with a parameter
    var result = " ";

    var lookup = {
        "alpha" : "Adams",
        "bravo" : "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot" : "frank"
    };

    result= lookup[val] || "Value not found"; // Handle the case where val is not in lookup
    return result;
}
// Call the function with the value you want to look up
var result = phoneticLookup("charlie")
console.log(result);  // or any other key from lookup// Output: "Chicago"




//=============MANIPULATING COMPLEX OBJECTS======================================================
