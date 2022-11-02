const imgPosition = document.querySelectorAll(".aspect-ratio-169 img");
const imgContainer = document.querySelector(".aspect-ratio-169");
const dotItem = document.querySelectorAll(".dot");
const header = document.querySelector("header");
let index = 0;
let imgNumber = imgPosition.length;
const btn_right = document.querySelector(".click_right");
const btn_left = document.querySelector(".click_left");
// Slider
imgPosition.forEach((image, index) => {
  image.style.left = index * 100 + "%";
  // dotItem[index].addEventListener("click", () => {
  //   slider(index);
  // });
  [...dotItem].forEach((dotItem, index) => {
    dotItem.addEventListener("click", () => {
      slider(index);
    });
  });
  btn_right.addEventListener("click", () => {
    index++;
    if (index >= imgNumber - 1) {
      index = imgNumber - 1;
    }
    slider(index);
  });
  btn_left.addEventListener("click", () => {
    index--;
    if (index <= 0) {
      index = 0;
    }
    slider(index);
  });
});
function slider(index) {
  imgContainer.style.left = "-" + index * 100 + "%";
  const dotActive = document.querySelector(".active");
  dotActive.classList.remove("active");
  dotItem[index].classList.add("active");
}

const imgSeller = document.querySelectorAll(".item_product img");
var imgSellerLength = imgSeller.length;
const click_right = document.querySelector(".item_click_right");
const click_left = document.querySelector(".item_click_left");
const top_seller = document.querySelector(".seller_list_product");
var indexListImg = 0;
imgSeller.forEach((item, index) => {
  item.addEventListener("click", handleZoom);
});

