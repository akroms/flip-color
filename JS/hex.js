/* Get elements */
let button = document.getElementById("button");
let buttonHover = document.getElementById("button-hover");
let colorCode = document.getElementById("color-code");
let colorBody = document.body;

/* Random Function */
let colorChange = function() {
    let random = Math.random() * 6;
    let floor = Math.floor(random * 100000);
    colorCode.innerHTML = ` #${floor}`;
    colorBody.style.backgroundColor = `#${floor}`;
}

/* Events listenter*/
button.addEventListener("click", colorChange);
buttonHover.addEventListener("mouseover", colorChange);
