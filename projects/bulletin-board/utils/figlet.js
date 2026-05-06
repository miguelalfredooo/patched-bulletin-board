const figlet = require('figlet');

const FONTS = {
  masthead: 'Banner',
  opinions: 'Shadow',
  tools: 'Lean',
  theme: 'Block',
  closing: 'Small',
  default: 'Big'
};

function renderText(text, register = 'default') {
  return new Promise((resolve, reject) => {
    figlet.text(text, {
      font: FONTS[register] || FONTS.default,
      horizontalLayout: 'fitted',
      width: 36
    }, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

module.exports = { renderText, FONTS };
