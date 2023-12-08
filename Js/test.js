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