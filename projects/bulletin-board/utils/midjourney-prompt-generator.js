// midjourney-prompt-generator.js — Design by Bulletin
// Generates creative Midjourney prompts for issue album covers.
// Creative Director + Editor collaborate to create prompts that reflect
// the issue's theme, sonic mood, visual language, and research signals.

// Prompt generators for different emotional registers
const REGISTERS = {
  'intimate': {
    adjectives: ['whispered', 'tactile', 'intimate', 'tender', 'quiet', 'close-up', 'personal'],
    verbs: ['holds', 'cradles', 'rests', 'nestles', 'whispers'],
    materials: ['worn fabric', 'aged paper', 'weathered wood', 'soft clay', 'patina'],
    contexts: ['studio corner', 'shelf', 'palm', 'light through window', 'dust particles'],
  },
  'declarative': {
    adjectives: ['bold', 'direct', 'sharp', 'defined', 'clear', 'stark', 'geometric'],
    verbs: ['punctures', 'cuts', 'defines', 'frames', 'states'],
    materials: ['polished steel', 'lacquered wood', 'solid color', 'concrete', 'glass'],
    contexts: ['architectural space', 'grid', 'minimal stage', 'negative space', 'edge'],
  },
  'textured': {
    adjectives: ['grainy', 'layered', 'weathered', 'dense', 'complex', 'woven', 'fractured'],
    verbs: ['accumulates', 'tangles', 'builds', 'spirals', 'overlaps'],
    materials: ['rust', 'bark', 'sand', 'fiber', 'lichen', 'erosion'],
    contexts: ['close-up texture', 'natural surface', 'macro', 'cross-section', 'detail'],
  },
  'playful': {
    adjectives: ['whimsical', 'curious', 'unexpected', 'colorful', 'bouncy', 'joyful'],
    verbs: ['dances', 'spins', 'bounces', 'glimmers', 'delights'],
    materials: ['candy', 'soap bubble', 'iridescent', 'holographic', 'neon'],
    contexts: ['light play', 'reflection', 'shimmer', 'movement', 'surprise'],
  },
  'archival': {
    adjectives: ['documented', 'vintage', 'historical', 'preserved', 'faded', 'indexed'],
    verbs: ['records', 'archives', 'catalogs', 'stamps', 'marks'],
    materials: ['aged paper', 'ink', 'wax seal', 'film grain', 'library binding'],
    contexts: ['archive', 'museum', 'catalog', 'card file', 'time capsule'],
  },
};

const SONIC_TO_VISUAL = {
  'ambient': {
    tempo: 'slow, breathing pace',
    production: 'minimal, space-focused',
    visual: 'negative space, fog, air, light diffusion',
  },
  'minimal': {
    tempo: 'deliberate, pause-rich',
    production: 'clean, sparse',
    visual: 'geometric, reduced palette, silence in form',
  },
  'experimental': {
    tempo: 'unpredictable, layered',
    production: 'textured, processed',
    visual: 'abstract, fragmented, density shifts',
  },
  'fast-paced': {
    tempo: 'energetic, forward-moving',
    production: 'punchy, bright',
    visual: 'motion blur, rhythm, sequential, kinetic',
  },
  'intricate': {
    tempo: 'detailed, requires attention',
    production: 'rich, layered',
    visual: 'complex patterns, detail density, weaving',
  },
  'nostalgic': {
    tempo: 'wistful, memory-like',
    production: 'warm, analog',
    visual: 'vintage color, film grain, faded registers',
  },
};

const THEME_EXTENSIONS = {
  'ritual': 'repetition, ceremony, deliberate sequence, marking time',
  'grain': 'texture, detail, particle, micro, close examination',
  'surface': 'skin, patina, gloss, materiality, what you touch',
  'archive': 'cataloging, preservation, time, layers of past',
  'mark': 'signature, trace, evidence, hand, intention',
  'boundary': 'edge, threshold, between states, liminal, transition',
  'accumulation': 'gathering, layering, density, overflow, collection',
  'decay': 'deterioration, transformation, entropy, beauty in loss',
  'echo': 'repetition with variation, resonance, temporal stretch',
  'threshold': 'passage, beginning, hesitation, potential',
};

/**
 * Generate Midjourney album cover prompts.
 * Takes issue metadata and generates 2 complementary prompts.
 *
 * issueData = {
 *   theme: 'The Ritual in Tools',
 *   sonicReference: 'Japanese city pop — sparse, meditative, precise',
 *   visualRegister: 'minimal, geometric, clean',
 *   researchSignals: ['flow state', 'repetition', 'interface precision'],
 *   colorPalette: 'muted, cool tones',
 *   editorialMix: { music: 70, visual: 85, research: 55, ... }
 * }
 */
function generatePrompts(issueData) {
  const {
    theme,
    sonicReference,
    visualRegister,
    researchSignals = [],
    colorPalette,
    editorialMix = {},
  } = issueData;

  // Determine emotional register based on mix
  const register = determineRegister(editorialMix, sonicReference);

  // Extract theme extension keywords
  const themeKeywords = extractThemeKeywords(theme);

  // Map sonic reference to visual language
  const sonicVisuals = mapSonicToVisual(sonicReference);

  // Generate prompt A: Literal integration
  const promptA = generateLiteralPrompt({
    theme,
    register,
    themeKeywords,
    sonicVisuals,
    visualRegister,
    colorPalette,
    researchSignals,
  });

  // Generate prompt B: Abstract/metaphorical integration
  const promptB = generateAbstractPrompt({
    theme,
    register,
    themeKeywords,
    sonicVisuals,
    editorialMix,
    colorPalette,
  });

  return {
    issueTheme: theme,
    sonicReference,
    promptA,
    promptB,
    guidance: generateGuidance(register, sonicVisuals, editorialMix),
  };
}

