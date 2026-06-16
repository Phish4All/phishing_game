'use strict';

const state = { lang: 'fr' };

const SEC_TX = {
  fr: {
    questions: [
      {
        key: 'q1',
        text: 'Utilisez-vous un mot de passe fort et unique pour chaque compte ?',
        opts: ['Oui — unique et complexe pour chaque compte', 'Non — mot de passe simple', 'Je réutilise le même mot de passe partout']
      },
      {
        key: 'q2',
        text: 'Utilisez-vous un gestionnaire de mots de passe ?',
        opts: ['Oui, toujours', 'Parfois', 'Non, jamais']
      },
      {
        key: 'q3',
        text: 'Avez-vous gelé votre crédit auprès des agences de crédit ?',
        opts: ['Oui, mon crédit est gelé', 'Non, mais j\'y pense', 'Non, je ne sais pas comment faire']
      },
      {
        key: 'q4',
        text: 'Avez-vous déjà été victime de fraude ou d\'usurpation d\'identité ?',
        opts: ['Non, jamais', 'Oui, une fois', 'Oui, plusieurs fois']
      }
    ],
    label_risk: 'À risque',
    label_safe: 'Bien protégé',
    levels: ['À risque', 'Peu protégé', 'Assez protégé', 'Bien protégé'],
    intro: 'Basé sur vos réponses, voici quelques conseils :',
    unanswered: 'Veuillez répondre à toutes les questions.',
    tips: [
      'Utilisez un gestionnaire de mots de passe (Bitwarden, 1Password…) pour créer et stocker des mots de passe uniques.',
      'Activez la double authentification (2FA) sur tous vos comptes importants.',
      'Gelez votre crédit auprès des agences (Equifax, TransUnion, Experian) pour bloquer toute demande frauduleuse.',
      'Surveillez régulièrement vos relevés bancaires et vos rapports de crédit.',
      'Si vous avez déjà été victime de fraude, sachez que les fraudeurs conservent et revendent les données de leurs victimes à d\'autres criminels — vous restez une cible privilégiée. Redoublez de vigilance et surveillez de près vos comptes et votre crédit.'
    ],
    submit: 'Voir mes conseils'
  },
  en: {
    questions: [
      {
        key: 'q1',
        text: 'Do you use a strong, unique password for each account?',
        opts: ['Yes — unique & complex for each account', 'No — simple password', 'I reuse the same password everywhere']
      },
      {
        key: 'q2',
        text: 'Do you use a password manager?',
        opts: ['Yes, always', 'Sometimes', 'No, never']
      },
      {
        key: 'q3',
        text: 'Have you frozen your credit with the credit bureaus?',
        opts: ['Yes, my credit is frozen', 'No, but I\'m considering it', 'No, I don\'t know how']
      },
      {
        key: 'q4',
        text: 'Have you ever been a victim of fraud or identity theft?',
        opts: ['No, never', 'Yes, once', 'Yes, multiple times']
      }
    ],
    label_risk: 'At risk',
    label_safe: 'Well protected',
    levels: ['At risk', 'Low protection', 'Fairly protected', 'Well protected'],
    intro: 'Based on your answers, here are some tips:',
    unanswered: 'Please answer all questions.',
    tips: [
      'Use a password manager (Bitwarden, 1Password…) to create and store unique passwords.',
      'Enable two-factor authentication (2FA) on all your important accounts.',
      'Freeze your credit with the major bureaus (Equifax, TransUnion, Experian) to block fraudulent applications.',
      'Regularly monitor your bank statements and credit reports.',
      'If you have ever been a victim of fraud, know that fraudsters keep and sell their victims\' data to other criminals — you remain a prime target. Stay extra vigilant and closely monitor your accounts and credit.'
    ],
    submit: 'See my tips'
  },
  es: {
    questions: [
      {
        key: 'q1',
        text: '¿Usa una contraseña fuerte y única para cada cuenta?',
        opts: ['Sí — única y compleja para cada cuenta', 'No — contraseña simple', 'Reutilizo la misma contraseña en todas partes']
      },
      {
        key: 'q2',
        text: '¿Usa un gestor de contraseñas?',
        opts: ['Sí, siempre', 'A veces', 'No, nunca']
      },
      {
        key: 'q3',
        text: '¿Ha congelado su crédito en las agencias de crédito?',
        opts: ['Sí, mi crédito está congelado', 'No, pero lo estoy considerando', 'No, no sé cómo hacerlo']
      },
      {
        key: 'q4',
        text: '¿Ha sido víctima de fraude o robo de identidad alguna vez?',
        opts: ['No, nunca', 'Sí, una vez', 'Sí, varias veces']
      }
    ],
    label_risk: 'En riesgo',
    label_safe: 'Bien protegido',
    levels: ['En riesgo', 'Poca protección', 'Bastante protegido', 'Bien protegido'],
    intro: 'Basado en sus respuestas, aquí algunos consejos:',
    unanswered: 'Por favor responda todas las preguntas.',
    tips: [
      'Use un gestor de contraseñas (Bitwarden, 1Password…) para crear y almacenar contraseñas únicas.',
      'Habilite la autenticación de dos factores (2FA) en todas sus cuentas importantes.',
      'Congele su crédito en las principales agencias (Equifax, TransUnion, Experian) para bloquear solicitudes fraudulentas.',
      'Monitoree regularmente sus extractos bancarios y reportes de crédito.',
      'Si ya fue víctima de fraude, sepa que los estafadores conservan y venden los datos de sus víctimas a otros criminales — usted sigue siendo un blanco preferido. Extreme la vigilancia y monitoree de cerca sus cuentas y su crédito.'
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

function t(key) {
  const val = (typeof LOCALES !== 'undefined' && LOCALES[state.lang] && LOCALES[state.lang].ui && LOCALES[state.lang].ui[key]);
  return val !== undefined ? val : key;
}

function render() {
  state.lang = getLang();
  const lang = state.lang;
  const L = SEC_TX[lang] || SEC_TX.fr;

  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));

  const linkHome = document.getElementById('link-home');
  if (linkHome) linkHome.href = `index.html?lang=${lang}`;

  const elBrought = document.getElementById('footer-brought');
  if (elBrought) elBrought.textContent = t('brought_by');
  const elTitle = document.getElementById('footer-title');
  if (elTitle) elTitle.textContent = t('game_title');

  const container = document.getElementById('sec-questions');
  container.innerHTML = L.questions.map((q, i) => `
    <div class="question-card"${i > 0 ? ' style="margin-top:12px;"' : ''}>
      <p class="question-text">${q.text}</p>
      <div class="options-list">
        ${q.opts.map((o, j) => `<label class="option-row"><input type="radio" name="${q.key}" value="${j}"> ${o}</label>`).join('')}
      </div>
    </div>
  `).join('') + '<div id="sec-result" style="margin-top:18px;"></div>';

  document.getElementById('btn-submit').textContent = L.submit;
}

function evaluate() {
  const lang = getLang();
  const L = SEC_TX[lang] || SEC_TX.fr;
  const out = document.getElementById('sec-result');

  const answers = L.questions.map(q => {
    const el = document.querySelector(`input[name="${q.key}"]:checked`);
    return el ? Number(el.value) : null;
  });

  if (answers.some(a => a === null)) {
    out.innerHTML = `<p class="grade-desc">${L.unanswered}</p>`;
    return;
  }

  // index 0 = best answer (2 pts), 1 = middle (1 pt), 2 = worst (0 pts)
  const maxScore = L.questions.length * 2;
  const score = answers.reduce((sum, a) => sum + (a === 0 ? 2 : a === 1 ? 1 : 0), 0);
  const pct = Math.round((score / maxScore) * 100);
  const thumbPct = Math.max(6, Math.min(94, pct));

  // map score to 4 levels: g1 (red) → g2 → g3 (amber) → g5 (green)
  const [gradeClass, levelText] = pct <= 25 ? ['g1', L.levels[0]]
    : pct <= 50 ? ['g2', L.levels[1]]
    : pct <= 75 ? ['g3', L.levels[2]]
    : ['g5', L.levels[3]];

  out.innerHTML = `
    <div class="result-card">
      <div class="sec-score-wrap">
        <div class="grade-badge ${gradeClass}">${levelText}</div>
        <div class="sec-score-bar-track">
          <div class="sec-score-thumb" style="left:${thumbPct}%"></div>
        </div>
        <div class="sec-score-labels">
          <span>${L.label_risk}</span>
          <span>${L.label_safe}</span>
        </div>
      </div>
      <p class="grade-desc">${L.intro}</p>
      <ul>${L.tips.map(tip => `<li>${tip}</li>`).join('')}</ul>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  render();
  document.getElementById('btn-submit').addEventListener('click', evaluate);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const newLang = btn.dataset.lang;
      state.lang = newLang;
      const url = new URL(window.location.href);
      url.searchParams.set('lang', newLang);
      window.history.replaceState({}, '', url);
      render();
    });
  });

  const linkHome = document.getElementById('link-home');
  if (linkHome) linkHome.href = `index.html?lang=${state.lang}`;
});
