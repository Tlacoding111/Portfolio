const leftDoor = document.querySelector(".ldoor");
const rightDoor = document.querySelector(".rdoor");
const openButton = document.querySelector(".open");
const closeButton = document.querySelector(".close");

openButton.addEventListener("click", () => {
    leftDoor.style.animation = "ldoor 2s 1s infinite";
    rightDoor.style.animation = "rdoor 2s 1s infinite";
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
setInterval(Move,3000); //change img in 3 sec
}


