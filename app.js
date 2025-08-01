const products = [
  {
    id: 'product-1',
    name: { bg: 'Органичен шампоан', en: 'Organic Shampoo' },
    category: 'beauty',
    price: 24.99,
    image: 'images/shampoo.jpg',
    description: {
      bg: 'Натурален шампоан без сулфати.',
      en: 'Natural sulfate-free shampoo.'
    }
  },
  {
    id: 'product-2',
    name: { bg: 'Крем за лице', en: 'Face Cream' },
    category: 'beauty',
    price: 32.5,
    image: 'images/face-cream.jpg',
    description: {
      bg: 'Хидратиращ крем с витамин Е.',
      en: 'Moisturizing cream with vitamin E.'
    }
  },
  // ... още продукти ...
];

// Текущ език
let currentLang = 'bg';

// Зареждане на продукти
function displayProducts(filter = '') {
  const container = document.getElementById('products');
  container.innerHTML = '';

  const filtered = products.filter(p =>
    filter ? p.category === filter : true
  );

  filtered.forEach(product => {
    const productEl = document.createElement('div');
    productEl.className = 'product';
    productEl.innerHTML = `
      <img src="${product.image}" alt="${product.name[currentLang]}">
      <h3>${product.name[currentLang]}</h3>
      <p>${product.description[currentLang]}</p>
      <p class="price">${product.price.toFixed(2)} лв.</p>
      <button class="buy-btn" onclick="addToCart('${product.id}')">Добави в количка</button>
    `;
    container.appendChild(productEl);
  });
}

// Смяна на език
function setLanguage(lang) {
  currentLang = lang;
  displayProducts();
  document.documentElement.lang = lang;
}

// Търсене
document.getElementById('search').addEventListener('input', e => {
  const query = e.target.value.toLowerCase();
  const filtered = products.filter(p =>
    p.name[currentLang].toLowerCase().includes(query)
  );
  const container = document.getElementById('products');
  container.innerHTML = '';
  filtered.forEach(product => {
    const productEl = document.createElement('div');
    productEl.className = 'product';
    productEl.innerHTML = `
      <img src="${product.image}" alt="${product.name[currentLang]}">
      <h3>${product.name[currentLang]}</h3>
      <p>${product.description[currentLang]}</p>
      <p class="price">${product.price.toFixed(2)} лв.</p>
      <button class="buy-btn" onclick="addToCart('${product.id}')">Добави в количка</button>
    `;
    container.appendChild(productEl);
  });
});

// Добавяне в количка (просто демо)
function addToCart(productId) {
  alert(`Продукт ${productId} добавен в количката!`);
}

// Инициализация
window.onload = () => {
  displayProducts();
  // Свържи езиковия селектор
  document.getElementById('language-switch').addEventListener('change', e => {
    setLanguage(e.target.value);
  });
};
