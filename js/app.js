'use strict';

const state = {
  lang: 'fr',
  questions: [],
  current: 0,
  score: 0,
  answered: false,
};

function t(key) {
  const val = LOCALES[state.lang]?.ui?.[key];
  return val !== undefined ? val : key;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = t(el.dataset.i18n);
    if (typeof v === 'string') el.textContent = v;
  });
  document.documentElement.lang = state.lang;
  document.title = t('game_title');
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === state.lang);
  });
}

function init() {
  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get('lang');
  const browserLang = (navigator.language || '').split('-')[0];
  const supported = ['fr', 'en', 'es'];
  if (supported.includes(urlLang)) state.lang = urlLang;
  else if (supported.includes(browserLang)) state.lang = browserLang;

  if (params.get('embed') === '1') document.body.classList.add('embed-mode');

  applyI18n();

  document.querySelectorAll('.lang-btn').forEach(btn =>
    btn.addEventListener('click', () => {
      state.lang = btn.dataset.lang;
      applyI18n();
    })
  );

  document.getElementById('btn-start').addEventListener('click', startQuiz);
  document.getElementById('btn-next').addEventListener('click', advance);
  document.getElementById('btn-retry').addEventListener('click', () => showScreen('screen-welcome'));
  document.getElementById('btn-home').addEventListener('click', () => showScreen('screen-welcome'));
}

function startQuiz() {
  state.questions = shuffle(LOCALES[state.lang].questions);
  state.current = 0;
  state.score = 0;
  state.answered = false;

  document.getElementById('q-total').textContent = state.questions.length;
  document.getElementById('score-live').textContent = '0';

  showScreen('screen-quiz');
  applyI18n();
  renderQuestion();
}

function renderQuestion() {
  const q = state.questions[state.current];
  const n = state.current + 1;
  const total = state.questions.length;

  document.getElementById('q-num').textContent = n;
  document.getElementById('progress-fill').style.width = `${(n / total) * 100}%`;
  document.getElementById('score-live').textContent = state.score;

  const fb = document.getElementById('feedback-box');
  fb.className = 'feedback-box hidden';
  document.getElementById('fb-flags').innerHTML = '';

  state.answered = false;

  const area = document.getElementById('question-area');
  if (q.type === 'qcm') {
    area.innerHTML = buildQCM(q);
    area.querySelectorAll('.option-btn').forEach((btn, i) =>
      btn.addEventListener('click', () => answerQCM(q, i, btn))
    );
  } else {
    area.innerHTML = buildEmail(q);
    document.getElementById('btn-phishing').addEventListener('click', () => answerEmail(q, true));
    document.getElementById('btn-legit').addEventListener('click', () => answerEmail(q, false));
  }
}

function buildQCM(q) {
  const letters = ['A', 'B', 'C', 'D'];
  const opts = q.options.map((opt, i) => `
    <button class="option-btn" data-idx="${i}">
      <span class="opt-letter">${letters[i]}</span>
      <span>${escHtml(opt)}</span>
    </button>`).join('');
  return `
    <div class="question-card">
      <span class="type-badge badge-qcm">📝 QCM</span>
      <p class="question-text">${escHtml(q.question)}</p>
      <div class="options-list">${opts}</div>
    </div>`;
}

function buildEmail(q) {
  const e = q.email;
  const body = escHtml(e.body).replace(/\n/g, '<br>');
  const cta = e.cta_text ? `
    <div class="email-cta">
      <div class="email-cta-btn">${escHtml(e.cta_text)}</div>
      <span class="email-cta-url">↳ ${escHtml(e.cta_url)}</span>
    </div>` : '';
  return `
    <p class="email-intro">📧 ${escHtml(t('email_analyze'))}</p>
    <div class="email-mock" id="email-mock-card">
      <div class="email-meta">
        <div class="email-row">
          <span class="email-row-lbl">${escHtml(t('email_from'))}</span>
          <span class="email-row-val">${escHtml(e.from_name)}
            <span class="email-addr">&lt;${escHtml(e.from_address)}&gt;</span></span>
        </div>
        <div class="email-row">
          <span class="email-row-lbl">${escHtml(t('email_to'))}</span>
          <span class="email-row-val email-addr">${escHtml(e.to)}</span>
        </div>
        <div class="email-subject">${escHtml(e.subject)}</div>
      </div>
      <div class="email-body">${body}</div>
      ${cta}
    </div>
    <div class="email-verdict">
      <button class="btn-phishing" id="btn-phishing">${escHtml(t('phishing_btn'))}</button>
      <button class="btn-legit" id="btn-legit">${escHtml(t('legit_btn'))}</button>
    </div>`;
}

