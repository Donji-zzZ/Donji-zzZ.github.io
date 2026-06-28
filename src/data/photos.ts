// Optional captions for your photos.
// Key = the exact filename in src/images/photography/.  Every field is optional.
//
// Camera settings (focal length, aperture, shutter, ISO) are read AUTOMATICALLY
// from each photo's EXIF data, so most of the time you only set location/caption
// here — or nothing at all.
//
// Example:
//   "grand-teton.jpg": { location: "Grand Teton, WY", caption: "Sunrise over the range" },

const photos: Record<string, { location?: string; caption?: string; alt?: string }> = {
  // add entries here as you add photos
};

export default photos;
