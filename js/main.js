// Open && Close Cart
var cart =document.querySelector('.cart')

function openCart () {
  cart.classList.add("active");
  
}
function closeCart () {
  cart.classList.remove("active");
}
// Open && Close menu
var menu =document.querySelector('#menu')

function openMenu () {
  menu.classList.add("active");
  
}
function closeMenu () {
  menu.classList.remove("active");
}

// Add Items In Cart
var all_products_json;
var items_in_cart = document.querySelector(".items_in_cart");
let product_cart = [];
function addToCart(id, btn) {
  product_cart.push(all_products_json[id])
  btn.classList.add("active")
  console.log(id)
  getCartItems()
}

let count_item = document.querySelector(".count_item");
let count_item_cart = document.querySelector(".count_item_cart");
let price_cart_total = document.querySelector(".price_cart_total");
let price_cart_Head = document.querySelector(".price_cart_Head");


function getCartItems() {
  let total_price = 0;
  let items_c = "";
  for (let i = 0; i < product_cart.length; i++) {
    items_c += `
    <div class="item_cart">
        <img src="${product_cart[i].img}" alt="">
        <div class="content">
          <h4>${product_cart[i].name}</h4>
          <p class="price_cart">$${product_cart[i].price}</p>
        </div>
        <button class="delete_item" onclick="remove_from_cart(${i})"><i class="fa-solid fa-trash-can"></i></button>
      </div>
    
    `
    total_price += product_cart[i].price;
  }
  items_in_cart .innerHTML = items_c;
  price_cart_Head.innerHTML = `$${total_price}`;
  count_item.innerHTML = product_cart.length
  count_item_cart.innerHTML = `(${product_cart.length}Item in Cart)`
  price_cart_total.innerHTML = `$${total_price}`
}
console.log(price_cart_Head)


// Remove Cart
function remove_from_cart(index){
  product_cart.splice(index,1)
  getCartItems()
  let addToCartButtons = document.querySelectorAll(".fa-cart-plus")
  for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].classList.remove("active")
    product_cart.forEach(product => {
      if(product.id == i) {
        addToCartButtons[i].classList.add("active")
      }
    })
  }
}

// back_to_top
let back_to_top = document.querySelector(".back_to_top")
back_to_top.addEventListener("click", function() {
  window.scrollTo({
    top:0,
    behavior:"smooth"
  })
})

