import sharp from 'sharp';
import { readdir, stat, unlink } from 'fs/promises';
import { join, basename } from 'path';

const DIR = new URL('../public/photos/plans', import.meta.url).pathname;
const MAX_WIDTH = 1600;

const files = (await readdir(DIR)).filter(f => f.startsWith('source_'));

for (const f of files) {
  const src = join(DIR, f);
  // source_3A.png → 3A
  const aptId = f.replace(/^source_/, '').replace(/\.(png|jpg|jpeg)$/i, '');
  const avif = join(DIR, `plan-${aptId}.avif`);
  const webp = join(DIR, `plan-${aptId}.webp`);

  const before = (await stat(src)).size;

  await sharp(src)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .avif({ quality: 65, speed: 4 })
    .toFile(avif);

  await sharp(src)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(webp);

  const a = (await stat(avif)).size;
  const w = (await stat(webp)).size;
  console.log(`  apt ${aptId}: ${(before/1024).toFixed(0)}KB → AVIF ${(a/1024).toFixed(0)}KB, WebP ${(w/1024).toFixed(0)}KB`);

  // Remove source
  await unlink(src);
}
console.log('Done.');