function determineRegister(mix, sonicRef) {
  // Use editorial mix to determine emotional register
  const visual = mix.visual || 50;
  const music = mix.music || 50;
  const theme = mix.theme || 50;

  if (music > 80) return 'textured';
  if (visual > 80) return 'declarative';
  if (theme > 80) return 'intimate';
  if (sonicRef.includes('minimal')) return 'declarative';
  if (sonicRef.includes('experimental')) return 'textured';
  if (sonicRef.includes('ambient')) return 'intimate';

  return 'intimate'; // default
}

function extractThemeKeywords(theme) {
  const normalized = theme.toLowerCase();
  const keywords = [];

  for (const [key, extension] of Object.entries(THEME_EXTENSIONS)) {
    if (normalized.includes(key)) {
      keywords.push({ key, extension: extension.split(', ') });
    }
  }

  return keywords.length > 0
    ? keywords
    : [{ key: 'undefined', extension: ['specific', 'intentional'] }];
}

function mapSonicToVisual(sonicRef) {
  const normalized = sonicRef.toLowerCase();

  for (const [key, mapping] of Object.entries(SONIC_TO_VISUAL)) {
    if (normalized.includes(key)) {
      return mapping;
    }
  }

  // Default: analyze keywords
  if (normalized.includes('fast') || normalized.includes('energetic')) return SONIC_TO_VISUAL['fast-paced'];
  if (normalized.includes('slow') || normalized.includes('meditative')) return SONIC_TO_VISUAL['ambient'];
  if (normalized.includes('texture') || normalized.includes('layer')) return SONIC_TO_VISUAL['intricate'];

  return SONIC_TO_VISUAL['minimal'];
}

function generateLiteralPrompt(params) {
  const {
    theme,
    register,
    themeKeywords,
    sonicVisuals,
    visualRegister,
    colorPalette,
    researchSignals,
  } = params;

  const registerData = REGISTERS[register];
  const adjective = randomPick(registerData.adjectives);
  const verb = randomPick(registerData.verbs);
  const material = randomPick(registerData.materials);
  const context = randomPick(registerData.contexts);

  const themeExt = themeKeywords[0]?.extension[0] || 'intentional';
  const signal = researchSignals[0] || 'attention to detail';

  const parts = [
    `a ${adjective} album cover`,
    `that ${verb} toward "${theme}"`,
    `rendered as ${material}`,
    `sitting in a ${context}`,
    `with ${sonicVisuals.visual}`,
    `mood: ${sonicVisuals.tempo}`,
    `color palette: ${colorPalette}`,
    `thematic element: ${themeExt}`,
    `conceptual anchor: ${signal}`,
    'photography aesthetic, refined, editorial quality',
    '--ar 9:40 --q 2',  // Matches Telegram image display (4.54:1 tall vertical)
  ];

  return parts.join(', ');
}

function generateAbstractPrompt(params) {
  const {
    theme,
    register,
    themeKeywords,
    sonicVisuals,
    editorialMix,
    colorPalette,
  } = params;

  const registerData = REGISTERS[register];
  const verb = randomPick(registerData.verbs);
  const material = randomPick(registerData.materials);

  const themeExt = themeKeywords[0]?.extension || ['abstract', 'temporal'];
  const visualWeight = editorialMix.visual > 80 ? 'high contrast, geometric' : 'soft focus, atmospheric';

  const metaphor = generateMetaphor(themeKeywords[0]?.key);

  const parts = [
    `an abstract visual metaphor for ${metaphor}`,
    `${verb}ing through ${themeExt.join(' and ')}`,
    `surface material: ${material}`,
    `visual style: ${visualWeight}`,
    `sonic translation: ${sonicVisuals.production}`,
    `temporal quality: ${sonicVisuals.tempo}`,
    `dominant colors: ${colorPalette}`,
    'macro photography, studio lighting, fine art register',
    '--ar 9:40 --q 2 --stylize 750',  // Matches Telegram image display (4.54:1 tall vertical)
  ];

  return parts.join(', ');
}

function generateMetaphor(themeKey) {
  const metaphors = {
    ritual: 'the space between repetition and intention',
    grain: 'the architecture beneath surface',
    surface: 'what happens when light meets material',
    archive: 'the weight of accumulated time',
    mark: 'evidence of presence',
    boundary: 'the threshold between states',
    accumulation: 'density as language',
    decay: 'beauty in transformation',
    echo: 'sound made visible',
    threshold: 'the moment before arrival',
  };

  return metaphors[themeKey] || 'the invisible made tangible';
}

function generateGuidance(register, sonicVisuals, mix) {
  return {
    register,
    sonicMood: sonicVisuals.production,
    tempoGuidance: sonicVisuals.tempo,
    visualWeight: mix.visual > 70 ? 'Bold, primary focus' : 'Subtle, supporting role',
    themeIntegration: mix.theme > 70 ? 'Explicit thematic reference' : 'Implied, felt rather than stated',
    creativeDirectorNote: `The album cover should feel like it belongs to the "${register}" register. If the visual mix is high (${mix.visual}%), make composition a statement. If music is high (${mix.music}%), let the sonic qualities determine texture and tone.`,
  };
}

function randomPick(array) {
  return array[Math.floor(Math.random() * array.length)];
}

module.exports = {
  generatePrompts,
  REGISTERS,
  SONIC_TO_VISUAL,
  THEME_EXTENSIONS,
};
