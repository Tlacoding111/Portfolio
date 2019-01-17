//Header Motivation Slides
onload  = start;

function start(){	
var i = 1;
function Move(){ 	
	i = (i%6)+1; // 4 is the Number of image in slider
	document.getElementById('i'+i).checked = true;
}
setInterval(Move,3000); //change img in 3 sec
}

// Modal 1
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

//Modal 4
document.querySelector(".fourthModalButton").addEventListener("click", () => 
{
    document.querySelector(".bg-modal4").style.display = "flex";
});

document.querySelector(".closeFour").addEventListener("click", () => {
    document.querySelector(".bg-modal4").style.display = "none";
});

//Modal 5
document.querySelector(".fifthModalButton").addEventListener("click", () => 
{
    document.querySelector(".bg-modal5").style.display = "flex";
});

document.querySelector(".closeFive").addEventListener("click", () => {
    document.querySelector(".bg-modal5").style.display = "none";
});

//Modal 6
document.querySelector(".sixthModalButton").addEventListener("click", () => 
{
    document.querySelector(".bg-modal6").style.display = "flex";
});

document.querySelector(".closeSix").addEventListener("click", () => {
    document.querySelector(".bg-modal6").style.display = "none";
});

//Modal 7
document.querySelector(".seventhModalButton").addEventListener("click", () => 
{
    document.querySelector(".bg-modal7").style.display = "flex";
});

document.querySelector(".closeSeven").addEventListener("click", () => {
    document.querySelector(".bg-modal7").style.display = "none";
});

//Modal 8
document.querySelector(".eigthModalButton").addEventListener("click", () => 
{
    document.querySelector(".bg-modal8").style.display = "flex";
});

document.querySelector(".closeEight").addEventListener("click", () => {
    document.querySelector(".bg-modal8").style.display = "none";
});

//Modal 9
document.querySelector(".ninthModalButton").addEventListener("click", () => 
{
    document.querySelector(".bg-modal9").style.display = "flex";
});

document.querySelector(".closeNine").addEventListener("click", () => {
    document.querySelector(".bg-modal9").style.display = "none";
});