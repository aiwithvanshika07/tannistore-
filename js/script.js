// TanniStore Script

let cartCount = 0;
let wishlistCount = 0;

// Counter Elements

const cartElement = document.getElementById("cart-count");
const wishlistElement = document.getElementById("wishlist-count");

// Load Saved Data

if (localStorage.getItem("cartCount")) {
    cartCount = parseInt(localStorage.getItem("cartCount"));
}

if (localStorage.getItem("wishlistCount")) {
    wishlistCount = parseInt(localStorage.getItem("wishlistCount"));
}

// Update Counters

if (cartElement) {
    cartElement.textContent = cartCount;
}

if (wishlistElement) {
    wishlistElement.textContent = wishlistCount;
}

// Add To Cart Buttons

const cartButtons = document.querySelectorAll(".add-cart");

cartButtons.forEach(button => {

    button.addEventListener("click", () => {

        cartCount++;

        localStorage.setItem(
            "cartCount",
            cartCount
        );

        if (cartElement) {
            cartElement.textContent = cartCount;
        }

        alert("Product added to cart 🛒");

    });

});

// Add To Wishlist Buttons

const wishlistButtons =
document.querySelectorAll(".add-wishlist");

wishlistButtons.forEach(button => {

    button.addEventListener("click", () => {

        wishlistCount++;

        localStorage.setItem(
            "wishlistCount",
            wishlistCount
        );

        if (wishlistElement) {
            wishlistElement.textContent = wishlistCount;
        }

        alert("Product added to wishlist ❤️");

    });

});

// Search Feature

const searchInput =
document.querySelector(".search-box input");

const productCards =
document.querySelectorAll(".product-card");

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        let value =
        searchInput.value.toLowerCase();

        productCards.forEach(card => {

            let title =
            card.querySelector("h3")
            .textContent
            .toLowerCase();

            if (title.includes(value)) {
                card.style.display = "block";
            }
            else {
                card.style.display = "none";
            }

        });

    });

}

// Newsletter Subscribe

const subscribeBtn =
document.querySelector(".newsletter button");

if (subscribeBtn) {

    subscribeBtn.addEventListener("click", () => {

        let email =
        document.querySelector(".newsletter input").value;

        if (email === "") {
            alert("Please enter email");
        }
        else {
            alert("Thanks for subscribing 🎉");
        }

    });

}

// Dark Mode Support

let darkMode = false;

function toggleDarkMode() {

    if (!darkMode) {

        document.body.style.background =
        "#121212";

        document.body.style.color =
        "white";

        darkMode = true;

    }
    else {

        document.body.style.background =
        "#f5f5f5";

        document.body.style.color =
        "#333";

        darkMode = false;

    }

    }
