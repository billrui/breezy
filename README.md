# The Breezy Species 🌿

A single-page marketing site for **The Breezy Species**, a Mtwapa-based
landscaping and plant company on the Kenyan coast. Built with **React 18** and
**Vite 8**.

Sections: hero showcase, growth journey, services, a filterable plant
catalogue, process, about, contact and footer.

---

## Local development

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

Requires Node 18+ (Node 20 recommended).

---

## Deploying to GitHub Pages

The project uses `base: "./"` in `vite.config.js`, so it produces **relative
asset paths** and works under any repository name (e.g.
`https://<user>.github.io/<repo>/`) with no extra configuration.

### Option A — automatic (recommended)

A GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and
publishes the site on every push to `main`.

1. Push this project to a GitHub repository.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push to `main` (or run the workflow manually from the **Actions** tab).

The site goes live at `https://<your-username>.github.io/<repo>/`.

### Option B — manual, with the `gh-pages` branch

```bash
npm run deploy
```

This builds `dist/` and pushes it to a `gh-pages` branch. Then set
**Settings → Pages → Source** to **Deploy from a branch → `gh-pages` / root**.

---

## Project structure

```
├─ index.html                # Vite entry (loads /src/main.jsx)
├─ vite.config.js            # base:"./" for GitHub Pages
├─ public/plants/            # plant photos (served as-is)
└─ src/
   ├─ main.jsx               # React entry
   ├─ App.jsx                # page composition
   ├─ index.css              # all styles
   ├─ constants.js           # site copy, plant catalogue, services
   ├─ components/            # Header, Hero, Services, Plants, …
   ├─ assets/illustrations.jsx  # inline SVG art & fallbacks
   └─ utils/                 # icon map, scroll-reveal hook
```

## Editing content

Most site content (services, the plant catalogue, contact details, the
WhatsApp link) lives in **`src/constants.js`** — edit there to update the
site without touching the components.
# breezy
