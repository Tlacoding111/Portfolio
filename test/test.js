const leftDoor = document.querySelector(".ldoor");
const rightDoor = document.querySelector(".rdoor");
const openButton = document.querySelector(".open");
const closeButton = document.querySelector(".close");

openButton.addEventListener("click", () => {
    leftDoor.style.animation = "ldoor 15s 2s infinite ease-out";
    rightDoor.style.animation = "rdoor 15s 2s infinite ease-out";
});

closeButton.addEventListener("click", () => {
    leftDoor.style.animation = "";
    rightDoor.style.animation = "";
});

onload  = start;

function start(){	
var i = 1;
function Move(){ 	
	i = (i%6)+1; // 4 is the Number of image in slider
	document.getElementById('i'+i).checked = true;
}
setInterval(Move,1000); //change img in 1 sec
}


