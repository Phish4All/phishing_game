'use strict';

const SEC_TX = {
  fr: {
    q1: 'Utilisez-vous un mot de passe fort ?',
    q1_opts: ['Oui — unique et complexe', 'Non — mot simple', 'Je réutilise le même mot de passe'],
    q2: 'Utilisez-vous le même mot de passe pour plusieurs plateformes ?',
    q2_opts: ['Non, jamais', 'Oui, parfois', 'Oui, souvent'],
    title_protected: 'Bonne protection',
    title_vulnerable: 'Attention — améliorez votre sécurité',
    tips: [
      'Utilisez un gestionnaire de mots de passe pour créer et stocker des mots de passe uniques.',
      'Activez la double authentification (2FA) quand c\'est possible.',
      'Ne réutilisez jamais un mot de passe important sur plusieurs services.',
      'Préférez des phrases de passe longues et faciles à retenir plutôt que des suites de caractères simples.'
    ],
    submit: 'Voir mes conseils'
  },
  en: {
    q1: 'Do you use a strong password?',
    q1_opts: ['Yes — unique & complex', 'No — simple password', 'I reuse the same password'],
    q2: 'Do you use the same password across multiple platforms?',
    q2_opts: ['No, never', 'Yes, sometimes', 'Yes, often'],
    title_protected: 'Well protected',
    title_vulnerable: 'Warning — improve your security',
    tips: [
      'Use a password manager to create and store unique passwords.',
      'Enable two-factor authentication (2FA) wherever possible.',
      'Never reuse an important password across services.',
      'Prefer long passphrases that are easy to remember.'
    ],
    submit: 'See my tips'
  },
  es: {
    q1: '¿Usa una contraseña fuerte?',
    q1_opts: ['Sí — única y compleja', 'No — contraseña simple', 'Reutilizo la misma contraseña'],
    q2: '¿Usa la misma contraseña en varias plataformas?',
    q2_opts: ['No, nunca', 'Sí, a veces', 'Sí, a menudo'],
    title_protected: 'Bien protegido',
    title_vulnerable: 'Atención — mejore su seguridad',
    tips: [
      'Use un gestor de contraseñas para crear y almacenar contraseñas únicas.',
      'Habilite la autenticación de dos factores (2FA) siempre que sea posible.',
      'Nunca reutilice una contraseña importante en varios servicios.',
      'Prefiera frases de contraseña largas y fáciles de recordar.'
    ],
    submit: 'Ver mis consejos'
  }
};

function getLang() {
  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get('lang');
  const browser = (navigator.language || '').split('-')[0];
  const supported = ['fr','en','es'];
  if (supported.includes(urlLang)) return urlLang;
  if (supported.includes(browser)) return browser;
  return 'fr';
}

function render() {
  const lang = getLang();
  const L = SEC_TX[lang] || SEC_TX.fr;

  const container = document.getElementById('sec-questions');
  container.innerHTML = `
    <div class="question-card">
      <p class="question-text">${L.q1}</p>
      <div class="options-list">
        ${L.q1_opts.map((o,i)=>`<label class="option-row"><input type="radio" name="q1" value="${i}"> ${o}</label>`).join('')}
      </div>
    </div>
    <div class="question-card" style="margin-top:12px;">
      <p class="question-text">${L.q2}</p>
      <div class="options-list">
        ${L.q2_opts.map((o,i)=>`<label class="option-row"><input type="radio" name="q2" value="${i}"> ${o}</label>`).join('')}
      </div>
    </div>
    <div id="sec-result" style="margin-top:18px;"></div>
  `;

  document.getElementById('btn-submit').textContent = L.submit;
}

function evaluate() {
  const lang = getLang();
  const L = SEC_TX[lang] || SEC_TX.fr;
  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');
  const out = document.getElementById('sec-result');
  if (!q1 || !q2) {
    out.innerHTML = '<p class="grade-desc">Veuillez répondre aux deux questions.</p>';
    return;
  }

  const a1 = Number(q1.value);
  const a2 = Number(q2.value);

  // scoring: best when a1==0 (strong) and a2==0 (not reused)
  const score = (a1 === 0 ? 2 : (a1 === 1 ? 0 : 1)) + (a2 === 0 ? 2 : (a2 === 1 ? 1 : 0));

  let title, desc;
  if (score >= 4) { title = L.title_protected; desc = '✔️'; }
  else { title = L.title_vulnerable; desc = '⚠️'; }

  out.innerHTML = `
    <div class="result-card">
      <h3>${title} ${desc}</h3>
      <p class="grade-desc">${lang==='fr' ? 'Basé sur vos réponses, voici quelques conseils :' : 'Based on your answers, here are some tips:'}</p>
      <ul>${L.tips.map(t=>`<li>${t}</li>`).join('')}</ul>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  render();
  document.getElementById('btn-submit').addEventListener('click', evaluate);
});
