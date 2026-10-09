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

## Product images (Gillette Fusion5, shave only)
| File | Source | Notes |
|---|---|---|
| `fusion5-pack.png` | Flipkart listing "Gillette Fusion5 Razor for Men" (current India box), https://rukminim2.flixcart.com/image/1000/1000/xif0q/shaving-razor/g/q/h/fusion5-razor-for-men-1-gillette-original-imahr35xpn6jpyyt.jpeg | White background removed (flood fill), 1000x1000. P&G product photography. |
| `fusion5-razor.png` | Flipkart listing "Gillette Fusion 5 Razor" blister shot, https://rukminim2.flixcart.com/image/1000/1000/xif0q/shaving-razor/s/g/j/fusion-5-razor-1-gillette-original-imah7rmsyvvx7zba.jpeg | Standalone razor cropped from the blister image, background removed. |
| `fusion5-refill.png` | gillette.co.in Fusion manual razor blades page (4-count render) | Official transparent render. Older "Fusion" pack design; used as the UGC refill reward. |
| `fusion-gel.png` | gillette.co.in Fusion Hydra Gel Sensitive Skin (75 ml) page | Official transparent render. |

## Photos (Pexels License)
| File | Photo | Photographer |
|---|---|---|
| `rohan-avatar.png`, `rohan-mirror.png` (base of `unboxing.png`) | https://www.pexels.com/photo/a-smiling-young-man-in-blue-and-white-striped-shirt-8916562/ | Alan Biju |
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
