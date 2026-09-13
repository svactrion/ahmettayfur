// One-off script to regenerate the favicon set from public/img/hero-face.webp.
// Not part of the build — run manually with `node scripts/make-favicons.mjs`
// whenever the source portrait changes.
import sharp from 'sharp';
import { writeFileSync } from 'node:fs';

const SRC = 'public/img/hero-face.webp';
const BG = '#161826'; // matches the site's theme-color / dark surface

// Crop to the face: the source is a 128x125 bust portrait with a
// transparent background, so a straight resize keeps too much shoulder
// and not enough face at 16px. This crop keeps hair-to-collar centered.
const CROP = { left: 14, top: 2, width: 100, height: 100 };

function icon(size) {
  return sharp(SRC)
    .extract(CROP)
    .resize(size, size)
    .flatten({ background: BG })
    .png({ compressionLevel: 9, palette: true });
}

function buildIco(pngBuffers, sizes) {
  const count = pngBuffers.length;
  const headerSize = 6 + 16 * count;
  let offset = headerSize;
  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(count, 4);

  pngBuffers.forEach((buf, i) => {
    const entryOffset = 6 + 16 * i;
    const size = sizes[i];
    header.writeUInt8(size >= 256 ? 0 : size, entryOffset + 0); // width
    header.writeUInt8(size >= 256 ? 0 : size, entryOffset + 1); // height
    header.writeUInt8(0, entryOffset + 2); // color count
    header.writeUInt8(0, entryOffset + 3); // reserved
    header.writeUInt16LE(1, entryOffset + 4); // color planes
    header.writeUInt16LE(32, entryOffset + 6); // bits per pixel
    header.writeUInt32LE(buf.length, entryOffset + 8); // size
    header.writeUInt32LE(offset, entryOffset + 12); // offset
    offset += buf.length;
  });

  return Buffer.concat([header, ...pngBuffers]);
}

const [png16, png32, png48, png512, apple180] = await Promise.all([
  icon(16).toBuffer(),
  icon(32).toBuffer(),
  icon(48).toBuffer(),
  icon(512).toBuffer(),
  icon(180).toBuffer(),
]);

writeFileSync('public/favicon.ico', buildIco([png16, png32, png48], [16, 32, 48]));
writeFileSync('public/favicon.png', png512);
writeFileSync('public/apple-touch-icon.png', apple180);

console.log('favicon.ico (16/32/48), favicon.png (512), apple-touch-icon.png (180) written.');
