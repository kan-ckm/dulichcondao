const menuLinks = document.querySelectorAll(".sidebar a");
const iframe = document.getElementById("contentFrame");

menuLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const url = this.getAttribute("data-src");
    if (url) {
      iframe.src = url;
    }
  });
});

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}
