//mobile menu
const menuBtn = document.getElementById("menu-icon");
const closeBtn = document.getElementById("close-menu-icon");
const navMobile = document.getElementById("nav-mobile");
const overlay = document.getElementsByClassName("overlay")[0];

menuBtn.addEventListener("click", () => {
  navMobile.style.transform = "translateX(0%)";
  overlay.removeAttribute("hidden");
});

closeBtn.addEventListener("click", () => {
  navMobile.removeAttribute("style");
  overlay.setAttribute("hidden", true);
});

//carrousel
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const images = document.querySelectorAll(".product__img");

let i = 0;
next.addEventListener("click", () => {
  if (i == images.length - 1) return;
  i++;
  images[i].scrollIntoView({ behavior: "smooth" });
});

previous.addEventListener("click", () => {
  if (i == 0) return;
  i--;
  images[i].scrollIntoView({ behavior: "smooth" });
});

//img selection desktop
const imgDisplay = document.getElementById("img-display");
const imgDisplayOverlay = document.getElementById("img-display-overlay");
const imgBoxes = document.querySelectorAll(".product__imgbox");

function selectImg(box) {
  const img = box.children[0];
  const url = img.getAttribute("src");
  imgDisplay.style.backgroundImage = `url(${url})`;
  imgDisplayOverlay.style.backgroundImage = `url(${url})`;

  const previouslySelected = document.querySelectorAll(
    '.imgs__btn [aria-selected="true"]'
  );

  previouslySelected.forEach((x) => x.setAttribute("aria-selected", false));

  const boxes = document.querySelectorAll(`.imgs__btn [src="${url}"]`);
  boxes.forEach((box) => box.parentElement.setAttribute("aria-selected", true));
}

imgBoxes.forEach((box) => {
  box.addEventListener("click", () => selectImg(box));
});

//carrousel overlay
const nextOverlay = document.getElementById("next-overlay");
const previousOverlay = document.getElementById("previous-overlay");

nextOverlay.addEventListener("click", () => {
  const selectedImg = document.querySelector(
    '.imgs__btn [aria-selected="true"]'
  );
  if (!selectedImg.nextElementSibling) return;
  selectImg(selectedImg.nextElementSibling);
});

previousOverlay.addEventListener("click", () => {
  const selectedImg = document.querySelector(
    '.imgs__btn [aria-selected="true"]'
  );
  if (!selectedImg.previousElementSibling) return;
  selectImg(selectedImg.previousElementSibling);
});

//open overlay
const imgsOverlay = document.getElementById("imgs-overlay");

imgDisplay.addEventListener("click", () => {
  imgsOverlay.removeAttribute("hidden");
});

//close overlay
const closeOverlay = document.getElementById("close-overlay");

closeOverlay.addEventListener("click", () => {
  imgsOverlay.setAttribute("hidden", true);
});

//cart
const cart = document.getElementById("cart");
const cartDisplay = document.getElementById("cart-display");

cart.addEventListener("click", () => {
  const isHidden = cartDisplay.classList.contains(
    "header__cart__display--hidden"
  );

  if (isHidden) {
    cartDisplay.classList.remove("header__cart__display--hidden");
  } else {
    cartDisplay.classList.add("header__cart__display--hidden");
  }
});

//form
const form = document.getElementById("form-add-cart");
const addBtn = document.getElementById("add-quantity");
const minusBtn = document.getElementById("subtract-quantity");
const quantity = document.getElementById("quantity");

const cartProducts = document.getElementById("cart-products");
const cartBtn = document.getElementById("cart-btn");

addBtn.addEventListener("click", () => {
  let n = new Number(quantity.value);
  quantity.value = n + 1;
});

minusBtn.addEventListener("click", () => {
  let n = new Number(quantity.value);
  if (n == 1) return;
  quantity.value = n - 1;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  cartProducts.innerHTML = "";
  const q = new Number(quantity.value);
  const total = q * 125;
  cartProducts.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="cart__item">
     <img class="item__img" src="images/image-product-1.jpg" alt="image of the product">
      <div class="item__info">
        <p class="item__name">Fall Limited Edition Sneakers</p>
        <div>
          <span class="item__calc">$125.00 x ${q}</span>
          <span class="item__total">$${total}.00</span>
        </div>
      </div>
       <img class="item__delete" aria-label="delete item" src="images/icon-delete.svg" alt="icon of a trash can">
    </div>
    `
  );
  const cartQuantity = document.getElementById("cart-quantity");
  cartQuantity.innerText = q;
  cartBtn.removeAttribute("hidden");
});
