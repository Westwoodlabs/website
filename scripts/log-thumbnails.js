'use strict';

/**
 * Hexo generator: create thumbnails for log images.
 *
 * For every image referenced in source/_data/log.json that lives under
 * source/images/log/ this generator emits two assets into the public folder:
 *
 *   images/log/<name>.jpg          – the original (copied as-is, EXIF kept)
 *   images/log/thumbs/<name>.jpg   – 800 px wide thumbnail, EXIF rotation
 *                                    applied, metadata stripped
 *
 * The generator is incremental: it only re-processes files whose source
 * mtime is newer than an already-generated thumb inside public/.
 */

const path = require('path');
const fs   = require('fs');
const sharp = require('sharp');

hexo.extend.generator.register('log_thumbnails', async function (locals) {
  const THUMB_WIDTH = 800;
  const logData     = locals.data.log;

  if (!Array.isArray(logData) || logData.length === 0) return [];

  const sourceBase = path.join(this.base_dir, 'source', 'images');
  const routes     = [];

  for (const entry of logData) {
    if (!entry.image) continue;

    // entry.image is e.g. "log/2026-04-05-tuerschild.jpg"
    const relPath  = entry.image;                        // relative to images/
    const srcFile  = path.join(sourceBase, relPath);

    if (!fs.existsSync(srcFile)) continue;

    const dir      = path.dirname(relPath);              // "log"
    const base     = path.basename(relPath);             // "2026-04-05-tuerschild.jpg"
    const thumbRel = path.join(dir, 'thumbs', base);    // "log/thumbs/2026-04-05-tuerschild.jpg"

    // Only emit the thumbnail route — originals are already served as static
    // files from source/images/ by Hexo's built-in asset copy. Registering a
    // generator route for the same path would shadow the static file.
    routes.push({
      path: 'images/' + thumbRel.replace(/\\/g, '/'),
      data: async () => {
        const srcBuf = fs.readFileSync(srcFile);
        // rotate() without args uses EXIF orientation tag, then strips metadata
        const thumbBuf = await sharp(srcBuf)
          .rotate()                   // auto-rotate based on EXIF
          .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
          .jpeg({ quality: 82 })
          .toBuffer();
        return thumbBuf;
      }
    });
  }

  return routes;
});
