const logoBurger = document.getElementById("logoBurger");
const crossBurger = document.getElementById("crossBurger");
const listBurger = document.getElementById("listBurger");

logoBurger.addEventListener('click', () => {
    listBurger.style.display = "flex";
    logoBurger.style.display = "none";
    crossBurger.style.display = "block";
})

crossBurger.addEventListener('click', () => {
    listBurger.style.display = "none";
    crossBurger.style.display = "none";
    logoBurger.style.display = "block";
})