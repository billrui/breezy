# The Breezy Species — website

Landscaping & plant nursery site (Mtwapa, Kenya), built with React + Vite.

## Run it locally

Needs Node.js 18+. From this folder:

    npm install
    npm run dev

Open the URL Vite prints (usually http://localhost:5173).

## Put it online with GitHub Pages (easy, automatic)

Do NOT upload the source files straight to Pages — the browser can't run
`.jsx`, which causes the `/src/main.jsx 404` error. Let GitHub build it for you:

1. Create a repo on GitHub and push this whole folder to it (branch `main`).
   The included workflow at `.github/workflows/deploy.yml` does the rest.
2. On GitHub go to  Settings -> Pages  and set
   **Source = "GitHub Actions"**  (not "Deploy from a branch").
3. Push any change (or open the Actions tab and re-run the workflow).
   When it finishes, your site is live at:
       https://<your-username>.github.io/<repo-name>/

That's it. Every future `git push` rebuilds and redeploys automatically.

## Or build it yourself and upload

    npm install
    npm run build      # creates the ./dist folder

Upload the CONTENTS of `dist/` (not the whole project) to any host —
Netlify, Vercel, cPanel, etc. On Netlify/Vercel just point them at this
repo with build command `npm run build` and publish directory `dist`.

## Add / change plant photos

Drop images in `public/plants/`, named to match each plant's slug
(e.g. `public/plants/foxtail-palm.jpg`). See `public/plants/README.txt`.

## Where things live

- `src/BreezySpecies.jsx` — the whole site; plant catalogue is the
  `plantGroups` array, hero slideshow is the `featured` array.
- `public/plants/` — your plant photos.
