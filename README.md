# FreeStand x Gillette: Educate to Sample

A click-through pitch demo for Gillette India (P&G). It follows Rohan, 19, a college student in Pune, from a Gillette first-shave education reel to a qualified free Gillette Fusion5 sample (shave-only use case), WhatsApp feedback and a UGC Reel.

The phone on the left shows what Rohan sees. The middle panel shows what Meta and FreeStand are doing at that moment. The right column is the first-party profile FreeStand builds, which stays anonymous until Rohan claims. Step 8 is the FreeStand Campaign Analytics dashboard (overview + data collected, live analytics, data visualisation, statistical analysis). Step 9 ("Shave It Forward") is the next campaign built from the data, and the last screen shows the engine as an 8-node loop (Grab attention, Educate, Engage, Sample, Trial, Purchase, Advocate, Optimise media) with the "Run this with FreeStand" CTA.

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
- **Jump:** `Home` / `End`, the 9 step chips at the top, or the numbered sub-steps at the bottom.
- **Deep link:** `index.html#s=12` opens sub-step 12 (sub-step 1 is the intro, 25-28 are the FreeStand dashboard, 31 is the engine loop and CTA). The last stage you viewed is remembered.
- The stage scales to fit the window. It is designed at 1280x820 and reads well at 1366x768 and above.

## Deploy on GitHub Pages
1. This repo is `freestandtech/gillette_demo`; the site URL is https://freestandtech.github.io/gillette_demo/.
2. Go to Settings > Pages > Build and deployment, choose "Deploy from a branch", then pick `main` and `/ (root)`.
3. If the repo or org is renamed, update the two `og:image` URLs in `index.html`. Link previews need an absolute URL.

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
