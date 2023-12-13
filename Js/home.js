const burger = document.querySelector("#burgerIcon");
const overlay = document.querySelector(".overlay");
const menu = document.querySelector(".menu");
const closeIcon = document.querySelector("#xIcon");
const neon = document.querySelectorAll(".menu .neon-text");
const topContainer = document.querySelector(".top");

/* when neon button clicked => check screensize => show or not show menu */
neon.forEach(function(element) {
  element.addEventListener('click', checkScreen);
});

function checkScreen() {
  if (window.matchMedia('(max-width: 1000px)').matches) {
    hideMenu();
  } else {
    menu.style.display = "flex";
  }
}
/* what happens when menu is shown in mobile */
function showMenu() {
  topContainer.style.flexDirection = "column";
  overlay.style.transform = "translateX(0)";
  menu.style.display = "flex";
  menu.style.transform = "translateX(0)";
  burger.style.display = "none";
  closeIcon.style.display = "block";
}
/* what happens  hide menu */
function hideMenu() {
  topContainer.style.flexDirection = "row";
  overlay.style.transform = "translateX(-100%)";
  menu.style.display = "none"; 
  burger.style.display = "block";
  closeIcon.style.display = "none";
}

burger.onclick = showMenu;
closeIcon.onclick = hideMenu;

function handleScreenSize() {
  if (window.matchMedia('(min-width: 1000px)').matches) {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
}
window.addEventListener('resize', handleScreenSize);



/* scroll back to top function for home and up button */
const home = document.querySelector("#homeButton");
const up = document.querySelector("#upButton")
function scrollToTop(event) {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}
home.onclick = scrollToTop;
up.onclick = scrollToTop;

/* hide reflection of buttons in top as soon as scrolling starts */
window.addEventListener('scroll', function hideReflection() {
  if (window.matchMedia('(min-width: 1000px)').matches) {
    
    if (window.scrollY > 0) {
    neon.forEach(function(element) {
    element.classList.add('no');
  })
  } else {
    neon.forEach(function(element) {
    element.classList.remove('no');
    })
  }
  }
  })
/* flicker animation for the buttons */
  function flickerAnimation(element) {
    function flicker() {
      element.style.opacity = 0;
      setTimeout(() => { element.style.opacity = 1; }, Math.random() * 80); // Random delay for reappearing (up to 60ms)
      setTimeout(() => { randomFlicker(); }, Math.random() * 3000); // Random delay before next flicker (up to 10 seconds)
    }

    flicker();
  }
/* function for random button selection */
  function randomFlicker() {
    const buttons = document.querySelectorAll('.neon-text');
    const randomIndex = Math.floor(Math.random() * buttons.length);
    flickerAnimation(buttons[randomIndex]);
  }

 
  randomFlicker();

