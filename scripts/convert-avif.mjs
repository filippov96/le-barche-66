import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, basename, extname } from 'path';

const PHOTOS_DIR = new URL('../public/photos', import.meta.url).pathname;
const QUALITY = 70;
const MAX_WIDTH = 2000;

const files = await readdir(PHOTOS_DIR);
const jpgs = files.filter(f => /\.(jpg|jpeg)$/i.test(f));

console.log(`Converting ${jpgs.length} images to AVIF (quality=${QUALITY}, max-width=${MAX_WIDTH})...\n`);

let totalBefore = 0;
let totalAfter = 0;

for (const file of jpgs) {
  const src = join(PHOTOS_DIR, file);
  const name = basename(file, extname(file));
  const dest = join(PHOTOS_DIR, `${name}.avif`);

  const before = (await stat(src)).size;

  await sharp(src)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .avif({ quality: QUALITY, speed: 4 })
    .toFile(dest);

  const after = (await stat(dest)).size;
  const saving = Math.round((1 - after / before) * 100);
  totalBefore += before;
  totalAfter += after;

  console.log(`  ${file} → ${name}.avif  ${(before/1024/1024).toFixed(1)}MB → ${(after/1024/1024).toFixed(1)}MB  (-${saving}%)`);
}

const totalSaving = Math.round((1 - totalAfter / totalBefore) * 100);
console.log(`\nTotale: ${(totalBefore/1024/1024).toFixed(0)}MB → ${(totalAfter/1024/1024).toFixed(0)}MB  (-${totalSaving}%)`);
