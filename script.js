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
