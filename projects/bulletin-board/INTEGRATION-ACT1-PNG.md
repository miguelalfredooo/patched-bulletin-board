# Act 1 PNG Integration for Telegram Bot

Instructions for integrating PNG-rendered Act 1 visual previews into the Telegram bot delivery.

---

## Overview

Instead of sending Act 1 as plain text in code blocks, send it as a **styled PNG image** with colors and typography.

**Benefits:**
- More visual impact in Telegram
- Better control over typography
- Theme options (dark, light, cool)
- Professional presentation
- Single image instead of multiple code blocks

---

## Setup

### 1. Verify Dependencies

```bash
npm list sharp
# Should show sharp is installed
```

### 2. Test PNG Rendering

```bash
node utils/test-png-render.js
# Should generate 3 test PNG files in /tmp/
```

### 3. Test Act 1 Delivery

```bash
node utils/act1-png-delivery.js
# Should output PNG metadata ready for Telegram
```

---

## Integration Steps

### Step 1: Generate Act 1 ASCII

Compose the 11 ASCII pieces as normal, then use the delivery builder:

```javascript
const { buildAct1ASCII, prepareAct1Delivery } = require('./utils/act1-png-delivery');

// Your 11 pieces (already composed)
const pieces = [piece1, piece2, ..., piece11];

// Closing sentence for the day
const closingSentence = 'Something shifts today.';

// Build full Act 1 ASCII
const act1ASCII = buildAct1ASCII(pieces, closingSentence);

// Render to PNG
const delivery = await prepareAct1Delivery(act1ASCII, {
  theme: 'default',  // or 'midnight', 'editorial'
  fontSize: 13,
});

console.log('PNG size:', delivery.sizeBytes, 'bytes');
console.log('Base64:', delivery.base64);
```

### Step 2: Send to Telegram

Use the Telegram API to send the PNG as a photo:

```javascript
// Using the telegram message tool
await telegram.sendPhoto(chatId, delivery.buffer, {
  caption: delivery.caption,
});

// OR send base64-encoded (for some integrations)
const messagePayload = {
  chat_id: chatId,
  photo: `data:image/png;base64,${delivery.base64}`,
  caption: 'Design By Bulletin™ — Daily Preview',
};
```

### Step 3: Update Agent Instructions

In `/Users/blackmachete/.openclaw/workspace-bulletin-bot/AGENTS.md`, update the "preview" / "act 1" section:

**Old:**
```
### "preview", "act 1"
Send the ASCII visual preview (Act 1 only — no text, no links).
```

**New:**
```
### "preview", "act 1"
Send the ASCII visual preview (Act 1 only) as a PNG image:

1. Compose 11 ASCII pieces (see ASCII-VISUAL-DNA.md)
2. Build Act 1 with masthead + pieces + closing sentence
3. Render to PNG using utils/act1-png-delivery.js
4. Send as Telegram photo via telegram.sendPhoto(chatId, buffer)

Use theme='default' for dark mode. Caption: "Design By Bulletin™ — Daily Preview"
```

---

## Agent Code Example

Here's how the agent should handle the "preview" / "act 1" command:

```javascript
// In your agent's message handler

if (message.text?.toLowerCase().includes('preview') || 
    message.text?.toLowerCase().includes('act 1')) {
  
  try {
    // Read governance and compose 11 pieces
    const brief = fs.readFileSync('./BRIEF.md', 'utf8');
    const styleGuide = fs.readFileSync('./STYLE-GUIDE.md', 'utf8');
    const dnaGuide = fs.readFileSync('./governance/ASCII-VISUAL-DNA.md', 'utf8');
    
    // Compose pieces (using agents, Claude API, or manual logic)
    const pieces = await composePieces(briefContext);  // Your composition logic
    const closingSentence = await composeClosing(briefContext);
    
    // Build and render Act 1
    const { buildAct1ASCII, prepareAct1Delivery } = require('./utils/act1-png-delivery');
    
    const act1ASCII = buildAct1ASCII(pieces, closingSentence);
    const delivery = await prepareAct1Delivery(act1ASCII, {
      theme: 'default',
      fontSize: 13,
    });
    
    // Send to Telegram
    await telegram.sendPhoto(chatId, delivery.buffer, {
      caption: delivery.caption,
    });
    
  } catch (err) {
    await telegram.sendMessage(chatId, 'Could not generate preview. Try again in a moment.');
  }
}
```

---

## Theme Selection

Choose based on user preferences or time of day:

```javascript
// Dark mode (default, best for evening)
theme: 'default'      // #0a0a0a bg, warm off-white text

// Cool aesthetic (best for morning)
theme: 'midnight'     // #07080f navy bg, cool blue text

// Light mode (editorial, accessibility)
theme: 'editorial'    // #faf8f2 paper bg, ink text
```

---

## Testing with Manual Trigger

### Test locally:

```bash
node utils/act1-png-delivery.js

# Outputs PNG metadata and Base64
```

### Test with Telegram bot (after integration):

Send a message to @DesignByBulletin_bot:
```
preview
```

Or:
```
act 1
```

The bot should respond with a PNG image (Act 1 visual).

---

## Cron Job Integration

When the Act 1 cron job runs (8:00am PT):

```javascript
// In the cron job handler

async function sendAct1() {
  try {
    // Compose Act 1 (read BRIEF.md, compose pieces, etc.)
    const act1ASCII = buildAct1ASCII(pieces, closingSentence);
    
    // Render to PNG
    const delivery = await prepareAct1Delivery(act1ASCII, {
      theme: 'default',
      fontSize: 13,
    });
    
    // Send to all subscribers
    for (const subscriber of subscribers) {
      await telegram.sendPhoto(subscriber.chatId, delivery.buffer, {
        caption: delivery.caption,
      });
    }
    
    console.log('Act 1 sent to', subscribers.length, 'subscribers');
  } catch (err) {
    console.error('Act 1 delivery failed:', err.message);
  }
}
```

---

## Troubleshooting

**PNG not displaying in Telegram:**
- Check that the buffer is valid PNG (should start with `89 50 4E 47` in hex)
- Verify Telegram API token is correct
- Try sending a test image via curl first

**Text too small/large:**
- Adjust fontSize option (10-16 range is typical)
- Reduce pieces per Act 1 if density is too high
- Try different scale values (1 = normal, 2 = retina, 3 = print)

**Base64 too long:**
- PNG is typically 12-20 KB (encoded base64 ~16-28 KB)
- Telegram accepts up to 20 MB, so size is not a constraint
- If exceeding limits, reduce fontSize or split Act 1

---

## Files

- `utils/ascii-render.js` — Core PNG renderer
- `utils/act1-png-delivery.js` — Act 1 builder + PNG prep
- `utils/test-png-render.js` — Rendering test suite
- `utils/render-and-send-ascii.js` — CLI utility

---

## Next Steps

1. Update `/Users/blackmachete/.openclaw/workspace-bulletin-bot/AGENTS.md` with Act 1 PNG integration instructions
2. Deploy to production cron jobs
3. Test "preview" command with @DesignByBulletin_bot
4. Monitor for delivery issues
5. Gather user feedback on visual presentation

---

## See Also

- **PNG-RENDERING.md** — Complete PNG rendering reference
- **BULLETIN-BOT.md** — Bot configuration
- **ASCII-VISUAL-DNA.md** — ASCII composition rules
