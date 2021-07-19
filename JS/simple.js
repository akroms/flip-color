/* Get elements */
let button = document.getElementById("button");
let buttonHover = document.getElementById("button-hover");
let colorName = document.getElementById("color-name");
let colorCode = document.getElementById("color-code");
let colorBody = document.body;

/* Set Arry colors */
let colors = ["red", "blue", "orange", "aqua", "purple", "yellow", "lightgreen"];

/* Random Function */
let colorChange = function() {
    let random = Math.random() * 6;
    let floor = Math.floor(random);
    colorName.innerHTML = ` ${colors[floor]}`;
    colorBody.style.backgroundColor = colors[floor];
}

/* Events listenter*/
button.addEventListener("click", colorChange);
buttonHover.addEventListener("mouseover", colorChange);






