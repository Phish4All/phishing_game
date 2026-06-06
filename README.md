# PhishGuard — Quiz Anti-Phishing

Jeu/quiz de sensibilisation au phishing, hébergé sur GitHub Pages.  
Disponible en **français**, **anglais** et **espagnol**.

## Fonctionnalités

- 10 questions par partie (mélangées à chaque jeu)
- 2 formats : **QCM** et **emails simulés** à analyser
- Explication détaillée après chaque réponse avec les signaux d'alerte
- Score final avec niveau, conseils pratiques et anneau animé
- Détection automatique de la langue du navigateur (surclassable via `?lang=`)
- Responsive mobile

## Structure

```
phishing_game/
├── index.html        # SPA — 3 écrans : accueil / quiz / résultats
├── css/style.css     # Thème cybersécurité sombre, responsive
├── js/
│   ├── app.js        # Logique du jeu, i18n, mélange aléatoire, score
│   └── locales.js    # Traductions + questions (FR / EN / ES)
└── .nojekyll         # Désactive Jekyll sur GitHub Pages
```

## Déploiement sur GitHub Pages

1. Pushez le repo sur GitHub
2. Dans **Settings → Pages**, sélectionnez la branche `main` et le dossier racine `/`
3. Le jeu est accessible à `https://<votre-user>.github.io/<nom-du-repo>/`

## Paramètre de langue dans l'URL

Ajoutez `?lang=` à l'URL pour forcer une langue, quelle que soit celle du navigateur :

```
https://example.github.io/phishing-game/?lang=fr
https://example.github.io/phishing-game/?lang=en
https://example.github.io/phishing-game/?lang=es
```

Valeurs acceptées : `fr`, `en`, `es`. Tout autre valeur est ignorée et la langue du navigateur est utilisée.

## Développement local

Ouvrez simplement `index.html` dans un navigateur — aucun serveur ni dépendance nécessaire.

## Ajouter des questions

Éditez `js/locales.js`. Chaque question suit l'un de ces deux formats :

**QCM**
```js
{
  id: 11, type: 'qcm',
  question: "Votre question ?",
  options: ["Option A", "Option B", "Option C", "Option D"],
  correct: 0,           // index de la bonne réponse (0-3)
  explanation: "Explication affichée après la réponse.",
  flags: [],
}
```

**Email simulé**
```js
{
  id: 12, type: 'email', is_phishing: true,
  email: {
    from_name: "Nom affiché",
    from_address: "fake@domaine-suspect.com",
    to: "victime@email.com",
    subject: "Objet de l'email",
    body: "Corps du message\navec sauts de ligne.",
    cta_text: "Texte du bouton",
    cta_url: "http://lien-suspect.com/page",
  },
  explanation: "Pourquoi c'est du phishing.",
  flags: [
    { type: 'red',   text: "Signal d'alerte 1" },
    { type: 'green', text: "Bon signe (pour un email légitime)" },
  ],
}
```

## Langues

Les traductions sont dans l'objet `LOCALES` de `js/locales.js`, une clé par langue (`fr`, `en`, `es`).  
Pour ajouter une langue, créez une nouvelle clé avec les mêmes champs `ui` et `questions`, puis ajoutez un bouton dans le `<div class="lang-bar">` de `index.html`.
