/**
 * Image shader processor for Bulletin Board
 * Port of alfredo-studio/lib/pixel-processor.ts to Node.js
 *
 * Applies real-time pixel art effects:
 * - Bayer dithering
 * - Color quantization
 * - Contrast & saturation adjustment
 * - Pixelation
 *
 * Uses sharp for fast, dependency-free image processing
 */

const sharp = require('sharp');

// Bayer 4×4 dither matrix (matches alfredo-studio)
const bayer4 = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5],
].map((row) => row.map((v) => v / 16));

function clamp(v, min = 0, max = 1) {
  return Math.max(min, Math.min(max, v));
}

function quantize(v, levels) {
  return Math.round(clamp(v) * levels) / levels;
}

/**
 * Shader parameter presets (matching alfredo-studio)
 */
const PRESETS = {
  gameboy: { pixelSize: 8, colorLevels: 4, ditherAmount: 0.8, contrast: 1.2, saturation: 0.3 },
  nes: { pixelSize: 4, colorLevels: 16, ditherAmount: 0.4, contrast: 1.1, saturation: 1.2 },
  c64: { pixelSize: 6, colorLevels: 8, ditherAmount: 0.6, contrast: 1.0, saturation: 0.8 },
  hires: { pixelSize: 2, colorLevels: 32, ditherAmount: 0.3, contrast: 1.0, saturation: 1.0 },
  subtle: { pixelSize: 2, colorLevels: 24, ditherAmount: 0.2, contrast: 1.0, saturation: 1.0 },
  editorial: { pixelSize: 3, colorLevels: 20, ditherAmount: 0.25, contrast: 1.05, saturation: 0.95 },
};

/**
 * Process pixel data with shader parameters
 *
 * @param {Buffer} pixelBuffer - Raw RGBA pixel buffer
 * @param {number} width - Image width
 * @param {number} height - Image height
 * @param {Object} params - Shader parameters
 * @returns {Buffer} Processed pixel data
 */
function processPixelBuffer(pixelBuffer, width, height, params) {
  const processed = Buffer.alloc(pixelBuffer.length);
  pixelBuffer.copy(processed);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;

      let r = processed[idx] / 255;
      let g = processed[idx + 1] / 255;
      let b = processed[idx + 2] / 255;

      // Contrast
      r = clamp((r - 0.5) * params.contrast + 0.5);
      g = clamp((g - 0.5) * params.contrast + 0.5);
      b = clamp((b - 0.5) * params.contrast + 0.5);

      // Saturation
      const gray = 0.299 * r + 0.587 * g + 0.114 * b;
      r = clamp(gray + (r - gray) * params.saturation);
      g = clamp(gray + (g - gray) * params.saturation);
      b = clamp(gray + (b - gray) * params.saturation);

      // Dither (Bayer 4×4)
      const dither = bayer4[y % 4][x % 4];
      const levels = params.colorLevels;
      const offset = (dither - 0.5) * params.ditherAmount / levels;

      r = quantize(r + offset, levels);
      g = quantize(g + offset, levels);
      b = quantize(b + offset, levels);

      processed[idx] = r * 255;
      processed[idx + 1] = g * 255;
      processed[idx + 2] = b * 255;
      // Keep alpha unchanged
    }
  }

  return processed;
}

/**
 * Apply shader effect to image
 *
 * @param {Buffer|string} input - Image file buffer or path
 * @param {Object|string} params - Shader parameters or preset name
 * @returns {Promise<Buffer>} Processed image buffer (PNG)
 */
async function processImage(input, params) {
  try {
    // Resolve preset name to params
    const shaderParams = typeof params === 'string'
      ? PRESETS[params] || PRESETS.editorial
      : params;

    // Load and get metadata
    let image = sharp(input);
    const metadata = await image.metadata();

    const imgW = metadata.width;
    const imgH = metadata.height;

    // Downsample to pixel size
    const outW = Math.max(1, Math.floor(imgW / shaderParams.pixelSize));
    const outH = Math.max(1, Math.floor(imgH / shaderParams.pixelSize));

    // Get raw pixel data
    const downsampled = await sharp(input)
      .resize(outW, outH, { fit: 'fill' })
      .raw()
      .toBuffer({ resolveWithObject: true });

    const pixels = downsampled.data;
    const processed = processPixelBuffer(pixels, outW, outH, shaderParams);

    // Create image from processed buffer and upscale
    const result = await sharp(processed, {
      raw: {
        width: outW,
        height: outH,
        channels: 4,
      },
    })
      .resize(imgW, imgH, { kernel: 'nearest' })
      .png()
      .toBuffer();

    return result;
  } catch (err) {
    throw new Error(`Shader processing failed: ${err.message}`);
  }
}

/**
 * Interpolate shader parameters from mouse position
 * Same logic as alfredo-studio/lib/shader-utils.ts
 *
 * @param {number} nx - Normalized X position (0-1)
 * @param {number} ny - Normalized Y position (0-1)
 * @returns {Object} Shader parameters
 */
function paramsFromMouse(nx, ny) {
  const lerp = (a, b, t) => a + (b - a) * t;
  return {
    pixelSize: Math.round(lerp(2, 12, nx)),
    ditherAmount: lerp(0, 1, nx),
    colorLevels: Math.round(lerp(32, 4, ny)),
    contrast: lerp(0.6, 1.8, ny),
    saturation: 1.0,
  };
}

/**
 * Interpolate shader parameters from a gradient value
 * Useful for scripted/automated transitions
 *
 * @param {number} t - Progress value (0-1)
 * @param {string} direction - 'up', 'down', 'left', 'right', 'diagonal'
 * @returns {Object} Shader parameters
 */
function paramsFromGradient(t, direction = 'diagonal') {
  const clamp01 = (v) => Math.max(0, Math.min(1, v));
  const t_ = clamp01(t);

  switch (direction) {
    case 'up':
      return paramsFromMouse(0.5, t_);
    case 'down':
      return paramsFromMouse(0.5, 1 - t_);
    case 'left':
      return paramsFromMouse(t_, 0.5);
    case 'right':
      return paramsFromMouse(1 - t_, 0.5);
    case 'diagonal':
    default:
      return paramsFromMouse(t_, t_);
  }
}

module.exports = {
  processImage,
  paramsFromMouse,
  paramsFromGradient,
  PRESETS,
};