function answerQCM(q, idx, btn) {
  if (state.answered) return;
  state.answered = true;
  const correct = idx === q.correct;
  if (correct) state.score++;

  document.querySelectorAll('.option-btn').forEach((b, i) => {
    b.disabled = true;
    if (i === q.correct) b.classList.add('is-correct');
    else if (i === idx && !correct) b.classList.add('is-wrong');
  });

  showFeedback(q, correct);
}

function answerEmail(q, userSaysPhishing) {
  if (state.answered) return;
  state.answered = true;
  const correct = userSaysPhishing === q.is_phishing;
  if (correct) state.score++;

  document.getElementById('btn-phishing').disabled = true;
  document.getElementById('btn-legit').disabled = true;

  const card = document.getElementById('email-mock-card');
  if (card) {
    card.style.borderColor = q.is_phishing
      ? 'rgba(239,68,68,.55)'
      : 'rgba(16,185,129,.55)';
  }

  showFeedback(q, correct);
}

function showFeedback(q, correct) {
  document.getElementById('fb-icon').textContent = correct ? '✅' : '❌';
  document.getElementById('fb-title').textContent = correct ? t('correct_title') : t('wrong_title');
  document.getElementById('fb-text').textContent = q.explanation;

  const flagsEl = document.getElementById('fb-flags');
  if (q.flags && q.flags.length) {
    flagsEl.innerHTML = q.flags.map(f => `
      <div class="flag flag-${f.type}">
        <span class="flag-icon">${f.type === 'red' ? '🚩' : '✅'}</span>
        <span>${escHtml(f.text)}</span>
      </div>`).join('');
  }

  const isLast = state.current >= state.questions.length - 1;
  document.getElementById('btn-next').textContent = isLast ? t('finish_btn') : t('next_btn');

  const fb = document.getElementById('feedback-box');
  fb.className = `feedback-box ${correct ? 'is-correct' : 'is-wrong'}`;
  fb.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function advance() {
  state.current++;
  if (state.current >= state.questions.length) {
    showResults();
  } else {
    renderQuestion();
    document.getElementById('question-area').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function showResults() {
  const total = state.questions.length;
  const score = state.score;
  const pct = score / total;

  document.getElementById('final-score').textContent = score;
  document.getElementById('final-total').textContent = total;

  // Animate ring (circumference for r=50: 2π×50 ≈ 314.16)
  const circumference = 314.16;
  setTimeout(() => {
    document.getElementById('ring-progress').style.strokeDashoffset =
      circumference * (1 - pct);
  }, 200);

  const grades = t('grades');
  let grade, cls;
  if (score === total)  { grade = grades.perfect; cls = 'g5'; }
  else if (pct >= 0.8) { grade = grades.great;   cls = 'g4'; }
  else if (pct >= 0.6) { grade = grades.good;    cls = 'g3'; }
  else if (pct >= 0.4) { grade = grades.average; cls = 'g2'; }
  else                 { grade = grades.poor;    cls = 'g1'; }

  const badge = document.getElementById('grade-badge');
  badge.textContent = grade.title;
  badge.className = `grade-badge ${cls}`;
  document.getElementById('grade-desc').textContent = grade.desc;

  document.getElementById('tips-list').innerHTML =
    t('tips').map(tip => `<li>${escHtml(tip)}</li>`).join('');

  showScreen('screen-result');
  applyI18n();
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

document.addEventListener('DOMContentLoaded', init);
