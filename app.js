// Примерен масив с продукти (може да го разшириш допълнително)
const products = [
  {
    id: 1,
    name: { bg: "Мед от липа", en: "Linden Honey" },
    price: 12,
    currency: "BGN",
    category: "Храни",
    image: "images/linden-honey.jpg"
  },
  {
    id: 2,
    name: { bg: "Сапун с лавандула", en: "Lavender Soap" },
    price: 5,
    currency: "BGN",
    category: "Козметика",
    image: "images/lavender-soap.jpg"
  },
  {
    id: 3,
    name: { bg: "Чай от мащерка", en: "Thyme Tea" },
    price: 8,
    currency: "BGN",
    category: "Храни",
    image: "images/thyme-tea.jpg"
  },
  {
    id: 4,
    name: { bg: "Пчелен восък", en: "Beeswax" },
    price: 6.5,
    currency: "BGN",
    category: "Други",
    image: "images/beeswax.jpg"
  }
];

let lang = "bg"; // по подразбиране
let currencyRate = 0.51; // 1 BGN = 0.51 EUR

function renderProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  const search = document.getElementById("search").value.toLowerCase();
  const category = document.getElementById("category").value;
  const minPrice = parseFloat(document.getElementById("min-price").value) || 0;
  const maxPrice = parseFloat(document.getElementById("max-price").value) || Infinity;

  products
    .filter(p =>
      p.name[lang].toLowerCase().includes(search) &&
      (category === "" || p.category === category) &&
      p.price >= minPrice && p.price <= maxPrice
    )
    .forEach(p => {
      const div = document.createElement("div");
      div.className = "product";
      div.innerHTML = `
        <img src="${p.image}" alt="${p.name[lang]}">
        <div class="product-info">
          <h3>${p.name[lang]}</h3>
          <p>${p.category}</p>
          <div class="product-price">
            ${convertPrice(p.price, p.currency)}
          </div>
        </div>
      `;
      productList.appendChild(div);
    });
}

function convertPrice(price, currency) {
  if (currency === "BGN") {
    return lang === "bg"
      ? `${price.toFixed(2)} лв.`
      : `€${(price * currencyRate).toFixed(2)}`;
  }
  return `${price} ${currency}`;
}

function toggleLang() {
  lang = lang === "bg" ? "en" : "bg";
  document.getElementById("lang-toggle").textContent = lang === "bg" ? "EN" : "BG";
  renderProducts();
}

document.getElementById("search").addEventListener("input", renderProducts);
document.getElementById("category").addEventListener("change", renderProducts);
document.getElementById("min-price").addEventListener("input", renderProducts);
document.getElementById("max-price").addEventListener("input", renderProducts);
document.getElementById("lang-toggle").addEventListener("click", toggleLang);

renderProducts();
