onload  = start;

function start(){	
var i = 1;
function Move(){ 	
	i = (i%6)+1; // 4 is the Number of image in slider
	document.getElementById('i'+i).checked = true;
}
setInterval(Move,1500); //change img in 1.5 sec
}