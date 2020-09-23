var first_color = document.querySelector(".color1");
var second_color = document.querySelector(".color2");
var css = document.querySelector("h3");
var body = document.querySelector("body");

function setGradient() {
    body.style.background =
      "linear-gradient(to right, "
      + first_color.value
      + ", "
      + second_color.value
      + ")";

      css.textContent = body.style.background + ";";
}

first_color.addEventListener("input", setGradient);

second_color.addEventListener("input", setGradient);

body.onload = function() {
    console.log(body.style.background);
}
