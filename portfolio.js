onload  = start;

function start(){	
var i = 1;
function Move(){ 	
	i = (i%6)+1; // 4 is the Number of image in slider
	document.getElementById('i'+i).checked = true;
}
setInterval(Move,3000); //change img in 3 sec
}

document.querySelector(".slideButton").addEventListener("click", () => 
{
    document.querySelector(".bg-modal").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".bg-modal").style.display = "none";
});