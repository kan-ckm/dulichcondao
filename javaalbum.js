let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

// Hàm thay đổi slide
function changeSlide(step) {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + step + totalSlides) % totalSlides;
  updateSlides();
}

// Hàm cập nhật vị trí slide
function updateSlides() {
  const offset = -currentSlide * 100;
  document.querySelector(".slides").style.transform = `translateX(${offset}%)`;
  slides[currentSlide].classList.add("active");
}

// Tự động chuyển slide mỗi 3 giây
setInterval(() => {
  changeSlide(1);
}, 3000);
