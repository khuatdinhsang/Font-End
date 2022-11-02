const btn_check_login = document.querySelector(".remember_password");
const icon_check_login = document.querySelector(".remember_password i");
btn_check_login.addEventListener("click", () => {
  icon_check_login.classList.toggle("active");
});
