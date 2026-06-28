Put your photos in THIS folder (jpg / jpeg / png / webp). They appear on the
/photography page automatically — resized, optimized, and lazy-loaded.

Tips:
- Originals are fine; Astro resizes them at build. (For very large libraries,
  exporting the long edge to ~2400px keeps builds fast.)
- Filenames set the order. Prefix with 01_, 02_, ... to arrange them, or photos
  sort by capture date when EXIF is present (newest first).
- Add a location/caption in src/data/photos.ts (optional).
- Camera settings are pulled from EXIF automatically.
