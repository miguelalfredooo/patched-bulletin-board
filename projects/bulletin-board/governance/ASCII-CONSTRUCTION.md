# ASCII Construction

## Format C — Programmatic generation

Format C typographic pieces must be generated using the figlet
library — not hand-constructed by the agent.

The figlet.js library produces exact FIGlet letterforms at the
correct width. Agent approximations are inconsistent and incorrect.

Font selection by register:

| Use | Font | Register |
|-----|------|----------|
| Masthead | Banner | Bold, declarative |
| Opinions | Shadow | Weight with presence |
| Design & AI Tools | Lean | Technical, precise |
| Theme declaration | Block | Maximum impact |
| Closing word | Small | Intimate, Apartamento |
| Default | Big | General editorial |

The agent's job for Format C is:
1. Choose the correct font for the register
2. Choose the word or phrase — one word maximum for most pieces
3. Call renderText(word, register) from utils/figlet.js
4. Verify output fits within 45 characters wide
5. If it does not fit, try a narrower font or shorten the word

The agent never hand-draws letterforms for Format C.
