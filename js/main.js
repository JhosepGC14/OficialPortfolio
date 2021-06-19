//FECHA EN FOOTER
const fecha = new Date().getFullYear();
document.getElementById("fecha").innerHTML = fecha;

// Get the modal
var modal = document.getElementById("modalSocial");

// Get the button that opens the modal
var btn = document.getElementById("btnSocial");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeModal")[0];
// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Get the modal project

const openModalProject = (modalToShow, idCloseModal) => {
  let modalProject = document.getElementById(modalToShow);
  let iconCloseModal = document.getElementById(idCloseModal);

  modalProject.style.display = "block";

  iconCloseModal.onclick = function () {
    modalProject.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modalProject) {
      modalProject.style.display = "none";
    }
  };
};

//NAV STICKY

let mainNavLinks = document.querySelectorAll("header nav ul li a");
let mainSections = document.querySelectorAll("main section");
let lastId;
let cur = [];

window.addEventListener("scroll", (event) => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach((link) => {
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

let mainNavLinks2 = document.querySelectorAll(".pushbar-menu nav ul li a");
let mainSections2 = document.querySelectorAll("main section");
let lastId2;
let cur2 = [];

window.addEventListener("scroll", (event) => {
  let fromTop = window.scrollY;

  mainNavLinks2.forEach((link) => {
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

//DARK MODE
const btnSwitch = document.querySelector("#switch");

btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnSwitch.classList.toggle("btn_active");

  //guardar state en localStorage
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("isModeDark", "true");
  } else {
    localStorage.setItem("isModeDark", "false");
  }
});

if (localStorage.getItem("isModeDark") === "true") {
  document.body.classList.add("dark");
  btnSwitch.classList.add("btn_active");
} else {
  document.body.classList.remove("dark");
  btnSwitch.classList.remove("btn_active");
}
