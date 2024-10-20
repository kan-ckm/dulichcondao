// Lắng nghe sự kiện submit của form tìm kiếm
document.querySelector(".search-bar").addEventListener("submit", function (e) {
  e.preventDefault(); // Ngăn không cho form tự động gửi

  // Lấy từ khóa tìm kiếm từ ô input và chuyển thành chữ thường
  const searchTerm = document
    .querySelector('input[name="search"]')
    .value.toLowerCase();

  // Chọn phần chứa kết quả tìm kiếm và xóa kết quả cũ
  const resultsContainer = document.querySelector(".search-results");
  resultsContainer.innerHTML = "";

  // Lấy tất cả các phần tử cần tìm kiếm
  const items = document.querySelectorAll(".main-content h2, .main-content p");
  let found = false; // Đánh dấu có kết quả hay không

  items.forEach((item) => {
    // Kiểm tra nếu từ khóa nằm trong nội dung của phần tử
    if (item.textContent.toLowerCase().includes(searchTerm)) {
      found = true; // Đã tìm thấy ít nhất một kết quả
      const div = document.createElement("div"); // Tạo div để chứa kết quả

      // Hiển thị kết quả theo định dạng h2 hoặc p
      div.innerHTML = `<strong>${
        item.tagName === "H2" ? item.textContent : ""
      }</strong><p>${item.tagName === "P" ? item.textContent : ""}</p>`;
      resultsContainer.appendChild(div); // Thêm kết quả vào trang
    }
  });

  // Nếu không tìm thấy kết quả, hiển thị thông báo
  if (!found) {
    resultsContainer.innerHTML = "<p>Không tìm thấy kết quả nào.</p>";
  }
});
// Khi người dùng click vào menu cha, menu con sẽ hiện ra
document.querySelectorAll(".navbar > ul > li > a").forEach((menuItem) => {
  menuItem.addEventListener("click", function (e) {
    e.preventDefault();
    const submenu = this.nextElementSibling; // Lấy menu con liền sau thẻ a

    // Đóng menu con khác khi click vào menu cha mới
    document.querySelectorAll(".navbar ul li .submenu").forEach((menu) => {
      if (menu !== submenu) {
        menu.style.display = "none";
        menu.style.opacity = "0"; // Đảm bảo menu con được ẩn hoàn toàn
      }
    });

    // Hiển thị hoặc ẩn menu con
    if (submenu) {
      submenu.style.display =
        submenu.style.display === "block" ? "none" : "block";
      submenu.style.opacity = submenu.style.display === "block" ? "1" : "0"; // Thay đổi độ mờ
    }
  });
});

// Đóng menu con khi click ra ngoài
document.addEventListener("click", function (e) {
  const isClickInsideMenu = e.target.closest(".navbar");
  if (!isClickInsideMenu) {
    document.querySelectorAll(".navbar ul li .submenu").forEach((menu) => {
      menu.style.display = "none";
      menu.style.opacity = "0"; // Đảm bảo menu con được ẩn hoàn toàn
    });
  }
});

// Xử lý click vào mục menu con để hiển thị iframe
document.querySelectorAll(".submenu-item").forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    const url = this.getAttribute("data-url");
    const contentFrame = document.getElementById("contentFrame");
    contentFrame.src = url;
    document.getElementById("iframeContainer").style.display = "block";
  });
});

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Ẩn tất cả các slide
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1; // Quay về slide đầu tiên
  }
  slides[slideIndex - 1].style.display = "block"; // Hiển thị slide hiện tại
  setTimeout(showSlides, 3000); // Chuyển ảnh sau mỗi 3 giây
}
