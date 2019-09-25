document.body.style.backgroundColor = "#ff69b4";
document.body.style.backgroundImage = "url(https://www.transparenttextures.com/patterns/45-degree-fabric-light.png)";

const idtext = document.getElementById("replace-text");
idtext.style.color = "#777";
idtext.style.fontSize = "2rem";
idtext.innerHTML = "I can do <em>whatever</em> I want with JavaScript.";

let classBlue = document.getElementsByClassName("blue");
for(i = 0; i < classBlue.length; i++) {
    classBlue[i].style.color = "blue";
}

const openModal = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal");
openModal.addEventListener("click", () => {
   document.getElementbyId("modal").style.display = "block";
});

closeModal.addEventListener("click", () => {
   document.getElementById("modal").style.display = "none";
});