function handleZoom(e) {
  const template = `
  <div class="lightbox">
            <div class="lightbox-content">
    <i class="fa fa-angle-left lightbox-prev"></i>
        <img class="lightbox-image" src="${e.target.getAttribute("src")}"
         alt="" />
        <i class="fa fa-angle-right lightbox-next"></i>

             </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", template);
}
document.body.addEventListener("click", (e) => {
  let imgLight = document.querySelector(".lightbox-image");
  let imgLightSrc = "";
  if (e.target.matches(".lightbox")) {
    e.target.parentNode.removeChild(e.target);
  } else if (e.target.matches(".lightbox-prev")) {
    imgLightSrc = imgLight.getAttribute("src");
    indexListImg = [...imgSeller].findIndex((item) => {
      return item.getAttribute("src") === imgLightSrc;
    });
    index = index - 1;
    if (index <= 0) {
      index = 0;
    }
    let newSrc = [...imgSeller][index].getAttribute("src");
    imgLight.setAttribute("src", newSrc);
  } else if (e.target.matches(".lightbox-next")) {
    imgLightSrc = imgLight.getAttribute("src");
    indexListImg = [...imgSeller].findIndex((item) => {
      return item.getAttribute("src") === imgLightSrc;
    });
    index = index + 1;
    if (index >= imgSellerLength - 1) {
      index = imgSellerLength - 1;
    }
    let newSrc = [...imgSeller][index].getAttribute("src");
    imgLight.setAttribute("src", newSrc);
  }
});
imgSeller.forEach((image, index) => {
  image.style.left = index * 20 + "%";
  click_right.addEventListener("click", () => {
    index++;
    if (index >= imgSellerLength) {
      index = 0;
    }
    list_imgSeller(index);
  });
  click_left.addEventListener("click", () => {
    index--;
    if (index < 0) {
      index = imgSellerLength - 1;
    }
    list_imgSeller(index);
  });
});

function list_imgSeller(index) {
  top_seller.style.left = "-" + index * 20 + "%";
}

// header;
// window.addEventListener("scroll", function (e) {
//   x = window.pageYOffset;
//   if (x > 0) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// });

// //navbar
// const itemSliderbar = document.querySelectorAll(".category-left-li");
// itemSliderbar.forEach((item, index) => {
//   item.addEventListener("click", (event) => {
//     event.preventDefault();
//     if (item.classList.contains("block")) {
//       item.classList.remove("block");
//     } else {
//       item.classList.add("block");
//     }
//   });
// });
const baoquan = document.querySelector(".baoquan");
const chitiet = document.querySelector(".chitiet");
const size = document.querySelector(".size1");
if (baoquan === null && chitiet === null && size === null) {
  document.querySelector(
    ".product-content-right-bottom-content-detail"
  ).style.display = "block";
  document.querySelector(
    ".product-content-right-bottom-content-baoquan"
  ).style.display = "none";
  document.querySelector(
    ".product-content-right-bottom-content-size"
  ).style.display = "none";
}
if (baoquan != null) {
  baoquan.addEventListener("click", (event) => {
    document.querySelector(
      ".product-content-right-bottom-content-detail"
    ).style.display = "none";
    document.querySelector(
      ".product-content-right-bottom-content-size"
    ).style.display = "none";
    document.querySelector(
      ".product-content-right-bottom-content-baoquan"
    ).style.display = "block";
  });
}
if (chitiet != null) {
  chitiet.addEventListener("click", () => {
    document.querySelector(
      ".product-content-right-bottom-content-baoquan"
    ).style.display = "none";
    document.querySelector(
      ".product-content-right-bottom-content-size"
    ).style.display = "none";
    document.querySelector(
      ".product-content-right-bottom-content-detail"
    ).style.display = "block";
  });
}
if (size != null) {
  size.addEventListener("click", () => {
    document.querySelector(
      ".product-content-right-bottom-content-baoquan"
    ).style.display = "none";
    document.querySelector(
      ".product-content-right-bottom-content-detail"
    ).style.display = "none";
    document.querySelector(
      ".product-content-right-bottom-content-size"
    ).style.display = "block";
  });
}
// // detail
// const baoquan = document.querySelector(".baoquan");
// const chitiet = document.querySelector(".chitiet");
// if (baoquan) {
//   baoquan.addEventListener("click", (event) => {
//     document.querySelector(
//       ".product-content-right-bottom-content-detail"
//     ).style.display = "none";
//     document.querySelector(
//       ".product-content-right-bottom-content-baoquan"
//     ).style.display = "block";
//   });
// }
// if (chitiet) {
//   chitiet.addEventListener("click", () => {
//     document.querySelector(
//       ".product-content-right-bottom-content-detail"
//     ).style.display = "block";
//     document.querySelector(
//       ".product-content-right-bottom-content-baoquan"
//     ).style.display = "none";
//   });
// }

// const butTon = document.querySelector(".product-content-right-bottom-top");
// if (butTon) {
//   butTon.addEventListener("click", () => {
//     document
//       .querySelector(".product-content-right-bottom-content-big")
//       .classList.toggle("activeDetail");
//   });
// }

// //show_img
// const img_big = document.querySelector(".product-content-left-big-img img");
// const listImg_small = document.querySelectorAll(
//   ".product-content-left-small-img img"
// );
// listImg_small.forEach((item, index) => {
//   item.addEventListener("click", () => {
//     img_big.src = item.src;
//   });
// });

// // circle_click
// const circle = document.querySelectorAll(".sign");
// circle.forEach((item, index) => {
//   item.addEventListener("click", () => {
//     let listItems = document.querySelectorAll(".circle_click");
//     listItems[index].classList.toggle("active_circle");
//   });
// });

// // bills
// const btn_bill = document.querySelector(".btn_bills  a");
// const c_name = document.querySelector(".name");
// const phone = document.querySelector(".phone");
// const city = document.querySelector(".city");
// const street = document.querySelector(".street");
// const village = document.querySelector(".village");
// const c_location = document.querySelector(".location");

// btn_bill.addEventListener("click", (e) => {
//   if (
//     !c_name.value ||
//     !phone.value ||
//     !city.value ||
//     !street.value ||
//     !village.value ||
//     !c_location.value
//   ) {
//     alert("ban chua dien du thong tin");
//     e.preventDefault();
//   } else {
//     c_name.value = "";
//     phone.value = "";
//     city.value = "";
//     street.value = "";
//     village.value = "";
//     c_location.value = "";
//     btn_bill.href = "../interface/cart.html";
//   }
// });
