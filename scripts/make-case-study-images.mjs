// One-off script to make the web-sized screenshots for the GrammarLens
// case study. Not part of the build — run manually with
// `node scripts/make-case-study-images.mjs` whenever a source screenshot
// changes.
//
// Sources are the owner's raw iPhone screenshots in
// docs/case-study-screenshots/ (git-ignored; never edited or moved by this
// script). Output: public/img/case-study/grammarlens/<name>.webp, 600px
// wide, which is what the page's <img> width/height attributes assume.
import sharp from 'sharp';
import { mkdirSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const SRC_DIR = 'docs/case-study-screenshots';
const OUT_DIR = 'public/img/case-study/grammarlens';
const WIDTH = 600;

const NAMES = [
  'day0-1-test',
  'day0-2-result',
  'day0-3-climb',
  'day0-4-paywall',
  'practice-offer-card',
  'daily-test-explanation',
];

mkdirSync(OUT_DIR, { recursive: true });

// Source extensions vary in case (.PNG vs .png), so match on the base name.
const sources = readdirSync(SRC_DIR);

for (const name of NAMES) {
  const file = sources.find((f) => f.toLowerCase() === `${name}.png`);
  if (!file) {
    console.warn(`missing: ${name}.png`);
    continue;
  }
  const out = join(OUT_DIR, `${name}.webp`);
  const info = await sharp(join(SRC_DIR, file))
    .resize({ width: WIDTH })
    .webp({ quality: 82, effort: 6 })
    .toFile(out);
  console.log(`${out}  ${info.width}x${info.height}  ${Math.round(info.size / 1024)} KB`);
}
