'use strict';

/* global LOCALES */
const LOCALES = {

/* ════════════════════════════════════════════════════
   FRANÇAIS
════════════════════════════════════════════════════ */
fr: {
  ui: {
    subtitle:        "Apprenez à détecter le phishing en 10 questions",
    questions_count: "questions",
    minutes:         "min",
    langs:           "langues",
    start_btn:       "Commencer le quiz →",
    question_label:  "Question",
    score_label:     "Score",
    next_btn:        "Question suivante →",
    finish_btn:      "Voir mes résultats →",
    correct_title:   "Bonne réponse !",
    wrong_title:     "Mauvaise réponse",
    phishing_btn:    "🎣 C'est du phishing !",
    legit_btn:       "✅ Email légitime",
    email_analyze:   "Analysez cet email : est-ce du phishing ?",
    email_from:      "De",
    email_to:        "À",
    result_title:    "Quiz terminé !",
    tips_title:      "Conseils pour vous protéger",
    retry_btn:       "🔄 Rejouer",
    home_btn:        "🌐 Changer de langue",
    grades: {
      perfect: { title: "🏆 Expert Cybersécurité !", desc: "Impressionnant ! Vous détectez le phishing comme un professionnel." },
      great:   { title: "⭐ Très bon !",             desc: "Excellente vigilance. Quelques détails à perfectionner." },
      good:    { title: "👍 Pas mal !",              desc: "Bonne base, mais restez vigilant face aux attaques sophistiquées." },
      average: { title: "⚠️ Peut mieux faire",       desc: "Le phishing peut vous piéger. Lisez attentivement les conseils." },
      poor:    { title: "🚨 Attention !",            desc: "Vous êtes vulnérable. Ces conseils sont essentiels pour vous protéger." },
    },
    tips: [
      "Vérifiez toujours l'adresse email exacte de l'expéditeur, pas seulement le nom affiché",
      "Méfiez-vous des emails créant une urgence ou une menace ('compte bloqué', '24h pour agir')",
      "Survolez les liens avant de cliquer pour voir l'URL réelle dans la barre de statut",
      "Aucune entreprise légitime ne demande votre mot de passe ou vos coordonnées bancaires par email",
      "En cas de doute, contactez l'entreprise directement via son site officiel — jamais via les liens de l'email",
    ],
  },

  questions: [
    /* ── QCM 1 ── */
    {
      id: 1, type: 'qcm',
      question: "Lequel de ces éléments est typiquement un signe de phishing ?",
      options: [
        "L'email contient votre prénom et nom complet",
        "L'email crée un sentiment d'urgence ('votre compte sera bloqué dans 24h')",
        "L'email est envoyé depuis une adresse @paypal.com",
        "L'email contient le logo officiel de l'entreprise",
      ],
      correct: 1,
      explanation: "Les emails de phishing créent une urgence artificielle pour empêcher la victime de réfléchir. Des formules comme '24h', 'immédiatement' ou 'suspension imminente' sont des signaux d'alarme classiques. Un logo ou un prénom peut être facilement copié ou deviné.",
      flags: [],
    },
    /* ── QCM 2 ── */
    {
      id: 2, type: 'qcm',
      question: "Vous recevez un email vous demandant de fournir votre mot de passe pour 'vérifier votre identité'. Que faites-vous ?",
      options: [
        "Vous répondez si l'email semble professionnel",
        "Vous cliquez sur le lien et entrez vos identifiants",
        "Vous ignorez l'email : aucune organisation légitime ne demande votre mot de passe",
        "Vous transmettez l'email à des collègues pour les avertir",
      ],
      correct: 2,
      explanation: "C'est une règle absolue en cybersécurité : aucune entreprise, banque ou service en ligne légitime ne vous demandera JAMAIS votre mot de passe par email. Si vous recevez un tel message, c'est systématiquement une tentative de phishing.",
      flags: [],
    },
    /* ── QCM 3 ── */
    {
      id: 3, type: 'qcm',
      question: "Quelle est la meilleure façon de vérifier un lien dans un email avant de cliquer ?",
      options: [
        "Cliquer rapidement pour voir si la page paraît normale",
        "Faire confiance à l'apparence visuelle du bouton",
        "Survoler le lien pour voir l'URL réelle dans la barre de statut du navigateur",
        "Copier le lien et l'envoyer à un ami pour qu'il vérifie",
      ],
      correct: 2,
      explanation: "Survoler un lien (sans cliquer) affiche l'URL réelle dans la barre de statut en bas du navigateur. Comparez cette URL avec le domaine officiel attendu. Par exemple, 'paypa1.com' (avec un '1') n'est pas la même chose que 'paypal.com'.",
      flags: [],
    },
    /* ── QCM 4 ── */
    {
      id: 4, type: 'qcm',
      question: "Laquelle de ces URLs est suspecte dans un email prétendant venir de PayPal ?",
      options: [
        "https://paypal-secure-account-verify.com/login",
        "https://paypal.com/fr/signin",
        "https://secure.paypal.com/checkoutnow",
        "https://www.paypal.com/myaccount",
      ],
      correct: 0,
      explanation: "'paypal-secure-account-verify.com' est un faux domaine. Les attaquants ajoutent des mots comme 'secure', 'verify', 'account' à un domaine proche du vrai pour tromper. Le seul domaine officiel de PayPal est 'paypal.com'. Tout autre domaine, aussi rassurant qu'il paraisse, est frauduleux.",
      flags: [],
    },
    /* ── QCM 5 ── */
    {
      id: 5, type: 'qcm',
      question: "Qu'est-ce que le 'spear phishing' ?",
      options: [
        "Une attaque ciblée et personnalisée visant une personne ou organisation spécifique",
        "Une attaque qui cible des milliers de personnes aléatoirement",
        "Un phishing uniquement via les réseaux sociaux",
        "Un logiciel malveillant transmis par clé USB",
      ],
      correct: 0,
      explanation: "Le spear phishing est une attaque sophistiquée où l'attaquant recherche sa cible (nom, poste, collègues, projets) pour créer un message très crédible et personnalisé. Il est bien plus difficile à détecter qu'un phishing de masse et cible souvent les entreprises et les cadres.",
      flags: [],
    },
    /* ── EMAIL 1 – PayPal (phishing) ── */
    {
      id: 6, type: 'email', is_phishing: true,
      email: {
        from_name:    "Service Sécurité PayPal",
        from_address: "security@paypa1-service.com",
        to:           "vous@email.com",
        subject:      "⚠️ Accès inhabituel détecté — Action requise sous 48h",
        body:         "Cher(e) utilisateur(trice) PayPal,\n\nNous avons détecté une tentative de connexion suspecte depuis un appareil inconnu localisé à Moscou, Russie (IP : 185.220.101.47).\n\nPour protéger votre compte et éviter sa suspension définitive, vous devez vérifier vos informations de paiement dans les 48 heures. Passé ce délai, votre compte sera définitivement suspendu et vos fonds gelés.\n\nNe laissez pas des criminels accéder à votre argent.",
        cta_text:     "Sécuriser mon compte maintenant",
        cta_url:      "http://paypa1-service.com/secure/verify?token=aZ7xQ",
      },
      explanation: "Cet email est du phishing. Le domaine 'paypa1-service.com' contient un '1' à la place du 'l' de PayPal. Le vrai domaine est toujours 'paypal.com'. L'urgence extrême, les menaces de gel des fonds et la formule générique sont des signaux d'alarme évidents.",
      flags: [
        { type: 'red',   text: "Domaine 'paypa1-service.com' : '1' à la place du 'l' dans 'paypal'" },
        { type: 'red',   text: "URL en HTTP non sécurisé au lieu de HTTPS" },
        { type: 'red',   text: "Urgence artificielle : 48h sous peine de suspension définitive" },
        { type: 'red',   text: "Menaces alarmistes : 'fonds gelés', 'criminels'" },
        { type: 'red',   text: "Formule générique : 'Cher(e) utilisateur(trice)' (PayPal utilise votre prénom)" },
      ],
    },
    /* ── EMAIL 2 – Crédit Agricole (phishing) ── */
    {
      id: 7, type: 'email', is_phishing: true,
      email: {
        from_name:    "Crédit Agricole",
        from_address: "no-reply@credit-agricole-security.net",
        to:           "vous@email.com",
        subject:      "🔒 Mise à jour obligatoire de vos coordonnées bancaires",
        body:         "Bonjour,\n\nSuite à notre mise à jour de sécurité, nous vous demandons de confirmer vos coordonnées bancaires afin d'éviter le blocage de votre espace client en ligne.\n\nCette démarche est obligatoire et doit être effectuée avant le 08/06/2026.\n\nDans le cas contraire, l'accès à votre compte sera temporairement suspendu jusqu'à régularisation de votre dossier.",
        cta_text:     "Confirmer mes coordonnées",
        cta_url:      "https://credit-agricole-security.net/update-banking-info",
      },
      explanation: "Le vrai domaine du Crédit Agricole est 'credit-agricole.fr'. 'credit-agricole-security.net' est un domaine frauduleux. De plus, les banques ne demandent JAMAIS de confirmer des coordonnées bancaires par email.",
      flags: [
        { type: 'red', text: "Faux domaine 'credit-agricole-security.net' (le vrai : 'credit-agricole.fr')" },
        { type: 'red', text: "Les banques ne demandent jamais de coordonnées bancaires par email" },
        { type: 'red', text: "Urgence avec date limite proche et menace de blocage" },
        { type: 'red', text: "Formule d'adresse générique sans votre nom" },
      ],
    },
    /* ── EMAIL 3 – Amazon (légitime) ── */
    {
      id: 8, type: 'email', is_phishing: false,
      email: {
        from_name:    "Amazon",
        from_address: "auto-confirm@amazon.fr",
        to:           "m.dupont@email.com",
        subject:      "Votre commande a été expédiée (#405-8823947-2049161)",
        body:         "Bonjour Marie,\n\nBonne nouvelle ! Votre commande est en route.\n\nArticle : Casque sans fil Sony WH-1000XM5 Noir\nCommande N° : 405-8823947-2049161\nNuméro de suivi : FR8823947FR\nLivraison estimée : lundi 9 juin 2026\n\nPour suivre votre colis, connectez-vous à votre compte Amazon et consultez la section 'Mes commandes'.\n\nMerci pour votre achat.",
        cta_text:     "Suivre ma commande",
        cta_url:      "https://www.amazon.fr/gp/your-account/order-history",
      },
      explanation: "Cet email est légitime. Amazon utilise bien le domaine 'amazon.fr'. L'email est personnalisé (prénom 'Marie'), contient un numéro de commande spécifique, et ne demande aucune action urgente ni information personnelle. Le lien pointe vers 'amazon.fr'.",
      flags: [
        { type: 'green', text: "Domaine officiel : 'amazon.fr'" },
        { type: 'green', text: "Email personnalisé avec votre prénom" },
        { type: 'green', text: "Numéro de commande spécifique et vérifiable dans votre compte" },
        { type: 'green', text: "Aucune demande d'information personnelle ni d'urgence" },
        { type: 'green', text: "Lien pointant vers le domaine officiel amazon.fr" },
      ],
    },
    /* ── EMAIL 4 – IT Helpdesk (phishing) ── */
    {
      id: 9, type: 'email', is_phishing: true,
      email: {
        from_name:    "IT Support — Helpdesk",
        from_address: "helpdesk@company-itsupport365.net",
        to:           "employe@votreentreprise.fr",
        subject:      "[URGENT] Votre mot de passe expire dans 2 heures",
        body:         "Bonjour,\n\nVotre mot de passe professionnel arrive à expiration dans 2 heures.\n\nSi vous ne le renouvelez pas immédiatement, vous perdrez l'accès à votre messagerie Outlook, Teams et tous les outils de l'entreprise. La réactivation par un technicien prend 3 à 5 jours ouvrés.\n\nCliquez sur le lien ci-dessous pour renouveler votre mot de passe en toute sécurité :",
        cta_text:     "Renouveler mon mot de passe",
        cta_url:      "https://office365-renewal.tk/password-reset?user=employe",
      },
      explanation: "Cet email est du phishing ciblant les employés en entreprise. Les systèmes IT d'entreprise n'envoient pas de liens vers des domaines externes comme '.tk'. Les alertes d'expiration de mot de passe sont envoyées plusieurs jours à l'avance, jamais avec un délai de 2 heures.",
      flags: [
        { type: 'red', text: "Extension '.tk' : domaine gratuit très souvent utilisé pour le phishing" },
        { type: 'red', text: "Urgence extrême : 2 heures pour agir" },
        { type: 'red', text: "Domaine externe suspect : 'company-itsupport365.net'" },
        { type: 'red', text: "Menace de conséquences graves : perte d'accès de 3 à 5 jours" },
        { type: 'red', text: "Le vrai IT interne n'envoie jamais de lien externe pour réinitialiser un mot de passe" },
      ],
    },
    /* ── EMAIL 5 – Microsoft (phishing) ── */
    {
      id: 10, type: 'email', is_phishing: true,
      email: {
        from_name:    "Microsoft Account Team",
        from_address: "account-security@microsofft.com",
        to:           "vous@email.com",
        subject:      "Votre compte Microsoft a été compromis",
        body:         "Votre compte Microsoft a été compromis et utilisé pour envoyer des spams.\n\nEn raison de cette activité suspecte, votre compte sera définitivement désactivé dans 12 heures si vous ne confirmez pas immédiatement votre identité.\n\nToutes vos données (emails, fichiers OneDrive, contacts) seront supprimées définitivement.\n\nAgissez maintenant pour protéger vos données.",
        cta_text:     "Vérifier mon identité maintenant",
        cta_url:      "http://microsoft-account-verify.xyz/confirm-identity",
      },
      explanation: "Le domaine 'microsofft.com' contient un double 'f' — ce n'est pas Microsoft. Le vrai domaine est 'microsoft.com'. L'URL '.xyz' est inhabituelle pour un service officiel, et l'utilisation de HTTP (non sécurisé) confirme la fraude. Microsoft ne supprime jamais vos données sans préavis.",
      flags: [
        { type: 'red', text: "'microsofft.com' : double 'f', pas le vrai Microsoft ('microsoft.com')" },
        { type: 'red', text: "Domaine '.xyz' inhabituel pour un service officiel" },
        { type: 'red', text: "HTTP non sécurisé au lieu de HTTPS" },
        { type: 'red', text: "Urgence : 12 heures et menace de suppression définitive des données" },
        { type: 'red', text: "Microsoft n'envoie jamais ce type de menace par email" },
      ],
    },
  ],
},

/* ════════════════════════════════════════════════════
   ENGLISH
════════════════════════════════════════════════════ */
en: {
  ui: {
    subtitle:        "Learn to detect phishing in 10 questions",
    questions_count: "questions",
    minutes:         "min",
    langs:           "languages",
    start_btn:       "Start the quiz →",
    question_label:  "Question",
    score_label:     "Score",
    next_btn:        "Next question →",
    finish_btn:      "See my results →",
    correct_title:   "Correct!",
    wrong_title:     "Wrong answer",
    phishing_btn:    "🎣 It's phishing!",
    legit_btn:       "✅ Legitimate email",
    email_analyze:   "Analyze this email: is it phishing?",
    email_from:      "From",
    email_to:        "To",
    result_title:    "Quiz complete!",
    tips_title:      "Tips to protect yourself",
    retry_btn:       "🔄 Play again",
    home_btn:        "🌐 Change language",
    grades: {
      perfect: { title: "🏆 Cybersecurity Expert!", desc: "Impressive! You detect phishing like a professional." },
      great:   { title: "⭐ Very good!",            desc: "Excellent vigilance. Just a few details to perfect." },
      good:    { title: "👍 Not bad!",              desc: "Good foundation, but stay alert to sophisticated attacks." },
      average: { title: "⚠️ Room for improvement",  desc: "Phishing could trick you. Read the tips carefully." },
      poor:    { title: "🚨 Watch out!",            desc: "You are vulnerable. These tips are essential for your protection." },
    },
    tips: [
      "Always check the sender's exact email address, not just the display name",
      "Beware of emails creating urgency or threats ('account locked', '24h to act')",
      "Hover over links to see the real URL in the browser's status bar before clicking",
      "No legitimate company ever asks for your password or banking details by email",
      "When in doubt, contact the company directly via its official website — never via links in the email",
    ],
  },

  questions: [
    /* ── QCM 1 ── */
    {
      id: 1, type: 'qcm',
      question: "Which of these is typically a sign of phishing?",
      options: [
        "The email contains your full first and last name",
        "The email creates a sense of urgency ('your account will be locked in 24h')",
        "The email was sent from an @paypal.com address",
        "The email contains the official company logo",
      ],
      correct: 1,
      explanation: "Phishing emails create artificial urgency to prevent victims from thinking clearly. Phrases like '24 hours', 'immediately' or 'imminent suspension' are classic red flags. A logo or your name can easily be copied or guessed.",
      flags: [],
    },
    /* ── QCM 2 ── */
    {
      id: 2, type: 'qcm',
      question: "You receive an email asking you to provide your password to 'verify your identity'. What do you do?",
      options: [
        "You reply if the email looks professional",
        "You click the link and enter your credentials",
        "You ignore the email: no legitimate organisation ever asks for your password",
        "You forward the email to colleagues to warn them",
      ],
      correct: 2,
      explanation: "This is an absolute rule in cybersecurity: no company, bank, or legitimate online service will EVER ask for your password by email. If you receive such a message, it is always a phishing attempt.",
      flags: [],
    },
    /* ── QCM 3 ── */
    {
      id: 3, type: 'qcm',
      question: "What is the best way to check a link in an email before clicking it?",
      options: [
        "Click quickly to see if the page looks normal",
        "Trust the visual appearance of the button",
        "Hover over the link to see the real URL in the browser's status bar",
        "Copy the link and send it to a friend to check",
      ],
      correct: 2,
      explanation: "Hovering over a link (without clicking) shows the real URL in the status bar at the bottom of your browser. Compare it with the expected official domain. For example, 'paypa1.com' (with a '1') is not the same as 'paypal.com'.",
      flags: [],
    },
    /* ── QCM 4 ── */
    {
      id: 4, type: 'qcm',
      question: "Which URL is suspicious in an email claiming to be from PayPal?",
      options: [
        "https://paypal-secure-account-verify.com/login",
        "https://paypal.com/signin",
        "https://secure.paypal.com/checkoutnow",
        "https://www.paypal.com/myaccount",
      ],
      correct: 0,
      explanation: "'paypal-secure-account-verify.com' is a fraudulent domain. Attackers add words like 'secure', 'verify', or 'account' to a domain that looks close to the real one. PayPal's only official domain is 'paypal.com'. Any other domain, however reassuring it seems, is fraudulent.",
      flags: [],
    },
    /* ── QCM 5 ── */
    {
      id: 5, type: 'qcm',
      question: "What is 'spear phishing'?",
      options: [
        "A targeted, personalised attack aimed at a specific person or organisation",
        "An attack targeting thousands of random people",
        "Phishing only through social media",
        "Malware transmitted via USB drive",
      ],
      correct: 0,
      explanation: "Spear phishing is a sophisticated attack where the attacker researches their target (name, job title, colleagues, projects) to craft a highly credible and personalised message. It is far harder to detect than mass phishing and often targets companies and executives.",
      flags: [],
    },
    /* ── EMAIL 1 – PayPal (phishing) ── */
    {
      id: 6, type: 'email', is_phishing: true,
      email: {
        from_name:    "PayPal Security Service",
        from_address: "security@paypa1-service.com",
        to:           "you@email.com",
        subject:      "⚠️ Unusual access detected — Action required within 48h",
        body:         "Dear PayPal user,\n\nWe have detected a suspicious login attempt from an unknown device located in Moscow, Russia (IP: 185.220.101.47).\n\nTo protect your account and avoid permanent suspension, you must verify your payment information within 48 hours. After this deadline, your account will be permanently suspended and your funds frozen.\n\nDon't let criminals access your money.",
        cta_text:     "Secure my account now",
        cta_url:      "http://paypa1-service.com/secure/verify?token=aZ7xQ",
      },
      explanation: "This is a phishing email. The domain 'paypa1-service.com' contains a '1' instead of the 'l' in PayPal. The real domain is always 'paypal.com'. The extreme urgency, fund-freezing threats, and generic greeting are obvious red flags.",
      flags: [
        { type: 'red',   text: "Domain 'paypa1-service.com': '1' instead of 'l' in 'paypal'" },
        { type: 'red',   text: "Insecure HTTP URL instead of HTTPS" },
        { type: 'red',   text: "Artificial urgency: 48h or permanent suspension" },
        { type: 'red',   text: "Alarming threats: 'funds frozen', 'criminals'" },
        { type: 'red',   text: "Generic greeting: 'Dear PayPal user' (PayPal uses your name)" },
      ],
    },
    /* ── EMAIL 2 – Barclays (phishing) ── */
    {
      id: 7, type: 'email', is_phishing: true,
      email: {
        from_name:    "Barclays Bank",
        from_address: "no-reply@barclays-secure-banking.net",
        to:           "you@email.com",
        subject:      "🔒 Mandatory update of your banking details",
        body:         "Dear customer,\n\nFollowing our security update, we require you to confirm your banking details to prevent your online account from being blocked.\n\nThis is mandatory and must be completed before 08/06/2026.\n\nFailure to do so will result in your account being temporarily suspended until your file is regularised.",
        cta_text:     "Confirm my details",
        cta_url:      "https://barclays-secure-banking.net/update-banking-info",
      },
      explanation: "Barclays' real domain is 'barclays.co.uk'. 'barclays-secure-banking.net' is a fraudulent domain. Moreover, banks NEVER ask you to confirm banking details by email.",
      flags: [
        { type: 'red', text: "Fake domain 'barclays-secure-banking.net' (the real one: 'barclays.co.uk')" },
        { type: 'red', text: "Banks never ask for banking details by email" },
        { type: 'red', text: "Urgency with close deadline and threat of account blocking" },
        { type: 'red', text: "Generic greeting without your name" },
      ],
    },
    /* ── EMAIL 3 – Amazon (legitimate) ── */
    {
      id: 8, type: 'email', is_phishing: false,
      email: {
        from_name:    "Amazon",
        from_address: "auto-confirm@amazon.co.uk",
        to:           "j.smith@email.com",
        subject:      "Your order has been shipped (#205-9912345-0674312)",
        body:         "Hello James,\n\nGreat news! Your order is on its way.\n\nItem: Sony WH-1000XM5 Wireless Headphones Black\nOrder #: 205-9912345-0674312\nTracking number: GB9912345GB\nEstimated delivery: Monday 9 June 2026\n\nTo track your parcel, log in to your Amazon account and go to 'Your Orders'.\n\nThank you for shopping with us.",
        cta_text:     "Track my order",
        cta_url:      "https://www.amazon.co.uk/gp/your-account/order-history",
      },
      explanation: "This email is legitimate. Amazon uses the official domain 'amazon.co.uk'. The email is personalised (first name 'James'), contains a specific order number, and does not request any urgent action or personal information. The link points to 'amazon.co.uk'.",
      flags: [
        { type: 'green', text: "Official domain: 'amazon.co.uk'" },
        { type: 'green', text: "Personalised with your first name" },
        { type: 'green', text: "Specific order number that can be verified in your account" },
        { type: 'green', text: "No request for personal information or urgency" },
        { type: 'green', text: "Link pointing to the official amazon.co.uk domain" },
      ],
    },
    /* ── EMAIL 4 – IT Helpdesk (phishing) ── */
    {
      id: 9, type: 'email', is_phishing: true,
      email: {
        from_name:    "IT Support — Helpdesk",
        from_address: "helpdesk@company-itsupport365.net",
        to:           "employee@yourcompany.com",
        subject:      "[URGENT] Your password expires in 2 hours",
        body:         "Hello,\n\nYour work password is expiring in 2 hours.\n\nIf you do not renew it immediately, you will lose access to your Outlook, Teams and all company tools. Reactivation by a technician takes 3 to 5 business days.\n\nClick the link below to securely renew your password:",
        cta_text:     "Renew my password",
        cta_url:      "https://office365-renewal.tk/password-reset?user=employee",
      },
      explanation: "This is a phishing email targeting employees. Corporate IT systems do not send links to external domains like '.tk'. Password expiry alerts are sent several days in advance, never with a 2-hour deadline.",
      flags: [
        { type: 'red', text: "'.tk' extension: free domain very commonly used for phishing" },
        { type: 'red', text: "Extreme urgency: only 2 hours to act" },
        { type: 'red', text: "Suspicious external domain: 'company-itsupport365.net'" },
        { type: 'red', text: "Threat of serious consequences: 3–5 days loss of access" },
        { type: 'red', text: "Real internal IT never sends external links for password resets" },
      ],
    },
    /* ── EMAIL 5 – Microsoft (phishing) ── */
    {
      id: 10, type: 'email', is_phishing: true,
      email: {
        from_name:    "Microsoft Account Team",
        from_address: "account-security@microsofft.com",
        to:           "you@email.com",
        subject:      "Your Microsoft account has been compromised",
        body:         "Your Microsoft account has been compromised and used to send spam.\n\nDue to this suspicious activity, your account will be permanently disabled in 12 hours unless you immediately confirm your identity.\n\nAll your data (emails, OneDrive files, contacts) will be permanently deleted.\n\nAct now to protect your data.",
        cta_text:     "Verify my identity now",
        cta_url:      "http://microsoft-account-verify.xyz/confirm-identity",
      },
      explanation: "The domain 'microsofft.com' has a double 'f' — this is not Microsoft. The real domain is 'microsoft.com'. The '.xyz' URL is unusual for an official service, and the use of HTTP (insecure) confirms the fraud. Microsoft never deletes your data without notice.",
      flags: [
        { type: 'red', text: "'microsofft.com': double 'f', not the real Microsoft ('microsoft.com')" },
        { type: 'red', text: "'.xyz' domain unusual for an official service" },
        { type: 'red', text: "Insecure HTTP instead of HTTPS" },
        { type: 'red', text: "Urgency: 12 hours and threat of permanent data deletion" },
        { type: 'red', text: "Microsoft never sends this type of threat by email" },
      ],
    },
  ],
},

/* ════════════════════════════════════════════════════
   ESPAÑOL
════════════════════════════════════════════════════ */
es: {
  ui: {
    subtitle:        "Aprende a detectar el phishing en 10 preguntas",
    questions_count: "preguntas",
    minutes:         "min",
    langs:           "idiomas",
    start_btn:       "Comenzar el quiz →",
    question_label:  "Pregunta",
    score_label:     "Puntos",
    next_btn:        "Siguiente pregunta →",
    finish_btn:      "Ver mis resultados →",
    correct_title:   "¡Respuesta correcta!",
    wrong_title:     "Respuesta incorrecta",
    phishing_btn:    "🎣 ¡Es phishing!",
    legit_btn:       "✅ Email legítimo",
    email_analyze:   "Analiza este email: ¿es phishing?",
    email_from:      "De",
    email_to:        "Para",
    result_title:    "¡Quiz completado!",
    tips_title:      "Consejos para protegerte",
    retry_btn:       "🔄 Jugar de nuevo",
    home_btn:        "🌐 Cambiar idioma",
    grades: {
      perfect: { title: "🏆 ¡Experto en Ciberseguridad!", desc: "¡Impresionante! Detectas el phishing como un profesional." },
      great:   { title: "⭐ ¡Muy bien!",                  desc: "Excelente vigilancia. Solo algunos detalles a perfeccionar." },
      good:    { title: "👍 ¡Nada mal!",                  desc: "Buena base, pero mantente alerta ante ataques sofisticados." },
      average: { title: "⚠️ Puede mejorar",               desc: "El phishing podría engañarte. Lee los consejos con atención." },
      poor:    { title: "🚨 ¡Atención!",                  desc: "Eres vulnerable. Estos consejos son esenciales para protegerte." },
    },
    tips: [
      "Siempre verifica la dirección de email exacta del remitente, no solo el nombre que aparece",
      "Desconfía de los emails que crean urgencia o amenazas ('cuenta bloqueada', '24h para actuar')",
      "Pasa el cursor sobre los enlaces para ver la URL real en la barra de estado antes de hacer clic",
      "Ninguna empresa legítima te pedirá tu contraseña ni datos bancarios por email",
      "En caso de duda, contacta a la empresa directamente a través de su web oficial — nunca por los enlaces del email",
    ],
  },

  questions: [
    /* ── QCM 1 ── */
    {
      id: 1, type: 'qcm',
      question: "¿Cuál de estos elementos es típicamente una señal de phishing?",
      options: [
        "El email contiene tu nombre y apellido completos",
        "El email crea un sentido de urgencia ('tu cuenta será bloqueada en 24h')",
        "El email fue enviado desde una dirección @paypal.com",
        "El email contiene el logotipo oficial de la empresa",
      ],
      correct: 1,
      explanation: "Los emails de phishing crean urgencia artificial para evitar que la víctima piense con claridad. Frases como '24 horas', 'inmediatamente' o 'suspensión inminente' son señales de alarma clásicas. Un logotipo o tu nombre pueden ser fácilmente copiados.",
      flags: [],
    },
    /* ── QCM 2 ── */
    {
      id: 2, type: 'qcm',
      question: "Recibes un email pidiéndote que proporciones tu contraseña para 'verificar tu identidad'. ¿Qué haces?",
      options: [
        "Respondes si el email parece profesional",
        "Haces clic en el enlace e introduces tus credenciales",
        "Ignoras el email: ninguna organización legítima pide tu contraseña",
        "Reenvías el email a compañeros para avisarles",
      ],
      correct: 2,
      explanation: "Esta es una regla absoluta en ciberseguridad: ninguna empresa, banco o servicio en línea legítimo te pedirá NUNCA tu contraseña por email. Si recibes este tipo de mensaje, siempre es un intento de phishing.",
      flags: [],
    },
    /* ── QCM 3 ── */
    {
      id: 3, type: 'qcm',
      question: "¿Cuál es la mejor forma de verificar un enlace en un email antes de hacer clic?",
      options: [
        "Hacer clic rápidamente para ver si la página parece normal",
        "Confiar en la apariencia visual del botón",
        "Pasar el cursor sobre el enlace para ver la URL real en la barra de estado",
        "Copiar el enlace y enviárselo a un amigo para que lo compruebe",
      ],
      correct: 2,
      explanation: "Pasar el cursor sobre un enlace (sin hacer clic) muestra la URL real en la barra de estado en la parte inferior del navegador. Compara esa URL con el dominio oficial esperado. Por ejemplo, 'paypa1.com' (con un '1') no es lo mismo que 'paypal.com'.",
      flags: [],
    },
    /* ── QCM 4 ── */
    {
      id: 4, type: 'qcm',
      question: "¿Cuál de estas URLs es sospechosa en un email que dice ser de PayPal?",
      options: [
        "https://paypal-secure-account-verify.com/login",
        "https://paypal.com/es/signin",
        "https://secure.paypal.com/checkoutnow",
        "https://www.paypal.com/myaccount",
      ],
      correct: 0,
      explanation: "'paypal-secure-account-verify.com' es un dominio fraudulento. Los atacantes añaden palabras como 'secure', 'verify' o 'account' a un dominio parecido al real. El único dominio oficial de PayPal es 'paypal.com'. Cualquier otro dominio, por tranquilizador que parezca, es fraudulento.",
      flags: [],
    },
    /* ── QCM 5 ── */
    {
      id: 5, type: 'qcm',
      question: "¿Qué es el 'spear phishing'?",
      options: [
        "Un ataque dirigido y personalizado hacia una persona u organización específica",
        "Un ataque que apunta a miles de personas al azar",
        "Un phishing únicamente a través de redes sociales",
        "Software malicioso transmitido por USB",
      ],
      correct: 0,
      explanation: "El spear phishing es un ataque sofisticado donde el atacante investiga a su objetivo (nombre, cargo, compañeros, proyectos) para crear un mensaje muy creíble y personalizado. Es mucho más difícil de detectar que el phishing masivo y suele dirigirse a empresas y directivos.",
      flags: [],
    },
    /* ── EMAIL 1 – PayPal (phishing) ── */
    {
      id: 6, type: 'email', is_phishing: true,
      email: {
        from_name:    "Servicio de Seguridad PayPal",
        from_address: "security@paypa1-service.com",
        to:           "tu@email.com",
        subject:      "⚠️ Acceso inusual detectado — Acción requerida en 48h",
        body:         "Estimado/a usuario/a de PayPal,\n\nHemos detectado un intento de inicio de sesión sospechoso desde un dispositivo desconocido localizado en Moscú, Rusia (IP: 185.220.101.47).\n\nPara proteger tu cuenta y evitar su suspensión definitiva, debes verificar tu información de pago en las próximas 48 horas. Pasado este plazo, tu cuenta será suspendida definitivamente y tus fondos congelados.\n\nNo dejes que los delincuentes accedan a tu dinero.",
        cta_text:     "Asegurar mi cuenta ahora",
        cta_url:      "http://paypa1-service.com/secure/verify?token=aZ7xQ",
      },
      explanation: "Este email es phishing. El dominio 'paypa1-service.com' contiene un '1' en lugar de la 'l' de PayPal. El dominio real es siempre 'paypal.com'. La urgencia extrema, las amenazas de congelación de fondos y el saludo genérico son señales de alarma evidentes.",
      flags: [
        { type: 'red',   text: "Dominio 'paypa1-service.com': '1' en lugar de la 'l' en 'paypal'" },
        { type: 'red',   text: "URL en HTTP inseguro en lugar de HTTPS" },
        { type: 'red',   text: "Urgencia artificial: 48h o suspensión definitiva" },
        { type: 'red',   text: "Amenazas alarmistas: 'fondos congelados', 'delincuentes'" },
        { type: 'red',   text: "Saludo genérico: 'Estimado/a usuario/a' (PayPal usa tu nombre)" },
      ],
    },
    /* ── EMAIL 2 – BBVA (phishing) ── */
    {
      id: 7, type: 'email', is_phishing: true,
      email: {
        from_name:    "BBVA",
        from_address: "no-reply@bbva-secure-banking.net",
        to:           "tu@email.com",
        subject:      "🔒 Actualización obligatoria de tus datos bancarios",
        body:         "Estimado cliente,\n\nTras nuestra actualización de seguridad, te pedimos que confirmes tus datos bancarios para evitar el bloqueo de tu área de cliente en línea.\n\nEsta gestión es obligatoria y debe realizarse antes del 08/06/2026.\n\nEn caso contrario, el acceso a tu cuenta quedará temporalmente suspendido hasta la regularización de tu expediente.",
        cta_text:     "Confirmar mis datos",
        cta_url:      "https://bbva-secure-banking.net/update-banking-info",
      },
      explanation: "El dominio real de BBVA es 'bbva.es'. 'bbva-secure-banking.net' es un dominio fraudulento. Además, los bancos NUNCA piden confirmar datos bancarios por email.",
      flags: [
        { type: 'red', text: "Dominio falso 'bbva-secure-banking.net' (el real: 'bbva.es')" },
        { type: 'red', text: "Los bancos nunca piden datos bancarios por email" },
        { type: 'red', text: "Urgencia con fecha límite próxima y amenaza de bloqueo" },
        { type: 'red', text: "Saludo genérico sin tu nombre" },
      ],
    },
    /* ── EMAIL 3 – Amazon (legítimo) ── */
    {
      id: 8, type: 'email', is_phishing: false,
      email: {
        from_name:    "Amazon",
        from_address: "auto-confirm@amazon.es",
        to:           "m.garcia@email.com",
        subject:      "Tu pedido ha sido enviado (#305-1234567-8901234)",
        body:         "Hola María,\n\n¡Buenas noticias! Tu pedido está en camino.\n\nArtículo: Auriculares inalámbricos Sony WH-1000XM5 Negro\nPedido n.º: 305-1234567-8901234\nNúmero de seguimiento: ES1234567ES\nEntrega estimada: lunes 9 de junio de 2026\n\nPara rastrear tu paquete, inicia sesión en tu cuenta de Amazon y consulta 'Mis pedidos'.\n\nGracias por tu compra.",
        cta_text:     "Rastrear mi pedido",
        cta_url:      "https://www.amazon.es/gp/your-account/order-history",
      },
      explanation: "Este email es legítimo. Amazon usa el dominio oficial 'amazon.es'. El email está personalizado (nombre 'María'), contiene un número de pedido específico y no solicita ninguna acción urgente ni información personal. El enlace apunta a 'amazon.es'.",
      flags: [
        { type: 'green', text: "Dominio oficial: 'amazon.es'" },
        { type: 'green', text: "Email personalizado con tu nombre" },
        { type: 'green', text: "Número de pedido específico y verificable en tu cuenta" },
        { type: 'green', text: "Sin solicitud de información personal ni urgencia" },
        { type: 'green', text: "Enlace que apunta al dominio oficial amazon.es" },
      ],
    },
    /* ── EMAIL 4 – IT Helpdesk (phishing) ── */
    {
      id: 9, type: 'email', is_phishing: true,
      email: {
        from_name:    "IT Support — Helpdesk",
        from_address: "helpdesk@company-itsupport365.net",
        to:           "empleado@tuempresa.es",
        subject:      "[URGENTE] Tu contraseña caduca en 2 horas",
        body:         "Hola,\n\nTu contraseña profesional caduca en 2 horas.\n\nSi no la renuevas inmediatamente, perderás el acceso a tu correo Outlook, Teams y todas las herramientas de la empresa. La reactivación por un técnico tarda entre 3 y 5 días laborables.\n\nHaz clic en el siguiente enlace para renovar tu contraseña de forma segura:",
        cta_text:     "Renovar mi contraseña",
        cta_url:      "https://office365-renewal.tk/password-reset?user=empleado",
      },
      explanation: "Este email es phishing dirigido a empleados. Los sistemas IT internos no envían enlaces a dominios externos como '.tk'. Las alertas de caducidad de contraseña se envían con días de antelación, nunca con un plazo de 2 horas.",
      flags: [
        { type: 'red', text: "Extensión '.tk': dominio gratuito muy usado para phishing" },
        { type: 'red', text: "Urgencia extrema: solo 2 horas para actuar" },
        { type: 'red', text: "Dominio externo sospechoso: 'company-itsupport365.net'" },
        { type: 'red', text: "Amenaza de consecuencias graves: pérdida de acceso de 3 a 5 días" },
        { type: 'red', text: "El IT interno real nunca envía enlaces externos para resetear contraseñas" },
      ],
    },
    /* ── EMAIL 5 – Microsoft (phishing) ── */
    {
      id: 10, type: 'email', is_phishing: true,
      email: {
        from_name:    "Microsoft Account Team",
        from_address: "account-security@microsofft.com",
        to:           "tu@email.com",
        subject:      "Tu cuenta Microsoft ha sido comprometida",
        body:         "Tu cuenta Microsoft ha sido comprometida y utilizada para enviar spam.\n\nDebido a esta actividad sospechosa, tu cuenta será desactivada permanentemente en 12 horas si no confirmas tu identidad de inmediato.\n\nTodos tus datos (correos, archivos de OneDrive, contactos) serán eliminados permanentemente.\n\nActúa ahora para proteger tus datos.",
        cta_text:     "Verificar mi identidad ahora",
        cta_url:      "http://microsoft-account-verify.xyz/confirm-identity",
      },
      explanation: "El dominio 'microsofft.com' tiene una 'f' doble — no es Microsoft. El dominio real es 'microsoft.com'. La URL '.xyz' es inusual para un servicio oficial, y el uso de HTTP (inseguro) confirma el fraude. Microsoft nunca elimina tus datos sin previo aviso.",
      flags: [
        { type: 'red', text: "'microsofft.com': 'f' doble, no es el Microsoft real ('microsoft.com')" },
        { type: 'red', text: "Dominio '.xyz' inusual para un servicio oficial" },
        { type: 'red', text: "HTTP inseguro en lugar de HTTPS" },
        { type: 'red', text: "Urgencia: 12 horas y amenaza de eliminación permanente de datos" },
        { type: 'red', text: "Microsoft nunca envía este tipo de amenaza por email" },
      ],
    },
  ],
},

}; // end LOCALES
