document.addEventListener('DOMContentLoaded', function () {
    // Select all elements with the class 'neon-text'
    const neonTexts = document.querySelectorAll('.menu .neon-text');
  
    // Function to create the flickering effect for a single neon text element
    function flickerText(neonText) {
      // Get the initial text content and clear the container
      const textContent = neonText.textContent.trim();
      neonText.innerHTML = '';
  
      // Wrap each letter in a span element and append to the container
      textContent.split('').forEach(char => {
        const span = document.createElement('span');
        span.textContent = char;
        neonText.appendChild(span);
      });
  
      // Select all the span elements (individual letters)
      const letters = neonText.querySelectorAll('span');
  
      // Function to create the flickering effect for a single neon text element
      function flickerLetters() {
        // Choose a random index for a letter to flicker
        const randomIndex = Math.floor(Math.random() * letters.length);
  
        // Apply opacity to each letter based on the random index
        letters.forEach((letter, index) => {
          const opacity = index === randomIndex ? (Math.random() > 0.1 ? 0.2 : 0.8) : 1;
          letter.style.opacity = opacity;
        });
  
        // Reset opacity for all letters after a short delay
        setTimeout(() => {
          letters.forEach(letter => {
            letter.style.opacity = 1;
          });
  
          // Schedule the next iteration of the flickering effect
          setTimeout(() => {
            requestAnimationFrame(flickerLetters);
          }, 3000); // Adjust the delay (in milliseconds) for the pause between letters
        }, 60); // Adjust the delay (in milliseconds) for the flickering speed
      }
  
      // Start the flickering animation loop for each neon text element
      flickerLetters();
    }
  
    // Introduce a delay for each neon text element before starting its flickering animation
    neonTexts.forEach((neonText, index) => {
      setTimeout(() => {
        flickerText(neonText);
      }, index * 1000); // Adjust the delay (in milliseconds) between each neon text element
    });
  });
  
const burger = document.querySelector("#burgerIcon");
const overlay = document.querySelector(".overlay");
const menu = document.querySelector(".menu");
const closeIcon = document.querySelector("#xIcon");
const neon = document.querySelectorAll(".menu .neon-text");
const logo =  document.querySelectorAll(".logo")
const topContainer = document.querySelector(".top");

function handleScreenSize() {
if (window.matchMedia('(max-width: 1000px)').matches) {
  menu.style.display = "none";
  neon.forEach(function(element) {
    element.addEventListener('click', hideMenu);
});

function showMenu() {
  topContainer.style.flexDirection = "column";
  overlay.style.transform = "translateX(0)";
  menu.style.display = "flex";
  menu.style.transform = "translateX(0)";
  burger.style.display = "none";
  closeIcon.style.display = "block";
}
function hideMenu() {
  topContainer.style.flexDirection = "row";
  overlay.style.transform = "translateX(-100%)";
  menu.style.display = "none"; 
  burger.style.display = "block";
  closeIcon.style.display = "none";
}
burger.onclick = showMenu;
closeIcon.onclick = hideMenu;


} else {
  menu.style.display = "flex";

}}

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

handleScreenSize();

// Check for screen size on resize
window.addEventListener('resize', handleScreenSize);


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


