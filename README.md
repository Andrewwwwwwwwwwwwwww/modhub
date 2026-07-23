# ModHub

A documentation hub for JonahsNotMyName's Minecraft mods, built with [Astro Starlight](https://starlight.astro.build/) and deployed to GitHub Pages.

The home page is a mod picker; each mod has its own page with overview, install, features, config, and download links.

## Develop

```sh
npm install
npm run dev      # local dev server
npm run build    # production build to ./dist
npm run preview  # preview the production build
```

## Deploy

Pushing to `master` triggers the GitHub Actions workflow in `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.

## Add or edit a mod page

- Pages live in `src/content/docs/mods/`.
- Add the mod to the sidebar in `astro.config.mjs` and to the card grid in `src/content/docs/index.mdx`.
