const figlet = require('figlet');

// Font registry — editorial decisions, not arbitrary choices.
// tools: changed from Lean to Small (2026-05) — Lean produced staircase
// indentation; Small has uniform vertical edges for clean Telegram rendering.
// All renderText calls must use leftPad=2 to normalize row alignment.
const FONTS = {
  masthead: 'Banner',
  opinions: 'Shadow',
  tools: 'Small',
  theme: 'Block',
  closing: 'Small',
  default: 'Big'
};

function renderText(text, register = 'default', leftPad = 0) {
  return new Promise((resolve, reject) => {
    figlet.text(text, {
      font: FONTS[register] || FONTS.default,
      horizontalLayout: 'fitted',
      width: 42
    }, (err, data) => {
      if (err) reject(err);
      else {
        if (leftPad > 0) {
          const lines = data.split('\n');
          // Find minimum leading spaces across non-empty lines
          const minIndent = lines
            .filter(l => l.trim().length > 0)
            .reduce((min, l) => {
              const spaces = l.match(/^(\s*)/)[1].length;
              return Math.min(min, spaces);
            }, Infinity);
          const pad = ' '.repeat(leftPad);
          data = lines
            .map(line => line.trim().length > 0 ? pad + line.slice(minIndent) : '')
            .join('\n');
        }
        resolve(data);
      }
    });
  });
}

module.exports = { renderText, FONTS };
