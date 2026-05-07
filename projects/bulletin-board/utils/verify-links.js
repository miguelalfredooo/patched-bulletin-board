// verify-links.js — Design by Bulletin
// Live link verification before section delivery.
// Checks that a URL returns a non-error HTTP status.
// On failure, returns the source's known-good homepage fallback.

const https = require('https');
const http = require('http');

// Domains that block all automated HTTP checks (HEAD + GET).
// Links from these domains are always sent as-is without verification.
const BYPASS_DOMAINS = [
  'eyeondesign.aiga.org',
  'aiga.org',
];

// Trusted source registry — base URLs used as fallbacks when a specific
// article link fails. Add new sources here as the digest expands.
const SOURCE_FALLBACKS = {
  'artsy.net':                  'https://www.artsy.net',
  'frieze.com':                 'https://www.frieze.com',
  'booooooom.com':              'https://www.booooooom.com',
  'theartnewspaper.com':        'https://www.theartnewspaper.com',
  'newyorker.com':              'https://www.newyorker.com',
  'monocle.com':                'https://monocle.com',
  'apartamentomagazine.com':    'https://www.apartamentomagazine.com',
  'bjp-online.com':             'https://www.bjp-online.com',
  'magnumphotos.com':           'https://www.magnumphotos.com',
  'lensculture.com':            'https://www.lensculture.com',
  'eyeondesign.aiga.org':       'https://eyeondesign.aiga.org',
  'jstor.org':                  'https://daily.jstor.org',
  'densediscovery.com':         'https://www.densediscovery.com',
  'figma.com':                  'https://www.figma.com',
  'notion.so':                  'https://www.notion.so',
  'underconsideration.com':     'https://www.underconsideration.com/brandnew',
  'eyemagazine.com':            'https://www.eyemagazine.com',
  'itsnicethat.com':            'https://www.itsnicethat.com',
  'tate.org.uk':                'https://www.tate.org.uk',
  'moma.org':                   'https://www.moma.org',
  'guggenheim.org':             'https://www.guggenheim.org',
  'nngroup.com':                'https://www.nngroup.com',
  'lars-mueller-publishers.com':'https://www.lars-mueller-publishers.com',
  'albersfoundation.org':       'https://albersfoundation.org',
  'juddfoundation.org':         'https://juddfoundation.org',
  'rodencrater.com':            'https://rodencrater.com',
  'hilmaafklint.se':            'https://www.hilmaafklint.se',
  'rothkochapel.org':           'https://rothkochapel.org',
  'olafureliasson.net':         'https://olafureliasson.net',
  'tarynsimon.com':             'https://tarynsimon.com',
  'between-bridges.net':        'https://between-bridges.net',
  'aaro.mil':                   'https://www.aaro.mil',
  'bandcamp.com':               'https://bandcamp.com',
  'discogs.com':                'https://www.discogs.com',
  'open.spotify.com':           'https://open.spotify.com',
  'music.youtube.com':          'https://music.youtube.com',
  'youtube.com':                'https://www.youtube.com',
};

/**
 * Check if a URL resolves to a non-error HTTP status.
 * Tries HEAD first (fast), falls back to GET if HEAD is blocked (403/405/0).
 * Follows up to 3 redirects. Timeout: 6 seconds.
 * Returns { ok: boolean, status: number, finalUrl: string }
 */
function checkUrl(url, redirectsLeft = 3, method = 'HEAD') {
  return new Promise((resolve) => {
    const lib = url.startsWith('https') ? https : http;
    const req = lib.request(url, { method, timeout: 6000 }, (res) => {
      const status = res.statusCode;
      // Drain body to avoid socket hang
      res.resume();
      if ([301, 302, 303, 307, 308].includes(status) && res.headers.location && redirectsLeft > 0) {
        checkUrl(res.headers.location, redirectsLeft - 1, method).then(resolve);
      } else if ((status === 403 || status === 405) && method === 'HEAD') {
        // Site blocks HEAD — retry with GET
        checkUrl(url, redirectsLeft, 'GET').then(resolve);
      } else {
        resolve({ ok: status >= 200 && status < 400, status, finalUrl: url });
      }
    });
    req.on('error', (err) => {
      if (method === 'HEAD') {
        // Network error on HEAD — retry with GET
        checkUrl(url, redirectsLeft, 'GET').then(resolve);
      } else {
        resolve({ ok: false, status: 0, finalUrl: url });
      }
    });
    req.on('timeout', () => { req.destroy(); resolve({ ok: false, status: 0, finalUrl: url }); });
    req.end();
  });
}

/**
 * Get the fallback homepage for a given URL's domain.
 * Returns null if no fallback is registered.
 */
function getFallback(url) {
  try {
    const hostname = new URL(url).hostname.replace(/^www\./, '');
    for (const [domain, fallback] of Object.entries(SOURCE_FALLBACKS)) {
      if (hostname === domain || hostname.endsWith('.' + domain)) {
        return fallback;
      }
    }
  } catch (_) {}
  return null;
}

/**
 * Verify a link before delivery.
 * Returns the original URL if it resolves, the fallback homepage if not,
 * or the original URL if no fallback is registered (fail open).
 *
 * Usage:
 *   const { verifyLink } = require('./verify-links');
 *   const url = await verifyLink('https://www.artsy.net/article/some-piece');
 */
async function verifyLink(url) {
  // Skip verification for domains that block automated checks
  try {
    const hostname = new URL(url).hostname.replace(/^www\./, '');
    if (BYPASS_DOMAINS.some(d => hostname === d || hostname.endsWith('.' + d))) {
      return url;
    }
  } catch (_) {}

  const result = await checkUrl(url);
  if (result.ok) return url;

  const fallback = getFallback(url);
  if (fallback) {
    console.warn(`[verify-links] ${url} returned ${result.status} — using fallback: ${fallback}`);
    return fallback;
  }

  console.warn(`[verify-links] ${url} returned ${result.status} — no fallback registered, using original`);
  return url;
}

module.exports = { verifyLink, checkUrl, getFallback, SOURCE_FALLBACKS };
