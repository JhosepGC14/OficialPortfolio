//FECHA EN FOOTER
const fecha = new Date().getFullYear();
document.getElementById('fecha').innerHTML = fecha;
console.log('fecha', fecha)

//BARRA DE PROGRESO

const value = 98;
const minValue = 0;
const maxValue = 100;

const progress = Math.min(value / maxValue * 100, 100);

const barHeight = 16;
const pointerWidth = 16;
const indicatorWidth = value === 100 ? 50 :
  value >= 10 ? 40 :
    30;

const root = document.documentElement;

root.style.setProperty("--bar-height", barHeight + "px");
root.style.setProperty("--indicator-width", indicatorWidth + "px");
root.style.setProperty("--pointer-width", pointerWidth + "px");
root.style.setProperty("--progress", progress);
root.style.setProperty("--progress-percentage", progress + "%");

document.getElementById("indicator").textContent = progress + "%";
document.getElementById("min-value").textContent = minValue;
document.getElementById("max-value").textContent = maxValue;


// Get the modal
var modal = document.getElementById("modalSocial");
// Get the button that opens the modal
var btn = document.getElementById("btnSocial");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeModal")[0];
// When the user clicks the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


// Get the modal
var modal2 = document.getElementById("modalProject");
// Get the button that opens the modal
var btn2 = document.getElementById("btnProject");
var btn3 = document.getElementById("btnProject2");
var btn4 = document.getElementById("btnProject3");
var btn5 = document.getElementById("btnProject4");
var btn6 = document.getElementById("btnProject5");
var btn7 = document.getElementById("btnProject6");
// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("closeOff")[0];
// When the user clicks the button, open the modal 
btn2.onclick = function () {
  modal2.style.display = "block";
}
btn3.onclick = function () {
  modal2.style.display = "block";
}
btn4.onclick = function () {
  modal2.style.display = "block";
}
btn5.onclick = function () {
  modal2.style.display = "block";
}
btn6.onclick = function () {
  modal2.style.display = "block";
}
btn7.onclick = function () {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function () {
  modal2.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};

//NAV STICKY

let mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("main section");
let lastId;
let cur = [];

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});