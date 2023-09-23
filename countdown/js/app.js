const endDate= "24 September 2023 10:00:00 PM"

document.getElementById("end-date").innerText = endDate;
const inputs= document.querySelectorAll("input")

function clock(){
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now)/1000;

if(diff<0) return;

    console.log(diff);
    inputs[0].value = Math.floor(diff/86400);      //convert to days
    inputs[1].value = Math.floor((diff%86400)/3600);      //convert to days
    inputs[2].value = Math.floor(((diff%86400)%3600)/60);      //convert to days
    inputs[3].value = Math.floor(((diff%86400)%3600)%60);      //convert to days

}

//initial call
clock()

setInterval(
    () => {
        clock()
    },
    1000
)