var button = document.getElementById("button");
var output = document.getElementById("output");

button.addEventListener('click', randomFunction);


function randomFunction() {
var random = Math.ceil(Math.random(15) * 10);

  if (random < 5 || random === 5) {
    output.classList.add("arrow-right");
    output.classList.remove("arrow-left");

  } else if (random > 6 || random === 6) {
    output.classList.add("arrow-left");
    output.classList.remove("arrow-right");
  }
}






