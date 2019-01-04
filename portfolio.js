onload  = start;

function start(){	
var i = 1;
function Move(){ 	
	i = (i%6)+1; // 4 is the Number of image in slider
	document.getElementById('i'+i).checked = true;
}
setInterval(Move,3000); //change img in 3 sec
}

//Modal 1
document.querySelector(".slideButton").addEventListener("click", () => 
{
    document.querySelector(".bg-modal").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".bg-modal").style.display = "none";
});

//Modal 2
document.querySelector(".secondModalButton").addEventListener("click", () => 
{
    document.querySelector(".bg-modal2").style.display = "flex";
});

document.querySelector(".closeTwo").addEventListener("click", () => {
    document.querySelector(".bg-modal2").style.display = "none";
});

//Modal 3
document.querySelector(".thirdModalButton").addEventListener("click", () => 
{
    document.querySelector(".bg-modal3").style.display = "flex";
});

document.querySelector(".closeThree").addEventListener("click", () => {
    document.querySelector(".bg-modal3").style.display = "none";
});