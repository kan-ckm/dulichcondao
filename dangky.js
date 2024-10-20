// Chuyển đến form đăng ký (Sign Up)
function signUp() {
  document.getElementById("signUp").style.top = "45px";
  // Đặt form đăng ký lên vị trí hiển thị (45px từ trên)

  document.getElementById("box").style.height = "600px";
  // Điều chỉnh chiều cao của hộp chứa để vừa với form đăng ký

  document.getElementById("signIn").style.top = "-450px";
  // Đưa form đăng nhập ra khỏi tầm nhìn (ẩn form đăng nhập)

  document.getElementById("forgetPassword").style.top = "-450px";
  // Đưa form quên mật khẩu ra khỏi tầm nhìn (ẩn form quên mật khẩu)
}

// Chuyển đến form đăng nhập (Sign In)
function signIn() {
  document.getElementById("signIn").style.top = "45px";
  // Đặt form đăng nhập lên vị trí hiển thị (45px từ trên)

  document.getElementById("box").style.height = "420px";
  // Điều chỉnh chiều cao của hộp chứa để vừa với form đăng nhập

  document.getElementById("signUp").style.top = "450px";
  // Đưa form đăng ký ra khỏi tầm nhìn (ẩn form đăng ký)

  document.getElementById("forgetPassword").style.top = "-450px";
  // Đưa form quên mật khẩu ra khỏi tầm nhìn (ẩn form quên mật khẩu)
}

// Chuyển đến form quên mật khẩu (Forget Password)
function forgetPassword() {
  document.getElementById("forgetPassword").style.top = "45px";
  // Đặt form quên mật khẩu lên vị trí hiển thị (45px từ trên)

  document.getElementById("box").style.height = "300px";
  // Điều chỉnh chiều cao của hộp chứa để vừa với form quên mật khẩu

  document.getElementById("signUp").style.top = "450px";
  // Đưa form đăng ký ra khỏi tầm nhìn (ẩn form đăng ký)

  document.getElementById("signIn").style.top = "450px";
  // Đưa form đăng nhập ra khỏi tầm nhìn (ẩn form đăng nhập)
}
// Hàm kiểm tra email và mật khẩu khi đăng ký
function validateSignUp(event) {
  event.preventDefault(); // Ngăn form submit mặc định

  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;
  const confirmPassword = document.getElementById(
    "confirmRegisterPassword"
  ).value;
  const errorElement = document.getElementById("registerError");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Kiểm tra tính hợp lệ của email
  if (!emailRegex.test(email)) {
    errorElement.textContent = "Vui lòng nhập địa chỉ email hợp lệ.";
    errorElement.style.display = "block";
    return;
  }

  // Kiểm tra độ dài mật khẩu
  if (password.length < 6) {
    errorElement.textContent = "Mật khẩu phải có ít nhất 6 ký tự.";
    errorElement.style.display = "block";
    return;
  }

  // Kiểm tra mật khẩu và mật khẩu xác nhận có giống nhau không
  if (password !== confirmPassword) {
    errorElement.textContent = "Mật khẩu xác nhận không khớp.";
    errorElement.style.display = "block";
    return;
  }

  // Nếu hợp lệ, thực hiện đăng ký (thực tế có thể gửi đến server)
  errorElement.style.display = "none";
  alert("Đăng ký thành công!");
  // Thực hiện chuyển đổi sang form đăng nhập hoặc xử lý khác.
  signIn();
}
