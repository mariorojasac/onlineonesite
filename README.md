[![Netlify Status](https://api.netlify.com/api/v1/badges/73a97107-1d28-4aed-83e2-5e1dcb0ecdfe/deploy-status)](https://app.netlify.com/projects/onlineonesite/deploys)

# Online One Consulting website

One-page sales site for Online One Consulting (OnlineOne LLC): websites, AI tools and IT for Indiana small businesses.

It is plain HTML, CSS and JavaScript with no build step, so there is nothing to install and nothing to break on Netlify.

| File | What it is |
|---|---|
| `site/index.html` | All page content: headline, pricing, AI services, FAQ, contact form |
| `site/styles.css` | Styles (colors are at the top under `:root`) |
| `site/main.js` | Phone number setting, contact form (EmailJS) |
| `netlify.toml` | Tells Netlify to publish `site/` with no build |

## Common edits

- **Show the Call buttons:** set `PHONE` at the top of `site/main.js` (digits only).
- **Change prices or packages:** edit the `#pricing` section in `site/index.html`, and the `makesOffer` prices in the JSON-LD block near the top.
- **Custom domain:** after connecting it in Netlify, replace `onlineonesite.netlify.app` in `site/robots.txt` and `site/sitemap.xml`.

## Preview locally

```sh
npx serve site
```
