# The Phishing Game

Phishing awareness game/quiz, brought to you by [Phish4All](https://www.phish4all.com), hosted on GitHub Pages.  
Available in **French**, **English** and **Spanish**.

🔗 **Play online**: https://phish4all.github.io/phishing_game/

## Features

- 10 questions per game (shuffled every time)
- 2 formats: **multiple choice** and **simulated emails** to analyze
- Detailed explanation after each answer with the red flags to spot
- Final score with level, practical tips and animated ring
- Automatic browser language detection (overridable via `?lang=`)
- Mobile responsive

## Structure

```
phishing_game/
├── index.html        # SPA — 3 screens: home / quiz / results
├── css/style.css     # Dark cybersecurity theme, responsive
├── js/
│   ├── app.js        # Game logic, i18n, random shuffling, scoring
│   └── locales.js    # Translations + questions (FR / EN / ES)
└── .nojekyll         # Disables Jekyll on GitHub Pages
```

## Deploying to GitHub Pages

1. Push the repo to GitHub
2. In **Settings → Pages**, select the `main` branch and the root folder `/`
3. The game is available at `https://<your-user>.github.io/<repo-name>/`

## Language URL parameter

Add `?lang=` to the URL to force a language regardless of the browser's:

```
https://example.github.io/phishing-game/?lang=fr
https://example.github.io/phishing-game/?lang=en
https://example.github.io/phishing-game/?lang=es
```

Accepted values: `fr`, `en`, `es`. Any other value is ignored and the browser's language is used.

## Embedded mode (hide the language selector and the footer)

Add `?embed=1` to the URL to hide the language selector bar and the footer (useful when embedding the game in an iframe or a third-party page):

```
https://phish4all.github.io/phishing_game/?embed=1
```

Combinable with `?lang=`: `?lang=en&embed=1`.

## Local development

Just open `index.html` in a browser — no server or dependencies required.

## Adding questions

Edit `js/locales.js`. Each question follows one of these two formats:

**Multiple choice**
```js
{
  id: 11, type: 'qcm',
  question: "Your question?",
  options: ["Option A", "Option B", "Option C", "Option D"],
  correct: 0,           // index of the correct answer (0-3)
  explanation: "Explanation shown after the answer.",
  flags: [],
}
```

**Simulated email**
```js
{
  id: 12, type: 'email', is_phishing: true,
  email: {
    from_name: "Display name",
    from_address: "fake@suspicious-domain.com",
    to: "victim@email.com",
    subject: "Email subject",
    body: "Message body\nwith line breaks.",
    cta_text: "Button text",
    cta_url: "http://suspicious-link.com/page",
  },
  explanation: "Why this is phishing.",
  flags: [
    { type: 'red',   text: "Red flag 1" },
    { type: 'green', text: "Good sign (for a legitimate email)" },
  ],
}
```

## Languages

Translations live in the `LOCALES` object in `js/locales.js`, one key per language (`fr`, `en`, `es`).  
To add a language, create a new key with the same `ui` and `questions` fields, then add a button to the `<div class="lang-bar">` in `index.html`.
