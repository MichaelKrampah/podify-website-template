window.onload = function() {
  Particles.init({
    selector: '.background'
  });
};

var particles = Particles.init({
selector: '.background',
color: ['#DA0463', '#404B69', '#DBEDF3'],
connectParticles: true
});


// JavaScript to handle form popup
document.getElementById("button").addEventListener("click", function() {
  document.getElementById("podcaster-form").style.display = "block";
});

// Close the form when the "Close" button is clicked
document.querySelector(".close-btn").addEventListener("click", function() {
  document.getElementById("podcaster-form").style.display = "none";
});

document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.querySelector('.burger-menu');
  const navUl = document.querySelector('nav ul');

  burgerMenu.addEventListener('click', (e) => {
      e.stopPropagation();
      burgerMenu.classList.toggle('active');
      navUl.classList.toggle('active');
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
});

window.addEventListener("DOMContentLoaded", () => {
  const backImg = document.querySelector(".back-img");
  const stats = document.querySelector(".stats");
  const listenNow = document.querySelector(".listen-now");

  // Insert `.back-img` after `.listen-now`
  listenNow.parentNode.insertBefore(backImg, stats);
});
