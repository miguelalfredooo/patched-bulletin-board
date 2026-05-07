# Image Shader System

A real-time pixel art effect processor ported from alfredo-studio. Allows editorial agents to apply shader effects to images before they're used in Design By Bulletin issues.

**Note:** Uses sharp library (prebuilt binaries, zero system dependencies). No C++ compilation required.

## Installation

```bash
npm install sharp figlet
```

Installed via `package.json`. No additional system dependencies required.

## Usage

### Basic Example

```javascript
const { processImage } = require('./utils/shader');

// Process image with preset
const imageBuffer = require('fs').readFileSync('photo.jpg');
const processed = await processImage(imageBuffer, 'editorial');
require('fs').writeFileSync('photo-processed.png', processed);
```

### With Custom Parameters

```javascript
const params = {
  pixelSize: 3,           // Grid resolution (2-12)
  colorLevels: 20,        // Color quantization (4-32)
  ditherAmount: 0.25,     // Dithering intensity (0-1)
  contrast: 1.05,         // Contrast adjustment (0.6-1.8)
  saturation: 0.95,       // Color saturation
};

const processed = await processImage(imageBuffer, params);
```

### Interactive Simulation

Simulate mouse-driven parameter changes:

```javascript
const { paramsFromMouse, processImage } = require('./utils/shader');

// Simulate moving mouse to (0.7, 0.3) on screen
const params = paramsFromMouse(0.7, 0.3);
// pixelSize: 10, ditherAmount: 0.7, colorLevels: 23, contrast: 1.38

const processed = await processImage(imageBuffer, params);
```

### Automated Gradient Transitions

For sequential processing across series of images:

```javascript
const { paramsFromGradient, processImage } = require('./utils/shader');

const images = [/* ... */];
for (let i = 0; i < images.length; i++) {
  const progress = i / images.length;
  const params = paramsFromGradient(progress, 'diagonal');
  const processed = await processImage(images[i], params);
  // Use processed image...
}
```

Direction options:
- `'left'` — pixelSize increases left→right
- `'right'` — pixelSize increases right→left
- `'up'` — colorLevels decrease top→bottom
- `'down'` — colorLevels increase top→bottom
- `'diagonal'` — both increase diagonally

## Presets

Named presets tuned for different visual registers:

### `editorial` (recommended for Bulletin Board)
```
pixelSize: 3, colorLevels: 20, ditherAmount: 0.25, contrast: 1.05, saturation: 0.95
```
Subtle pixel effect, preserves editorial tone.

### `gameboy`
```
pixelSize: 8, colorLevels: 4, ditherAmount: 0.8, contrast: 1.2, saturation: 0.3
```
Heavy pixelation, severe color reduction, strong dither. Classic handheld gaming register.

### `nes`
```
pixelSize: 4, colorLevels: 16, ditherAmount: 0.4, contrast: 1.1, saturation: 1.2
```
Medium pixelation, arcade-era colors. Punchy and nostalgic.

### `c64`
```
pixelSize: 6, colorLevels: 8, ditherAmount: 0.6, contrast: 1.0, saturation: 0.8
```
Vintage 8-bit computer aesthetic. Heavy dither, limited palette.

### `hires`
```
pixelSize: 2, colorLevels: 32, ditherAmount: 0.3, contrast: 1.0, saturation: 1.0
```
Minimal pixelation, high color fidelity. Subtle effect, close to original.

### `subtle`
```
pixelSize: 2, colorLevels: 24, ditherAmount: 0.2, contrast: 1.0, saturation: 1.0
```
Barely noticeable dither effect. For images that should feel "almost original."

## Parameter Reference

### `pixelSize` (2–12)
Grid resolution. Higher = larger pixels.
- 2–3: Subtle, editorial feel
- 4–6: Noticeable, vintage computing
- 8–12: Heavy, gaming register

**How it works:** Image is downsampled to `width / pixelSize` resolution, then upsampled with nearest-neighbor scaling.

### `colorLevels` (4–32)
Discrete color levels. Lower = fewer colors, higher = more colors.
- 4–8: Severe quantization (retro gaming)
- 16–20: Moderate quantization (editorial/artistic)
- 24–32: Subtle quantization (high-fidelity)

