import { defineConfig } from 'astro/config';

const SITE = process.env.ASTRO_SITE || 'https://lebarche66.netlify.app';
const BASE = process.env.ASTRO_BASE || '';

export default defineConfig({
  site: SITE,
  base: BASE,
  output: 'static',
});
