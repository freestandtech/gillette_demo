// Re-render every built creative in /assets from the HTML sources in this folder.
//   cd assets/src && node render-all.js            (all)
//   node render-all.js sample-ad-9x16 ugc-1        (only these outputs)
// Needs Playwright with Chromium (npm i -D playwright && npx playwright install chromium).
const path = require('path');
const { execFileSync } = require('child_process');
let chromium;
try { ({ chromium } = require('playwright')); }
catch { ({ chromium } = require('/opt/node22/lib/node_modules/playwright')); }

// [output file (in /assets), source html, width, height, query, transparent]
const JOBS = [
  ['sample-kit.png',        'sample-kit.html',     1080, 1080, '',        false],
  ['src/sample-kit-cutout.png', 'sample-kit.html', 1080, 1080, '?cutout', true],
  ['sample-ad-9x16.png',    'sample-ad-9x16.html', 1080, 1920, '',        false],
  ['sample-ad-1x1.png',     'sample-ad-1x1.html',  1080, 1080, '',        false],
  ['landing-hero.png',      'landing-hero.html',   1080, 1200, '',        false],
  ['reel-cover.png',        'reel-cover.html',     1080, 1920, '',        false],
  ['ugc-1.png',             'ugc.html',            1080, 1920, '?n=1',    false],
  ['ugc-2.png',             'ugc.html',            1080, 1920, '?n=2',    false],
  ['ugc-3.png',             'ugc.html',            1080, 1920, '?n=3',    false],
  ['ugc-4.png',             'ugc.html',            1080, 1920, '?n=4',    false],
  ['ugc-5.png',             'ugc.html',            1080, 1920, '?n=5',    false],
  ['unboxing.png',          'unboxing.html',       1080, 1350, '',        false],
  ['gillette-ig-dp.png',    'gillette-ig-dp.html',  400,  400, '',        true],
  ['og-image.png',          'og-image.html',       1200,  630, '',        false],
];

(async () => {
  const only = process.argv.slice(2);
  const browser = await chromium.launch();
  for (const [out, src, w, h, query, transparent] of JOBS) {
    if (only.length && !only.some(o => out.includes(o))) continue;
    const page = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
    await page.goto('file://' + path.join(__dirname, src) + query);
    await page.waitForLoadState('networkidle');
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(300);
    const dest = path.join(__dirname, '..', out);
    await page.screenshot({ path: dest, omitBackground: transparent, clip: { x: 0, y: 0, width: w, height: h } });
    await page.close();
    // unboxing gets a WhatsApp-style recompression pass
    if (out === 'unboxing.png') {
      try {
        const tmp = dest.replace('.png', '.tmp.jpg');
        execFileSync('convert', [dest, '-quality', '58', tmp]);
        execFileSync('convert', [tmp, dest]);
        require('fs').unlinkSync(tmp);
      } catch (e) { console.warn('ImageMagick not found, skipped JPEG pass'); }
    }
    console.log('rendered', out);
  }
  await browser.close();
})();
