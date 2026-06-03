import { readFileSync, writeFileSync } from 'fs';

const file = process.argv[2];
const css = readFileSync(file, 'utf8');

// Convert Npx → rem, rounding to 4 decimal places
// Rules:
//  - Skip lines containing @media (keep breakpoints in px)
//  - Skip border/outline 1px (keep hairlines)
//  - Skip 0px (just use 0)
//  - 999px → 62.5rem (pill)

const lines = css.split('\n');
const converted = lines.map(line => {
  // Don't touch @media breakpoints
  if (line.trimStart().startsWith('@media')) return line;

  return line.replace(/(\d*\.?\d+)px/g, (match, n) => {
    const px = parseFloat(n);
    if (px === 0) return '0';
    if (px === 1) return '1px';   // keep hairlines
    if (px === 999) return '62.5rem'; // pill radius
    const rem = Math.round((px / 16) * 10000) / 10000;
    // Clean up unnecessary trailing zeros
    const remStr = rem % 1 === 0 ? rem.toString() : rem.toFixed(4).replace(/\.?0+$/, '');
    return `${remStr}rem`;
  });
});

writeFileSync(file, converted.join('\n'), 'utf8');

// Count conversions
const before = (css.match(/\d+px/g) || []).filter(m => !['0px','1px'].includes(m)).length;
console.log(`Converted ~${before} px values to rem in ${file}`);
