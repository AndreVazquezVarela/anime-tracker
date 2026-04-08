# Anime Tracker PWA

Calendario personalizado de simulcasts usando la API de AniList.

## Archivos del proyecto

```
anime-tracker/
├── index.html       ← Estructura de la app
├── style.css        ← Estilos
├── app.js           ← Lógica y llamadas a AniList
├── manifest.json    ← Configuración PWA
├── sw.js            ← Service Worker (offline)
└── icons/
    ├── icon-192.png
    └── icon-512.png
```

---

## 🚀 Cómo subir a GitHub y desplegar en Vercel

### Paso 1 — Crear repositorio en GitHub

1. Ve a [github.com](https://github.com) e inicia sesión
2. Pulsa el botón **"New"** (repositorio nuevo)
3. Nómbralo `anime-tracker`
4. Déjalo en **Public**
5. **No** marques "Add README" (ya lo tenemos)
6. Pulsa **"Create repository"**

### Paso 2 — Subir los archivos

Una vez creado el repo, GitHub te muestra instrucciones. Tienes dos opciones:

**Opción A — Desde la web (sin instalar nada):**
1. En la página del repo vacío, haz clic en **"uploading an existing file"**
2. Arrastra todos los archivos del proyecto (incluyendo la carpeta `icons/`)
3. Escribe un mensaje como "Primera versión" y pulsa **"Commit changes"**

**Opción B — Desde terminal (si tienes Git instalado):**
```bash
cd anime-tracker
git init
git add .
git commit -m "Primera versión"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/anime-tracker.git
git push -u origin main
```

### Paso 3 — Desplegar en Vercel

1. Ve a [vercel.com](https://vercel.com) y pulsa **"Sign Up"**
2. Elige **"Continue with GitHub"**
3. Una vez dentro, pulsa **"Add New Project"**
4. Busca tu repo `anime-tracker` y pulsa **"Import"**
5. Deja todo por defecto y pulsa **"Deploy"**
6. En ~30 segundos tendrás una URL tipo `anime-tracker-xxxx.vercel.app`

### Paso 4 — Instalar en el móvil

**En Android (Chrome):**
1. Abre la URL de Vercel en Chrome
2. Aparecerá un banner "Añadir a pantalla de inicio"
3. Si no aparece: menú (⋮) → "Añadir a pantalla de inicio"

**En iPhone (Safari):**
1. Abre la URL en Safari
2. Pulsa el botón compartir (cuadrado con flecha)
3. Selecciona "Añadir a pantalla de inicio"

---

## Cómo usar la app

- **Buscar**: escribe el nombre del anime (en inglés o japonés)
- **Añadir**: pulsa "+ Añadir" en los resultados
- **Calendario**: ve qué días emite cada uno y si el episodio ya salió esta semana
- **Mi lista**: gestiona los animes que sigues

Los datos se guardan en el móvil, no necesitan cuenta.
