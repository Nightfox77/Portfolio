document.addEventListener("DOMContentLoaded", function() {
    var logo = document.querySelector(".frontpage img");
    var blurBack = document.querySelector(".backgroundBlur");
    
        setTimeout(function() {
      flickerNeon(logo,blurBack, 160, 3000); 
    }, 2000); 
  });

  function flickerNeon(element1, element2, intensity, duration) {
    var startTime = Date.now();

    function updateFlicker() {
      var elapsed = Date.now() - startTime;
      var flickerValue = Math.random() * intensity;
      
      if (elapsed < duration) {
        element1.style.filter = "grayscale(" + flickerValue + "%)";
        element2.style.opacity = flickerValue / 100;
        
        requestAnimationFrame(updateFlicker);
      } else {
        element1.style.filter = "grayscale(0%)"; 
        element2.style.opacity = 0.7;
        
      }
    }

    updateFlicker();
  }