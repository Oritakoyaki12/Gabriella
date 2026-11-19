# Gabriella

## Run locally

Open `index.html` with Live Server, or open any file in `pages/` directly. The page files are complete HTML documents and use the shared header and footer from `components.js`.

If you prefer the command line:

```bash
npx serve .
```

Then open the URL printed by the server.

- `index.html` redirects to the home page.
- `components.js` renders the reusable header and footer on each page.
- `pages/` contains standalone HTML pages.
- `script.js` handles articles, testing, forms, and language behavior.
- `styles.css` contains the shared styles.

## Languages

The EN/FIL button switches languages immediately and remembers the selection
for the next page visit. To translate static page text, add a `data-fil`
attribute to the element while keeping its English text as the element content.
Use `data-fil-placeholder` for input placeholders and `data-fil-aria-label` for
accessible labels. Translations for content rendered by `script.js`, such as
articles and testing-site results, are maintained there.
