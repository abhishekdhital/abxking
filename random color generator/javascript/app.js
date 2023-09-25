const getColor = () => {
 //hex code
const randomNumber = Math.floor(Math.random()*16777215);

const randomColor = "#" + randomNumber.toString(16);
document.body.style.backgroundColor=randomColor
document.getElementById("colorCode").innerText=randomColor

navigator.clipboard.writeText(randomColor)


}

//event call
document.getElementById("btn").addEventListener("click", getColor)


//initaial call
getColor();
