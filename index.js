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
const images = document.getElementsByClassName("product__img");

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
  cartBtn.removeAttribute("hidden");
});
