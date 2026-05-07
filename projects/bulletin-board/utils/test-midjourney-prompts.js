// test-midjourney-prompts.js
// Generate sample Midjourney prompts for different issue types

const { generatePrompts } = require('./midjourney-prompt-generator');

// Example issues to test with
const examples = [
  {
    name: 'The Ritual in Tools',
    data: {
      theme: 'The Ritual in Tools',
      sonicReference: 'Japanese city pop — sparse, meditative, precise',
      visualRegister: 'minimal, geometric, clean interface details',
      researchSignals: ['flow state', 'repetition in interaction', 'interface precision'],
      colorPalette: 'muted cool tones, soft grays, single accent color',
      editorialMix: { music: 70, visual: 85, research: 55, process: 40, theme: 75, ai_culture: 20 },
    },
  },
  {
    name: 'Grain',
    data: {
      theme: 'Grain',
      sonicReference: 'Experimental noise producer — layered, textured, patient',
      visualRegister: 'macro detail, close examination, particle-level',
      researchSignals: ['material texture', 'detail archaeology', 'close-up intimacy'],
      colorPalette: 'desaturated, warm browns and grays, high contrast',
      editorialMix: { music: 85, visual: 70, research: 60, process: 45, theme: 70, ai_culture: 15 },
    },
  },
  {
    name: 'Archive',
    data: {
      theme: 'Archive',
      sonicReference: 'Ambient music with field recordings — nostalgic, layered, temporal',
      visualRegister: 'vintage documentation, cataloging, ordered preservation',
      researchSignals: ['temporal accumulation', 'preservation', 'historical continuity'],
      colorPalette: 'faded film tones, aged paper, sepia undertones',
      editorialMix: { music: 60, visual: 65, research: 80, process: 50, theme: 85, ai_culture: 10 },
    },
  },
  {
    name: 'Surface',
    data: {
      theme: 'Surface',
      sonicReference: 'Minimal electronic — clean, precise, unadorned',
      visualRegister: 'flat lay, material close-up, tactile focus',
      researchSignals: ['material quality', 'patina', 'touch'],
      colorPalette: 'monochromatic, texture-driven, subtle tonal shifts',
      editorialMix: { music: 50, visual: 90, research: 50, process: 40, theme: 80, ai_culture: 25 },
    },
  },
];

console.log('DESIGN BY BULLETIN — MIDJOURNEY PROMPT GENERATION\n');
console.log('================================================\n');

examples.forEach((example) => {
  console.log(`\n📘 ISSUE: ${example.name}`);
  console.log('─'.repeat(60));

  const result = generatePrompts(example.data);

  console.log('\n🎵 SONIC REFERENCE');
  console.log(`   ${result.sonicReference}`);

  console.log('\n📸 PROMPT A — Literal Integration');
  console.log(`\n${result.promptA}`);

  console.log('\n\n📸 PROMPT B — Abstract/Metaphorical');
  console.log(`\n${result.promptB}`);

  console.log('\n\n💡 CREATIVE DIRECTOR GUIDANCE');
  console.log(`   Register: ${result.guidance.register}`);
  console.log(`   Sonic Mood: ${result.guidance.sonicMood}`);
  console.log(`   Tempo Guidance: ${result.guidance.tempoGuidance}`);
  console.log(`   Visual Weight: ${result.guidance.visualWeight}`);
  console.log(`   Theme Integration: ${result.guidance.themeIntegration}`);
  console.log(`\n   ${result.guidance.creativeDirectorNote}`);

  console.log('\n' + '═'.repeat(60));
});

console.log('\n\n✅ Prompts ready for Midjourney.');
console.log('Copy either Prompt A (literal) or Prompt B (abstract) into Midjourney.');
console.log('Use Creative Director Guidance to brief the generation process.\n');
