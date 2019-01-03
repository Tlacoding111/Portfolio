const leftDoor = document.querySelector(".ldoor");
const rightDoor = document.querySelector(".rdoor");
const openButton = document.querySelector(".open");
const closeButton = document.querySelector(".close");

openButton.addEventListener("click", () => {
    leftDoor.style.animation = "ldoor 3s 1s infinite";
    rightDoor.style.animation = "rdoor 3s 1s infinite";
});

closeButton.addEventListener("click", () => {
    leftDoor.style.animation = "";
    rightDoor.style.animation = "";
});



