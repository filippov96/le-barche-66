import sharp from 'sharp';
import { readdir, stat, unlink } from 'fs/promises';
import { join, basename, extname } from 'path';

const DIR = new URL('../public/photos', import.meta.url).pathname;
const MAX_WIDTH = 2000;
const AVIF_QUALITY = 70;
const JPG_FALLBACK_QUALITY = 80;
const JPG_FALLBACK_WIDTH = 1600;

const files = await readdir(DIR);
const sources = files.filter(f => /\.(jpe?g|png)$/i.test(f));

let totalBefore = 0;
let totalAfter = 0;
const generated = new Set();

console.log(`Processing ${sources.length} source images...\n`);

for (const file of sources) {
  const src = join(DIR, file);
  const name = basename(file, extname(file));
  const avif = join(DIR, `${name}.avif`);
  const smallJpg = join(DIR, `${name}.jpg`);

  const before = (await stat(src)).size;
  totalBefore += before;

  // 1) AVIF (primary)
  await sharp(src)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .avif({ quality: AVIF_QUALITY, speed: 4 })
    .toFile(avif);
  const avifSize = (await stat(avif)).size;
  generated.add(avif);

  // 2) Small JPG fallback (only if original > 500KB or original is PNG)
  const isPng = /\.png$/i.test(file);
  const needsFallback = before > 500 * 1024 || isPng;
  let jpgSize = 0;
  if (needsFallback) {
    await sharp(src)
      .resize({ width: JPG_FALLBACK_WIDTH, withoutEnlargement: true })
      .jpeg({ quality: JPG_FALLBACK_QUALITY, mozjpeg: true })
      .toFile(smallJpg + '.tmp');
    jpgSize = (await stat(smallJpg + '.tmp')).size;

    // Replace original (delete first if same name)
    if (file !== `${name}.jpg`) {
      await unlink(src);
    } else {
      await unlink(src);
    }
    const { rename } = await import('fs/promises');
    await rename(smallJpg + '.tmp', smallJpg);
    totalAfter += jpgSize + avifSize;
  } else {
    // Small enough — keep original as-is, but still count
    totalAfter += avifSize;
    // If original is PNG, remove it since we have AVIF + JPG fallback above (handled in the PNG branch)
  }

  const beforeStr = before > 1024 * 1024 ? `${(before/1024/1024).toFixed(1)}MB` : `${Math.round(before/1024)}KB`;
  const avifStr = `AVIF ${Math.round(avifSize/1024)}KB`;
  const jpgStr = jpgSize ? `, JPG ${Math.round(jpgSize/1024)}KB` : '';
  console.log(`  ${file.padEnd(22)} ${beforeStr.padStart(8)} → ${avifStr}${jpgStr}`);
}

console.log(`\nTotal: ${(totalBefore/1024/1024).toFixed(1)}MB → ${(totalAfter/1024/1024).toFixed(1)}MB  (-${Math.round((1-totalAfter/totalBefore)*100)}%)`);
