<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Anime Tracker</title>
  <meta name="description" content="Sigue tus animes y sabe qué días salen" />
  <meta name="theme-color" content="#7C3AED" />
  <link rel="manifest" href="manifest.json" />
  <link rel="apple-touch-icon" href="icons/icon-192.png" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div id="app">
    <header>
      <h1>🎌 Anime Tracker</h1>
      <p class="tagline">Tu calendario de simulcasts</p>
    </header>

    <nav>
      <button class="nav-btn active" data-tab="search">Buscar</button>
      <button class="nav-btn" data-tab="calendar">Calendario</button>
      <button class="nav-btn" data-tab="list">Mi lista</button>
    </nav>

    <main>
      <!-- TAB: BUSCAR -->
      <section id="tab-search" class="tab active">
        <div class="search-box">
          <input type="text" id="searchInput" placeholder="Buscar anime..." autocomplete="off" />
          <button id="searchBtn">Buscar</button>
        </div>
        <div id="searchStatus"></div>
        <div id="searchResults"></div>
      </section>

      <!-- TAB: CALENDARIO -->
      <section id="tab-calendar" class="tab">
        <div id="calendarView"></div>
      </section>

      <!-- TAB: MI LISTA -->
      <section id="tab-list" class="tab">
        <div id="listView"></div>
      </section>
    </main>
  </div>

  <script src="app.js"></script>
</body>
</html>
