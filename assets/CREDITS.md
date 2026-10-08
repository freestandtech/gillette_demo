# Asset credits and sources

Pitch-demo use only. Brand marks and product photography belong to their owners (Gillette / Procter & Gamble, FreeStand). Lifestyle photos are from Pexels under the [Pexels License](https://www.pexels.com/license/): free to use, no attribution required. Credit is given below anyway.

## Supplied
| File | Source |
|---|---|
| `gillette-education-reel.mp4` | Supplied by Apurva: "How to Shave for the First Time, Shaving Tips for Men, Gillette India" (1280x720 landscape). Center-cropped to 9:16, 540x960, H.264, audio removed, 2:30 loop. |

## UGC photos (supplied by Apurva)
`ugc-photo-1..5.png` are 9:16 crops of five images Apurva supplied (originals kept in `src/ugc-supplied/`). `ugc-1..5.png` add the Reel overlays. Several are Gillette India campaign images (two carry the Mach3 logo, one is from a Gillette cricket event), so confirm usage rights before sharing outside the pitch.

## Brand marks
| File | Source | License |
|---|---|---|
| `gillette-logo.svg`, `gillette-logo.png`, `gillette-logo-white.png` | [Wikimedia Commons: File:Gillette_logo.svg](https://commons.wikimedia.org/wiki/File:Gillette_logo.svg) | Commons lists it as public domain (simple text logo). Trademark of P&G. |
| `freestand-logo.svg`, `freestand-logo.png`, `freestand-logo-white.png` | freestand.in footer wordmark: https://framerusercontent.com/images/hYY5CwrTYzubsPJ4sILBcdh4w.svg (recoloured navy #0E2A6B / white) | FreeStand's own mark |
| `freestand-mark.png` | freestand.in header gift icon: https://framerusercontent.com/images/0J9Nzq9QZNhvI3xuWThOLe8w.png | FreeStand's own mark |

## Product images
| File | Source | Notes |
|---|---|---|
| `guard-3in1-pack.png` | Amazon.in listing "Gillette Guard 3in1 Shaving Razor, 2 Cartridges + 1 Razor" (ASIN B0BWDNPP5V), image https://m.media-amazon.com/images/I/61wg-+QKQeL.jpg | White background removed with rembg (isnet-general-use), 1000x1000. P&G product photography. |
| `guard-3in1-refill.png` | Amazon.in listing "Gillette Guard 3in1 Shaving Blades, 4 cartridges" (ASIN B0GJDXF2NM), image https://m.media-amazon.com/images/I/71XM7QHE0GL.jpg | Background removed. Used as the UGC reward (free refill pack). |
| `guard-3in1-razor.png` | gillette.co.in Guard 3 product page: https://images.ctfassets.net/7tfi3razjgvb/.../Gillette-Guard-3-Shaving-Razor.png | Official transparent render. This is the Guard 3 razor (black/blue handle); the Guard 3in1 razor has a blue/teal handle. No standalone 3in1 razor render was available. |
| `gillette-gel.png` | gillette.co.in, Gillette Series Sensitive Skin Shave Gel (80 g) page: https://www.gillette.co.in/en-in/products/shaving-gel-cream-and-aftershave/sensitive-skin-tube-shave-gel | Official transparent render. |

## Photos (Pexels License)
| File | Photo | Photographer |
|---|---|---|
| `rohan-avatar.png` | https://www.pexels.com/photo/a-young-man-pinching-his-shirt-smiling-6338266/ | MD. Rasel Hossain |
| `rohan-mirror.png` (and the base of `unboxing.png`) | https://www.pexels.com/photo/man-taking-a-selfie-in-mirror-16137199/ | Zain Ali |
| `delivery.png` | https://www.pexels.com/photo/a-brown-cardboard-box-beside-white-door-6170463/ | Tima Miroshnichenko |
| `avatar-1.png` | https://www.pexels.com/photo/portrait-of-a-young-man-in-urban-setting-29153201/ | Dream_ maKkerzz |
| `avatar-2.png` | https://www.pexels.com/photo/young-man-smiling-in-gray-t-shirt-5192518/ | Velroy Fernandes |
| `avatar-3.png` | https://www.pexels.com/photo/indian-man-smile-suraj-barai-model-27442252/ | Suraj Barai |
| `avatar-4.png` | https://www.pexels.com/photo/photo-of-man-wearing-blue-polo-shirt-2590287/ | Okay Bhargav |
| `avatar-5.png` | https://www.pexels.com/photo/smiling-young-man-posing-on-yellow-background-33770565/ | Sanket Mishra |
| `avatar-6.png` | https://www.pexels.com/photo/young-man-in-stylish-jacket-on-urban-street-32836590/ | Aa Dil |

## Built in code (sources in `src/`, re-render with `node src/render-all.js`)
`sample-kit.png`, `sample-ad-9x16.png`, `sample-ad-1x1.png`, `landing-hero.png`, `reel-cover.png` (background = frame at 00:30 of the reel), `ugc-1/2/3.png`, `unboxing.png`, `gillette-ig-dp.png`, `og-image.png`. Fonts: Barlow and Roboto (Google Fonts, SIL OFL / Apache 2.0).

`web/*.webp` are smaller copies of every PNG used by `index.html`; rebuild with `python3 src/make_web.py`.
