<!DOCTYPE html>
<html lang="bg">
<head>
  <meta charset="UTF-8">
  <title>SEYTA EOOD Shop</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 0; background: #f9f9f9; }
    header { background: #6b46c1; color: #fff; padding: 20px; text-align: center; }
    h1 { margin: 0; }
    nav { margin-top: 10px; }
    nav a { color: #fff; margin: 0 10px; text-decoration: none; font-weight: 600; }
    .container { padding: 20px; max-width: 1000px; margin: auto; }
    .products { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; }
    .card { background: #fff; padding: 15px; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,.1); text-align: center; }
    .card img { max-width: 100%; border-radius: 8px; }
    .card h3 { margin: 10px 0; }
    .pay-btn { display:inline-block; background:#6b46c1; color:#fff; padding:10px 16px; border-radius:10px; text-decoration:none; font-weight:600; }
    footer { text-align:center; padding:20px; background:#eee; margin-top:40px; }
    /* Плаващ бутон за плащане */
    .floating-pay { position:fixed; right:16px; bottom:16px; background:#6b46c1; color:#fff;
      padding:14px 18px; border-radius:9999px; box-shadow:0 6px 16px rgba(0,0,0,.2);
      text-decoration:none; font-weight:700; z-index:9999; }
  </style>
</head>
<body>
  <header>
    <h1>SEYTA EOOD Shop</h1>
    <nav>
      <a href="#">Начало</a>
      <a href="#products">Продукти</a>
      <a href="https://pay.vivawallet.com/seyta-eood" target="_blank">Плащане</a>
    </nav>
  </header>

  <div class="container">
    <h2 id="products">Нашите продукти</h2>
    <div class="products">
      <div class="card">
        <img src="https://via.placeholder.com/300x200.png?text=Перилен+препарат" alt="Препарат 1">
        <h3>Перилен препарат 5L</h3>
        <p>Универсален течен препарат за пране.</p>
        <a class="pay-btn" href="https://pay.vivawallet.com/seyta-eood" target="_blank">Купи</a>
      </div>
      <div class="card">
        <img src="https://via.placeholder.com/300x200.png?text=Омекотител" alt="Препарат 2">
        <h3>Омекотител 2L</h3>
        <p>Придава мекота и дълготраен аромат на прането.</p>
        <a class="pay-btn" href="https://pay.vivawallet.com/seyta-eood" target="_blank">Купи</a>
      </div>
      <div class="card">
        <img src="https://via.placeholder.com/300x200.png?text=Почистващ+препарат" alt="Препарат 3">
        <h3>Почистващ препарат 1L</h3>
        <p>Силен универсален препарат за домакинството.</p>
        <a class="pay-btn" href="https://pay.vivawallet.com/seyta-eood" target="_blank">Купи</a>
      </div>
    </div>
  </div>

  <footer>
    © 2025 SEYTA EOOD – Онлайн магазин за перилни препарати
  </footer>

  <!-- Плаващ бутон Viva Wallet -->
  <a class="floating-pay" href="https://pay.vivawallet.com/seyta-eood" target="_blank">Плати</a>
</body>
</html>
