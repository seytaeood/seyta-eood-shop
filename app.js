const products = [
  {
    id: "product-1",
    name: { bg: "Органичен шампоан", en: "Organic Shampoo" },
    price: 24.99,
    image: "images/shampoo.jpg",
    description: {
      bg: "Натурален шампоан без сулфати.",
      en: "Natural sulfate-free shampoo.",
    },
  },
  {
    id: "product-2",
    name: { bg: "Крем за лице", en: "Face Cream" },
    price: 32.5,
    image: "images/face-cream.jpg",
    description: {
      bg: "Хидратиращ крем с витамин Е.",
      en: "Moisturizing cream with vitamin E.",
    },
  },
];

let currentLang = "bg";

const productsContainer = document.getElementById("products");
const searchInput = document.getElementById("search");
const languageSwitch = document.getElementById("language-switch");

function renderProducts(filter = "") {
  productsContainer.innerHTML = "";

  const filteredProducts = products.filter((product) => {
    const name = product.name[currentLang].toLowerCase();
    return name.includes(filter.toLowerCase());
  });

  if (filteredProducts.length === 0) {
    productsContainer.innerHTML = "<p>Няма намерени продукти.</p>";
    return;
  }

  filteredProducts.forEach((product) => {
    const productEl = document.createElement("div");
    productEl.className = "product";
    productEl.innerHTML = `
      <img src="${product.image}" alt="${product.name[currentLang]}" />
      <h3>${product.name[currentLang]}</h3>
      <p>${product.description[currentLang]}</p>
      <p class="price">${product.price.toFixed(2)} лв.</p>
      <button onclick="alert('Добавен ${product.name[currentLang]} в количката!')">Добави в количка</button>
    `;
    productsContainer.appendChild(productEl);
  });
}

searchInput.addEventListener("input", (e) => {
  renderProducts(e.target.value);
});

languageSwitch.addEventListener("change", (e) => {
  currentLang = e.target.value;
  renderProducts(searchInput.value);
});

window.onload = () => {
  renderProducts();
};