**How it works:** RGB values are rounded to discrete levels, creating a posterize effect.

### `ditherAmount` (0–1)
Bayer dithering intensity. Lower = smooth quantization, higher = noticeable dither pattern.
- 0: No dithering, solid color blocks
- 0.3–0.5: Subtle dither, readable detail
- 0.6–1.0: Heavy dither, textured appearance

**How it works:** Bayer 4×4 matrix is applied per-pixel to simulate intermediate colors.

### `contrast` (0.6–1.8)
Contrast multiplier (before quantization).
- <1.0: Reduce contrast, flatten image
- 1.0: No change
- >1.0: Increase contrast, punch up darks/lights

**How it works:** `newValue = (oldValue - 0.5) * contrast + 0.5`

### `saturation` (0–2+)
Color saturation multiplier.
- 0: Grayscale
- 1.0: Original saturation
- >1.0: More vibrant

**How it works:** Mixed between grayscale and original color based on value.

## Editorial Mix & Shader Selection

The Editorial Mix framework controls how aggressively images are processed:

- **Visual module 100%** — Shader intensity high; images are heavily processed to create distinct visual texture
- **Visual module 50%** — Editorial preset (default); subtle shader, preserves image recognition
- **Visual module 25%** — `subtle` or `hires` preset; nearly original images with minimal effect
- **Visual module 0%** — Original images, no shader applied

Example morning brief with shader implications:
```json
{
  "theme": "Grain",
  "visual": 80,
  "directive": "Use 'editorial' or 'nes' preset—visual should feel textured and deliberate"
}
```

Victor (Visual Curator) adjusts preset selection based on Visual module intensity and theme direction.

## Integration with Editorial Pipeline

### For Curator/Assignment Editor

```javascript
const { processImage, PRESETS } = require('./utils/shader');

async function prepareVisualAsset(imagePath, intent) {
  const imageBuffer = require('fs').readFileSync(imagePath);
  
  // Choose preset based on editorial intent
  const presets = {
    featured: 'editorial',      // Main visual
    supporting: 'subtle',       // Secondary imagery
    archive: 'c64',             // Historical piece
    concept: 'hires',           // Minimalist treatment
  };

  const processed = await processImage(
    imageBuffer,
    presets[intent] || 'editorial'
  );

  // Save to visual library with metadata
  const filename = `${Date.now()}-${intent}.png`;
  require('fs').writeFileSync(`./visuals/${filename}`, processed);
  
  return {
    path: filename,
    preset: presets[intent],
    intent,
    processed: true,
  };
}
```

### For Managing Editor

When developing narratives around processed imagery:

```javascript
// The processed image has visual characteristics that inform tone
const imageMetadata = { pixelSize: 3, colorLevels: 20, ditherAmount: 0.25 };

// Subtle shader → intimate, considered tone
// Heavy shader → bold, declarative tone
// Use shader parameters to guide narrative voice
```

## Technical Notes

- **Sharp dependency:** Uses Lovell Fuller's sharp library for image I/O. Prebuilt binaries, zero system dependencies.
- **Performance:** Processing a 2000×1500 image takes ~30–50ms with editorial preset.
- **Output format:** Always PNG. Input formats: PNG, JPG, GIF, WebP (sharp-supported).
- **Color space:** RGB. Alpha channel preserved unchanged.
- **Dithering:** Bayer 4×4 matrix applied per-pixel for maximum quality.
- **Parallel processing:** Sharp uses libvips under the hood; scales to multiple cores.

## See Also

- **alfredo-studio:** Original implementation at `/Users/blackmachete/alfredo-studio`
  - `components/shader-gallery.tsx` — Interactive gallery
  - `lib/shader-utils.ts` — Mouse-to-params mapping
  - `lib/pixel-processor.ts` — Core logic (ported here)

- **Bulletin Board Architecture:**
  - `governance/ASCII-VISUAL-DNA.md` — Visual style guide
  - `governance/ASCII-CONSTRUCTION.md` — Construction methodology
  - `agents/curator/` — Visual selection pipeline
