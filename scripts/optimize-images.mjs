import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const assetsDir = path.resolve(process.cwd(), 'src/assets');
const minBytes = 300 * 1024; // Skip tiny assets where gains are negligible
const quality = 78;
const effort = 6;

const entries = await fs.readdir(assetsDir, { withFileTypes: true });
const pngFiles = entries
  .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith('.png'))
  .map((entry) => path.join(assetsDir, entry.name));

let converted = 0;
let skipped = 0;
let bytesBefore = 0;
let bytesAfter = 0;

for (const pngPath of pngFiles) {
  const srcStat = await fs.stat(pngPath);
  if (srcStat.size < minBytes) {
    skipped += 1;
    continue;
  }

  const webpPath = pngPath.replace(/\.png$/i, '.webp');
  await sharp(pngPath).webp({ quality, effort }).toFile(webpPath);

  const webpStat = await fs.stat(webpPath);
  if (webpStat.size >= srcStat.size) {
    await fs.unlink(webpPath);
    skipped += 1;
    continue;
  }

  converted += 1;
  bytesBefore += srcStat.size;
  bytesAfter += webpStat.size;

  const delta = (((srcStat.size - webpStat.size) / srcStat.size) * 100).toFixed(1);
  console.log(`${path.basename(pngPath)} -> ${path.basename(webpPath)} (${delta}% smaller)`);
}

const totalSaved = bytesBefore - bytesAfter;
const totalSavedPct = bytesBefore > 0 ? ((totalSaved / bytesBefore) * 100).toFixed(1) : '0.0';

console.log('\nImage optimization summary:');
console.log(`- Converted: ${converted}`);
console.log(`- Skipped: ${skipped}`);
console.log(`- Bytes before: ${bytesBefore}`);
console.log(`- Bytes after: ${bytesAfter}`);
console.log(`- Saved: ${totalSaved} bytes (${totalSavedPct}%)`);
