window.onload = function() {
    Particles.init({
      selector: '.active-podcasters .background',
    });
  };

  var particles = Particles.init({
	selector: '.background',
  color: ['#DA0463', '#404B69', '#DBEDF3'],
  connectParticles: true
});


document.querySelectorAll(".play-pause").forEach(button => {
    button.addEventListener("click", (e) => {
      e.target.classList.toggle("active"); 
      setTimeout(() => {
        e.target.classList.remove("active");
      }, 5500);
    });
  });

  
// JavaScript to handle form popup
document.getElementById("button").addEventListener("click", function() {
  document.getElementById("podcaster-form").style.display = "block";
});

// Close the form when the "Close" button is clicked
document.querySelector(".close-btn").addEventListener("click", function() {
  document.getElementById("podcaster-form").style.display = "none";
});


  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!burgerMenu.contains(e.target) && !navUl.contains(e.target)) {
        burgerMenu.classList.remove('active');
        navUl.classList.remove('active');
    }
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        burgerMenu.classList.remove('active');
        navUl.classList.remove('active');
    });
});