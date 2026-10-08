# Gillette x FreeStand: Educate to Sample

A click-through pitch demo for Gillette India (P&G). It follows Rohan, 19, a college student in Pune, from a Gillette first-shave education reel to a qualified free sample, WhatsApp feedback and a UGC Reel.

The phone on the right shows what Rohan sees. The panel on the left shows what Meta and FreeStand are doing at that moment.

## Run locally
Any static server works:

```bash
npx http-server -p 8080 .
# open http://localhost:8080
```

Opening `index.html` straight from disk also works.

## Present
- **Next:** `→`, `Space`, `Enter`, the Next button, or a tap on the phone.
- **Back:** `←`, or the Back button.
- **Jump:** `Home` / `End`, the 7 step chips at the top, or the numbered sub-steps at the bottom.
- **Deep link:** `index.html#s=12` opens sub-step 12. The last stage you viewed is remembered.
- The stage scales to fit the window. It is designed at 1280x820 and reads well at 1366x768 and above.

## Deploy on GitHub Pages
1. Push this folder to a repo (for example `apurvacreates-7/gillette_sampling`).
2. Go to Settings > Pages > Build and deployment, choose "Deploy from a branch", then pick `main` and `/ (root)`.
3. If the repo name is not `gillette_sampling`, update the two `og:image` URLs in `index.html`. Link previews need an absolute URL.

## Structure
```
index.html                  the demo (vanilla JS, no build step)
assets/                     PNG masters at the requested sizes + the reel
assets/web/                 WebP copies loaded by the demo (about 0.9 MB in total)
assets/src/                 HTML sources for every built creative + render scripts
assets/CREDITS.md           source URL and licence for every asset
```

### Editing copy
- **Demo copy and numbers:** campaign numbers live in the `N` object near the top of the script in `index.html`. Screen copy sits next to each screen (`PAGES`, `WA`, `panel*`).
- **Creatives:** edit the HTML in `assets/src/`, then run:
  ```bash
  cd assets/src && node render-all.js     # re-render the PNGs (needs Playwright + Chromium)
  python3 make_web.py                     # refresh assets/web/*.webp (needs Pillow)
  ```
