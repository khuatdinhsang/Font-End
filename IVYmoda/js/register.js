const apcept = document.querySelectorAll(".apcept");
const btn_apcept = document.querySelectorAll(".apcept i");
apcept.forEach((item, index) => {
  item.addEventListener("click", () => {
    btn_apcept[index].classList.toggle("active");
  });
});

//  get value
const first_name = document.querySelector(".fisrt_name");
console.log(first_name);
const last_name = document.querySelector(".last_name");
const birth = document.querySelector(".birth");
const gender = document.querySelector(".gender");
const city = document.querySelector(".city");
const street = document.querySelector(".street");
const village = document.querySelector(".village");
const local = document.querySelector(".local");
const password = document.querySelector(".password");
const new_password = document.querySelector(".new_password");
const qr_Code = document.querySelector(".qr_Code");
const btn_register = document.querySelector(".btn_register");

btn_register.addEventListener("click", () => {
  if (
    !first_name.value ||
    !last_name.value ||
    !birth.value ||
    !gender.value ||
    !city.value ||
    !street.value ||
    !village.value ||
    !local.value ||
    !password.value ||
    !new_password.value ||
    !qr_Code.value
  ) {
    alert("ban chua dien du thong tin");
  } else {
    if (password.value.length < 6) {
      alert("mk phai co 6 ki tu");
    } else if (password.value !== new_password.value) {
      alert("mk khong trung nhau");
    } else if (qr_Code.value !== "zxb1j") {
      alert("ma capcha khong chinh xac");
    } else {
      // to do
    }
  }
});
