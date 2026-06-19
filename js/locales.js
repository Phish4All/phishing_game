'use strict';

/* global LOCALES */
const LOCALES = {

/* ════════════════════════════════════════════════════
   FRANÇAIS
════════════════════════════════════════════════════ */
fr: {
  ui: {
    game_title:      "Le Jeu du Phishing",
    brought_by:      "Proposé par",
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
    back_to_quiz:    "Retour au quiz",
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
      question: "Un site web affichant un cadenas (HTTPS) dans la barre d'adresse est-il forcément sûr ?",
      options: [
        "Oui, le cadenas garantit que le site est légitime et sans danger",
        "Non, HTTPS signifie seulement que la connexion est chiffrée — un site de phishing peut aussi avoir un cadenas",
        "Le cadenas prouve que l'entreprise a payé une certification de sécurité premium",
        "Seuls les sites gouvernementaux peuvent obtenir le cadenas HTTPS",
      ],
      correct: 1,
      explanation: "Le cadenas HTTPS indique uniquement que les données échangées entre vous et le site sont chiffrées — il ne garantit en rien la légitimité du site. N'importe qui, y compris les cybercriminels, peut obtenir gratuitement un certificat HTTPS. Ne vous fiez jamais au cadenas seul pour juger de la fiabilité d'un site.",
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
    /* ── QCM 6 ── */
    {
      id: 11, type: 'qcm',
      question: "Vous recevez un email avec une pièce jointe nommée 'Facture_impayee.docm' qui vous demande d'activer les macros pour l'afficher correctement. Que faites-vous ?",
      options: [
        "Vous l'ouvrez et activez les macros, c'est sûrement important",
        "Vous l'ouvrez sans activer les macros pour vérifier le contenu",
        "Vous ne l'ouvrez pas et supprimez l'email : les macros dans une pièce jointe inattendue sont un signal d'alerte classique",
        "Vous transférez la pièce jointe à un collègue pour avoir son avis",
      ],
      correct: 2,
      explanation: "Les fichiers Office avec macros (.docm, .xlsm) sont une méthode très répandue pour installer des logiciels malveillants. Activer les macros à la demande d'un email inattendu permet au code malveillant de s'exécuter sur votre machine. Ne jamais activer les macros sur une pièce jointe non sollicitée, et signalez l'email à votre service IT.",
      flags: [],
    },
    /* ── QCM 7 ── */
    {
      id: 12, type: 'qcm',
      question: "Un email affiche 'Service Client Banque Populaire <support@bp-info-system24.ru>' comme expéditeur. Que devez-vous regarder en priorité ?",
      options: [
        "Le nom affiché 'Service Client Banque Populaire', qui semble officiel",
        "L'adresse email réelle après le '@' : 'bp-info-system24.ru' n'a aucun rapport avec la banque",
        "La présence d'un logo dans la signature de l'email",
        "Le ton poli et professionnel du message",
      ],
      correct: 1,
      explanation: "Le nom affiché d'un expéditeur peut être modifié librement par l'attaquant — il ne prouve rien. Seule l'adresse email complète après le '@' indique le véritable expéditeur. Ici, le domaine '.ru' n'a aucun lien avec une banque française, ce qui trahit une usurpation.",
      flags: [],
    },
    /* ── QCM 8 ── */
    {
      id: 13, type: 'qcm',
      question: "En quelques minutes, votre téléphone reçoit dix notifications de validation de connexion (double authentification) alors que vous n'essayez pas de vous connecter. Quelle est la bonne réaction ?",
      options: [
        "Vous finissez par accepter une notification pour que ça s'arrête",
        "Vous refusez toutes les demandes et changez immédiatement votre mot de passe",
        "Vous ignorez les notifications, elles vont finir par s'arrêter toutes seules",
        "Vous appelez le numéro indiqué dans la notification pour vérifier",
      ],
      correct: 1,
      explanation: "Cette technique s'appelle le 'MFA fatigue' (ou bombing) : un attaquant qui possède déjà votre mot de passe envoie de multiples demandes d'authentification dans l'espoir que vous en acceptiez une par lassitude ou erreur. Refusez systématiquement, changez votre mot de passe immédiatement et alertez votre service de sécurité — quelqu'un connaît déjà vos identifiants.",
      flags: [],
    },
    /* ── QCM 9 ── */
    {
      id: 14, type: 'qcm',
      question: "Vous recevez un email vous annonçant que vous avez gagné 50 000 € à une loterie internationale à laquelle vous n'avez jamais participé. Comment réagissez-vous ?",
      options: [
        "Vous répondez en fournissant vos coordonnées bancaires pour recevoir le gain",
        "Vous payez les 'frais de dossier' demandés pour débloquer le virement",
        "Vous supprimez l'email : on ne gagne jamais à un jeu auquel on n'a pas joué",
        "Vous transférez l'email à vos proches au cas où ce serait vrai",
      ],
      correct: 2,
      explanation: "Une règle simple : on ne peut pas gagner à une loterie à laquelle on n'a pas participé. Ces escroqueries cherchent à vous faire payer de faux frais ou à voler vos données bancaires en échange d'un gain qui n'existe pas. Si c'est trop beau pour être vrai, c'est que ça ne l'est pas.",
      flags: [],
    },
    /* ── QCM 10 ── */
    {
      id: 15, type: 'qcm',
      question: "Vous réalisez que vous venez de cliquer sur un lien de phishing et d'entrer votre mot de passe sur le faux site. Quelles sont les bonnes actions à faire immédiatement ?",
      options: [
        "Ne rien faire et attendre de voir si quelque chose d'anormal se produit",
        "Changer immédiatement le mot de passe (sur le vrai site), activer la double authentification et prévenir votre service IT/sécurité",
        "Supprimer l'email reçu pour ne plus y penser",
        "Redémarrer votre ordinateur, cela suffit à annuler l'action",
      ],
      correct: 1,
      explanation: "Agir vite limite les dégâts : changez immédiatement le mot de passe compromis (et tout autre compte utilisant le même), activez la double authentification, et signalez l'incident à votre service informatique ou de sécurité. Si des informations bancaires ont été saisies, contactez aussi votre banque.",
      flags: [],
    },
    /* ── QCM 11 ── */
    {
      id: 16, type: 'qcm',
      question: "Vous trouvez en ligne une boutique proposant des soldes à -80% sur le site 'boutique-officielle-soldes.shop', dont le nom de domaine a été créé il y a seulement 3 jours. Pourquoi est-ce suspect ?",
      options: [
        "Parce que les sites récents sont toujours plus rapides",
        "Parce qu'un site légitime établi n'aurait normalement pas un nom de domaine aussi récent ni des promotions aussi extrêmes",
        "Parce que l'extension '.shop' est réservée aux administrations",
        "Ce n'est pas suspect, un nouveau site peut très bien être fiable dès le premier jour",
      ],
      correct: 1,
      explanation: "Un domaine créé très récemment, combiné à des promotions irréalistes ('-80%'), est un signal classique de site frauduleux créé pour une campagne d'arnaque éphémère. Avant d'acheter, vérifiez les avis indépendants, l'ancienneté du site et privilégiez les enseignes que vous connaissez.",
      flags: [],
    },
    /* ── EMAIL 6 – Fraude au président / BEC (phishing) ── */
    {
      id: 17, type: 'email', is_phishing: true,
      email: {
        from_name:    "Sophie Martin — Directrice Générale",
        from_address: "s.martin.ceo@gmail.com",
        to:           "comptabilite@votreentreprise.fr",
        subject:      "Confidentiel — Virement urgent à effectuer aujourd'hui",
        body:         "Bonjour,\n\nJe suis actuellement en déplacement et injoignable par téléphone. J'ai besoin que vous traitiez en urgence et en toute confidentialité un virement de 18 500 € vers un nouveau prestataire pour finaliser une acquisition stratégique.\n\nNe communiquez à personne d'autre à ce sujet pour le moment, c'est sensible. Je vous envoie les coordonnées bancaires dans un message séparé.\n\nMerci de confirmer dès que c'est fait.\n\nCordialement,\nSophie Martin",
        cta_text:     "Répondre à la direction",
        cta_url:      "mailto:s.martin.ceo@gmail.com",
      },
      explanation: "Il s'agit d'une fraude au président (Business Email Compromise). Une vraie directrice générale n'utiliserait jamais une adresse Gmail personnelle pour ordonner un virement, et aucune entreprise sérieuse ne traite des virements importants dans la confidentialité et l'urgence, en contournant les procédures habituelles de validation. Ne traitez jamais ce type de demande sans vérifier par un autre canal (appel téléphonique au numéro habituel, pas celui fourni dans l'email).",
      flags: [
        { type: 'red', text: "Adresse '@gmail.com' au lieu du domaine professionnel de l'entreprise" },
        { type: 'red', text: "Demande de confidentialité absolue qui empêche toute vérification" },
        { type: 'red', text: "Urgence : virement à effectuer 'aujourd'hui'" },
        { type: 'red', text: "Contournement des procédures habituelles de validation des paiements" },
        { type: 'red', text: "Coordonnées bancaires envoyées séparément pour éviter la détection" },
      ],
    },
    /* ── EMAIL 7 – Faux service des impôts (phishing) ── */
    {
      id: 18, type: 'email', is_phishing: true,
      email: {
        from_name:    "Direction Générale des Finances Publiques",
        from_address: "remboursement@impots-gouv-services.com",
        to:           "vous@email.com",
        subject:      "Vous avez droit à un remboursement de 247,80 €",
        body:         "Madame, Monsieur,\n\nAprès vérification de votre dossier fiscal, nous avons déterminé que vous êtes éligible à un remboursement de 247,80 €.\n\nPour recevoir cette somme sur votre compte bancaire, vous devez confirmer vos coordonnées bancaires (RIB) avant le 15/06/2026. Passé ce délai, la demande sera annulée et la somme reversée au Trésor Public.\n\nVotre dossier de remboursement est prêt et n'attend que votre confirmation.",
        cta_text:     "Confirmer mes coordonnées bancaires",
        cta_url:      "http://impots-gouv-services.com/remboursement/confirmation",
      },
      explanation: "Le vrai site des impôts français est 'impots.gouv.fr' (domaine officiel en '.gouv.fr'). 'impots-gouv-services.com' est un domaine frauduleux qui imite le nom officiel. L'administration fiscale ne demande jamais de confirmer un RIB par email avec un lien externe — les remboursements se gèrent depuis votre espace personnel officiel.",
      flags: [
        { type: 'red', text: "Faux domaine 'impots-gouv-services.com' (le vrai : 'impots.gouv.fr')" },
        { type: 'red', text: "Demande de RIB par email avec un lien externe" },
        { type: 'red', text: "Date limite courte avec menace d'annulation du remboursement" },
        { type: 'red', text: "URL en HTTP non sécurisé" },
        { type: 'red', text: "L'administration fiscale communique via votre espace personnel officiel, jamais par lien email" },
      ],
    },
    /* ── EMAIL 8 – Faux suivi de colis (phishing) ── */
    {
      id: 19, type: 'email', is_phishing: true,
      email: {
        from_name:    "Colissimo - Suivi de colis",
        from_address: "notification@colissimo-tracking-fr.com",
        to:           "vous@email.com",
        subject:      "📦 Votre colis est en attente — frais de réexpédition requis",
        body:         "Bonjour,\n\nNous n'avons pas pu livrer votre colis n° FR294857103 car les frais de réexpédition de 1,99 € n'ont pas été réglés.\n\nVotre colis sera retourné à l'expéditeur sous 24 heures si le paiement n'est pas effectué.\n\nRégularisez votre situation dès maintenant pour recevoir votre colis.",
        cta_text:     "Payer les frais et débloquer mon colis",
        cta_url:      "http://colissimo-tracking-fr.com/payment/redirect-fees",
      },
      explanation: "Le vrai domaine de Colissimo est 'colissimo.fr' (filiale de La Poste). 'colissimo-tracking-fr.com' est un faux domaine. Ce type d'arnaque, très répandu, vise à voler vos données bancaires via un faux paiement de quelques euros — le montant modeste est volontaire pour endormir la méfiance. Un transporteur ne demande jamais de micro-paiement par email pour livrer un colis.",
      flags: [
        { type: 'red', text: "Faux domaine 'colissimo-tracking-fr.com' (le vrai : 'colissimo.fr')" },
        { type: 'red', text: "Demande de paiement de 'frais de réexpédition' inhabituelle pour un colis" },
        { type: 'red', text: "Montant volontairement faible (1,99 €) pour réduire la méfiance" },
        { type: 'red', text: "Urgence : 24 heures avant retour à l'expéditeur" },
        { type: 'red', text: "URL en HTTP non sécurisé" },
      ],
    },
    /* ── EMAIL 9 – Faux Netflix (phishing) ── */
    {
      id: 20, type: 'email', is_phishing: true,
      email: {
        from_name:    "Netflix",
        from_address: "compte@netflix-paiement-client.com",
        to:           "vous@email.com",
        subject:      "Votre abonnement a été suspendu — moyen de paiement refusé",
        body:         "Bonjour,\n\nNous n'avons pas pu traiter le paiement de votre abonnement. Votre compte a été temporairement suspendu.\n\nPour continuer à profiter de vos séries et films préférés sans interruption, merci de mettre à jour vos informations de paiement dans les 24 heures.\n\nAprès ce délai, votre compte et votre historique seront définitivement supprimés.",
        cta_text:     "Mettre à jour mon moyen de paiement",
        cta_url:      "http://netflix-paiement-client.com/update-billing",
      },
      explanation: "Le vrai domaine de Netflix est 'netflix.com'. 'netflix-paiement-client.com' est un domaine frauduleux conçu pour voler vos données de carte bancaire. Netflix ne supprime jamais votre compte ni votre historique en 24 heures, et vous invite toujours à gérer votre paiement directement depuis l'application ou le site officiel.",
      flags: [
        { type: 'red', text: "Faux domaine 'netflix-paiement-client.com' (le vrai : 'netflix.com')" },
        { type: 'red', text: "Urgence : 24 heures avant suppression définitive du compte" },
        { type: 'red', text: "URL en HTTP non sécurisé" },
        { type: 'red', text: "Lien externe pour 'mettre à jour' un moyen de paiement, au lieu de passer par l'app/le site officiel" },
        { type: 'red', text: "Menace de perte définitive (compte et historique)" },
      ],
    },
    /* ── EMAIL 10 – Partage Google Docs (légitime) ── */
    {
      id: 21, type: 'email', is_phishing: false,
      email: {
        from_name:    "Google Docs",
        from_address: "drive-shares-noreply@google.com",
        to:           "vous@email.com",
        subject:      "Camille Durand a partagé un document avec vous : « Plan projet Q3 »",
        body:         "Camille Durand (camille.durand@votreentreprise.fr) a partagé le document suivant avec vous :\n\n« Plan projet Q3 »\n\nCe document se trouve dans Google Drive, le service de stockage et de partage de fichiers de Google.\n\nVous pouvez l'ouvrir directement depuis votre compte Google.",
        cta_text:     "Ouvrir dans Google Docs",
        cta_url:      "https://docs.google.com/document/d/1aBcD3FgHiJkLmNoPqRsTuVwXyZ/edit",
      },
      explanation: "Cet email est légitime. Il provient bien du domaine officiel 'google.com', mentionne le nom et l'adresse professionnelle réelle de la personne qui partage le document, et le lien pointe vers 'docs.google.com' — le vrai service Google Docs. Aucune urgence, aucune demande d'identifiants : c'est une notification de partage standard.",
      flags: [
        { type: 'green', text: "Domaine officiel de l'expéditeur : 'google.com'" },
        { type: 'green', text: "Nom et adresse professionnelle vérifiables de la personne qui partage" },
        { type: 'green', text: "Lien pointant vers 'docs.google.com', le vrai service Google" },
        { type: 'green', text: "Aucune demande d'identifiants ni d'informations personnelles" },
        { type: 'green', text: "Aucun sentiment d'urgence ni de menace" },
      ],
    },
  ],
},

/* ════════════════════════════════════════════════════
   ENGLISH
════════════════════════════════════════════════════ */
en: {
  ui: {
    game_title:      "The Phishing Game",
    brought_by:      "Brought to you by",
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
    back_to_quiz:    "Back to the quiz",
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
      question: "Does a website showing a padlock (HTTPS) in the address bar mean it's safe?",
      options: [
        "Yes, the padlock guarantees the site is legitimate and harmless",
        "No, HTTPS only means the connection is encrypted — a phishing site can have a padlock too",
        "The padlock proves the company paid for a premium security certification",
        "Only government websites can obtain the HTTPS padlock",
      ],
      correct: 1,
      explanation: "The HTTPS padlock only means the data exchanged between you and the site is encrypted — it says nothing about whether the site is legitimate. Anyone, including cybercriminals, can get a free HTTPS certificate. Never rely on the padlock alone to judge a site's trustworthiness.",
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
    /* ── QCM 6 ── */
    {
      id: 11, type: 'qcm',
      question: "You receive an email with an attachment named 'Unpaid_invoice.docm' asking you to enable macros to display it correctly. What do you do?",
      options: [
        "You open it and enable macros, it's probably important",
        "You open it without enabling macros to check the content",
        "You don't open it and delete the email: macros in an unexpected attachment are a classic red flag",
        "You forward the attachment to a colleague for their opinion",
      ],
      correct: 2,
      explanation: "Office files with macros (.docm, .xlsm) are a very common way to install malware. Enabling macros at the request of an unexpected email lets malicious code run on your machine. Never enable macros on an unsolicited attachment, and report the email to your IT department.",
      flags: [],
    },
    /* ── QCM 7 ── */
    {
      id: 12, type: 'qcm',
      question: "An email shows 'Bank Customer Service <support@bp-info-system24.ru>' as the sender. What should you check first?",
      options: [
        "The display name 'Bank Customer Service', which looks official",
        "The actual email address after the '@': 'bp-info-system24.ru' has nothing to do with the bank",
        "Whether there is a logo in the email signature",
        "The polite, professional tone of the message",
      ],
      correct: 1,
      explanation: "An attacker can freely set the sender's display name — it proves nothing. Only the full email address after the '@' reveals the real sender. Here, the '.ru' domain has no connection to a bank, which gives away the spoofing.",
      flags: [],
    },
    /* ── QCM 8 ── */
    {
      id: 13, type: 'qcm',
      question: "Within a few minutes, your phone receives ten login approval (multi-factor authentication) prompts even though you're not trying to sign in. What's the right reaction?",
      options: [
        "You eventually approve one just to make it stop",
        "You deny every request and change your password immediately",
        "You ignore the notifications, they'll eventually stop on their own",
        "You call the number shown in the notification to check",
      ],
      correct: 1,
      explanation: "This technique is called 'MFA fatigue' (or MFA bombing): an attacker who already has your password sends repeated authentication prompts hoping you'll approve one out of annoyance or by mistake. Always deny, change your password immediately, and alert your security team — someone already knows your credentials.",
      flags: [],
    },
    /* ── QCM 9 ── */
    {
      id: 14, type: 'qcm',
      question: "You receive an email announcing that you've won €50,000 in an international lottery you never entered. How do you react?",
      options: [
        "You reply with your bank details to receive the prize",
        "You pay the requested 'processing fees' to release the transfer",
        "You delete the email: you can't win a draw you never entered",
        "You forward the email to your friends and family just in case it's real",
      ],
      correct: 2,
      explanation: "A simple rule: you can't win a lottery you never entered. These scams aim to make you pay fake fees or steal your banking details in exchange for a prize that doesn't exist. If it sounds too good to be true, it is.",
      flags: [],
    },
    /* ── QCM 10 ── */
    {
      id: 15, type: 'qcm',
      question: "You realise you've just clicked a phishing link and entered your password on the fake site. What should you do immediately?",
      options: [
        "Do nothing and wait to see if anything unusual happens",
        "Immediately change the compromised password (on the real site), enable multi-factor authentication, and notify your IT/security team",
        "Delete the email so you don't have to think about it anymore",
        "Restart your computer — that's enough to undo the action",
      ],
      correct: 1,
      explanation: "Acting fast limits the damage: change the compromised password right away (and any other account using the same one), enable multi-factor authentication, and report the incident to your IT or security team. If banking details were entered, contact your bank too.",
      flags: [],
    },
    /* ── QCM 11 ── */
    {
      id: 16, type: 'qcm',
      question: "You find an online shop offering 80%-off sales at 'official-outlet-deals.shop', whose domain name was registered just 3 days ago. Why is this suspicious?",
      options: [
        "Because newer sites are always faster",
        "Because an established legitimate business wouldn't normally have such a brand-new domain name or such extreme discounts",
        "Because the '.shop' extension is reserved for government sites",
        "It isn't suspicious — a new site can be perfectly trustworthy from day one",
      ],
      correct: 1,
      explanation: "A very recently registered domain combined with unrealistic discounts ('-80%') is a classic sign of a fraudulent site set up for a short-lived scam campaign. Before buying, check independent reviews, the site's age, and prefer retailers you already know.",
      flags: [],
    },
    /* ── EMAIL 6 – CEO fraud / BEC (phishing) ── */
    {
      id: 17, type: 'email', is_phishing: true,
      email: {
        from_name:    "Sarah Mitchell — Chief Executive Officer",
        from_address: "s.mitchell.ceo@gmail.com",
        to:           "accounts@yourcompany.com",
        subject:      "Confidential — Urgent transfer needed today",
        body:         "Hi,\n\nI'm currently travelling and can't be reached by phone. I need you to urgently and confidentially process a transfer of £18,500 to a new supplier to finalise a strategic acquisition.\n\nPlease don't discuss this with anyone else for now, it's sensitive. I'll send you the bank details in a separate message.\n\nPlease confirm once it's done.\n\nKind regards,\nSarah Mitchell",
        cta_text:     "Reply to management",
        cta_url:      "mailto:s.mitchell.ceo@gmail.com",
      },
      explanation: "This is CEO fraud (Business Email Compromise). A real CEO would never use a personal Gmail address to order a transfer, and no serious company processes large transfers in secrecy and urgency, bypassing normal validation procedures. Never act on this kind of request without verifying through another channel (a phone call to the usual number, not one provided in the email).",
      flags: [
        { type: 'red', text: "'@gmail.com' address instead of the company's professional domain" },
        { type: 'red', text: "Demand for absolute confidentiality that prevents any verification" },
        { type: 'red', text: "Urgency: transfer must be done 'today'" },
        { type: 'red', text: "Bypassing the usual payment validation procedures" },
        { type: 'red', text: "Bank details sent separately to avoid detection" },
      ],
    },
    /* ── EMAIL 7 – Fake tax authority (phishing) ── */
    {
      id: 18, type: 'email', is_phishing: true,
      email: {
        from_name:    "HM Revenue & Customs",
        from_address: "refunds@hmrc-tax-services.com",
        to:           "you@email.com",
        subject:      "You are entitled to a tax refund of £247.80",
        body:         "Dear taxpayer,\n\nAfter reviewing your tax file, we have determined that you are eligible for a refund of £247.80.\n\nTo receive this amount in your bank account, you must confirm your banking details before 15/06/2026. After this deadline, the request will be cancelled and the amount returned to the Treasury.\n\nYour refund file is ready and only awaits your confirmation.",
        cta_text:     "Confirm my banking details",
        cta_url:      "http://hmrc-tax-services.com/refund/confirmation",
      },
      explanation: "The real website of the UK tax authority is 'gov.uk' (official '.gov.uk' domain). 'hmrc-tax-services.com' is a fraudulent domain mimicking the official name. Tax authorities never ask you to confirm bank details by email with an external link — refunds are managed through your official online account.",
      flags: [
        { type: 'red', text: "Fake domain 'hmrc-tax-services.com' (the real one uses '.gov.uk')" },
        { type: 'red', text: "Request for bank details by email with an external link" },
        { type: 'red', text: "Short deadline with threat of cancelling the refund" },
        { type: 'red', text: "Insecure HTTP URL" },
        { type: 'red', text: "Tax authorities communicate via your official online account, never via an email link" },
      ],
    },
    /* ── EMAIL 8 – Fake parcel tracking (phishing) ── */
    {
      id: 19, type: 'email', is_phishing: true,
      email: {
        from_name:    "DHL - Parcel Tracking",
        from_address: "notification@dhl-tracking-redelivery.com",
        to:           "you@email.com",
        subject:      "📦 Your parcel is on hold — redelivery fee required",
        body:         "Hello,\n\nWe were unable to deliver your parcel #DH294857103 because the redelivery fee of £1.99 has not been paid.\n\nYour parcel will be returned to the sender within 24 hours if payment is not made.\n\nSettle this now to receive your parcel.",
        cta_text:     "Pay the fee and release my parcel",
        cta_url:      "http://dhl-tracking-redelivery.com/payment/redirect-fees",
      },
      explanation: "DHL's real domain is 'dhl.com'. 'dhl-tracking-redelivery.com' is a fake domain. This very common scam aims to steal your banking details through a fake payment of just a few pounds — the small amount is deliberate, designed to lower your guard. A carrier never asks for a micro-payment by email to deliver a parcel.",
      flags: [
        { type: 'red', text: "Fake domain 'dhl-tracking-redelivery.com' (the real one: 'dhl.com')" },
        { type: 'red', text: "Unusual request to pay a 'redelivery fee' for a parcel" },
        { type: 'red', text: "Deliberately small amount (£1.99) to reduce suspicion" },
        { type: 'red', text: "Urgency: 24 hours before the parcel is returned to sender" },
        { type: 'red', text: "Insecure HTTP URL" },
      ],
    },
    /* ── EMAIL 9 – Fake Netflix (phishing) ── */
    {
      id: 20, type: 'email', is_phishing: true,
      email: {
        from_name:    "Netflix",
        from_address: "account@netflix-billing-update.com",
        to:           "you@email.com",
        subject:      "Your subscription has been suspended — payment method declined",
        body:         "Hello,\n\nWe were unable to process payment for your subscription. Your account has been temporarily suspended.\n\nTo keep enjoying your favourite shows and movies without interruption, please update your payment information within 24 hours.\n\nAfter this deadline, your account and viewing history will be permanently deleted.",
        cta_text:     "Update my payment method",
        cta_url:      "http://netflix-billing-update.com/update-billing",
      },
      explanation: "Netflix's real domain is 'netflix.com'. 'netflix-billing-update.com' is a fraudulent domain designed to steal your card details. Netflix never deletes your account or viewing history within 24 hours, and always invites you to manage your payment directly from the app or official website.",
      flags: [
        { type: 'red', text: "Fake domain 'netflix-billing-update.com' (the real one: 'netflix.com')" },
        { type: 'red', text: "Urgency: 24 hours before permanent account deletion" },
        { type: 'red', text: "Insecure HTTP URL" },
        { type: 'red', text: "External link to 'update' a payment method instead of going through the official app/site" },
        { type: 'red', text: "Threat of permanent loss (account and history)" },
      ],
    },
    /* ── EMAIL 10 – Google Docs share (legitimate) ── */
    {
      id: 21, type: 'email', is_phishing: false,
      email: {
        from_name:    "Google Docs",
        from_address: "drive-shares-noreply@google.com",
        to:           "you@email.com",
        subject:      "Alex Carter shared a document with you: \"Q3 project plan\"",
        body:         "Alex Carter (alex.carter@yourcompany.com) shared the following document with you:\n\n\"Q3 project plan\"\n\nThis document is in Google Drive, Google's file storage and sharing service.\n\nYou can open it directly from your Google account.",
        cta_text:     "Open in Google Docs",
        cta_url:      "https://docs.google.com/document/d/1aBcD3FgHiJkLmNoPqRsTuVwXyZ/edit",
      },
      explanation: "This email is legitimate. It genuinely comes from the official 'google.com' domain, mentions the real name and work address of the person sharing the document, and the link points to 'docs.google.com' — the real Google Docs service. No urgency, no request for credentials: it's a standard sharing notification.",
      flags: [
        { type: 'green', text: "Official sender domain: 'google.com'" },
        { type: 'green', text: "Verifiable name and work address of the person sharing" },
        { type: 'green', text: "Link pointing to 'docs.google.com', the real Google service" },
        { type: 'green', text: "No request for credentials or personal information" },
        { type: 'green', text: "No sense of urgency or threat" },
      ],
    },
  ],
},

/* ════════════════════════════════════════════════════
   ESPAÑOL
════════════════════════════════════════════════════ */
es: {
  ui: {
    game_title:      "El Juego de Phishing",
    brought_by:      "Presentado por",
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
    back_to_quiz:    "Volver al quiz",
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
      question: "¿Un sitio web que muestra un candado (HTTPS) en la barra de direcciones es necesariamente seguro?",
      options: [
        "Sí, el candado garantiza que el sitio es legítimo e inofensivo",
        "No, HTTPS solo significa que la conexión está cifrada — un sitio de phishing también puede tener candado",
        "El candado prueba que la empresa pagó por una certificación de seguridad premium",
        "Solo los sitios gubernamentales pueden obtener el candado HTTPS",
      ],
      correct: 1,
      explanation: "El candado HTTPS solo indica que los datos intercambiados entre usted y el sitio están cifrados — no garantiza en absoluto la legitimidad del sitio. Cualquiera, incluidos los ciberdelincuentes, puede obtener gratis un certificado HTTPS. Nunca confíe únicamente en el candado para juzgar la fiabilidad de un sitio.",
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
    /* ── QCM 6 ── */
    {
      id: 11, type: 'qcm',
      question: "Recibes un email con un archivo adjunto llamado 'Factura_impagada.docm' que te pide activar las macros para mostrarlo correctamente. ¿Qué haces?",
      options: [
        "Lo abres y activas las macros, seguro que es importante",
        "Lo abres sin activar las macros para comprobar el contenido",
        "No lo abres y eliminas el email: las macros en un adjunto inesperado son una señal de alarma clásica",
        "Reenvías el adjunto a un compañero para que te dé su opinión",
      ],
      correct: 2,
      explanation: "Los archivos de Office con macros (.docm, .xlsm) son un método muy habitual para instalar malware. Activar las macros a petición de un email inesperado permite que el código malicioso se ejecute en tu equipo. Nunca actives las macros en un adjunto no solicitado, e informa del email a tu departamento de IT.",
      flags: [],
    },
    /* ── QCM 7 ── */
    {
      id: 12, type: 'qcm',
      question: "Un email muestra 'Atención al Cliente del Banco <support@bp-info-system24.ru>' como remitente. ¿Qué deberías mirar primero?",
      options: [
        "El nombre mostrado 'Atención al Cliente del Banco', que parece oficial",
        "La dirección de email real tras la '@': 'bp-info-system24.ru' no tiene relación alguna con el banco",
        "La presencia de un logotipo en la firma del email",
        "El tono educado y profesional del mensaje",
      ],
      correct: 1,
      explanation: "El nombre mostrado de un remitente puede ser modificado libremente por el atacante — no demuestra nada. Solo la dirección de email completa tras la '@' revela al verdadero remitente. Aquí, el dominio '.ru' no tiene ninguna relación con un banco, lo que delata la suplantación.",
      flags: [],
    },
    /* ── QCM 8 ── */
    {
      id: 13, type: 'qcm',
      question: "En pocos minutos, tu teléfono recibe diez notificaciones de validación de inicio de sesión (doble factor) sin que estés intentando conectarte. ¿Cuál es la reacción correcta?",
      options: [
        "Acabas aceptando una notificación para que pare de una vez",
        "Rechazas todas las solicitudes y cambias tu contraseña de inmediato",
        "Ignoras las notificaciones, terminarán por detenerse solas",
        "Llamas al número que aparece en la notificación para comprobarlo",
      ],
      correct: 1,
      explanation: "Esta técnica se llama 'fatiga de MFA' (o bombing): un atacante que ya tiene tu contraseña envía múltiples solicitudes de autenticación con la esperanza de que aceptes una por cansancio o error. Recházalas siempre, cambia tu contraseña de inmediato y avisa a tu equipo de seguridad — alguien ya conoce tus credenciales.",
      flags: [],
    },
    /* ── QCM 9 ── */
    {
      id: 14, type: 'qcm',
      question: "Recibes un email anunciando que has ganado 50.000 € en una lotería internacional en la que nunca participaste. ¿Cómo reaccionas?",
      options: [
        "Respondes facilitando tus datos bancarios para recibir el premio",
        "Pagas los 'gastos de gestión' solicitados para liberar la transferencia",
        "Eliminas el email: nunca se gana un sorteo en el que no se ha participado",
        "Reenvías el email a tus seres queridos por si fuera cierto",
      ],
      correct: 2,
      explanation: "Una regla simple: no se puede ganar una lotería en la que no se ha participado. Estas estafas buscan que pagues falsos gastos o robar tus datos bancarios a cambio de un premio que no existe. Si suena demasiado bueno para ser verdad, es que no lo es.",
      flags: [],
    },
    /* ── QCM 10 ── */
    {
      id: 15, type: 'qcm',
      question: "Te das cuenta de que acabas de hacer clic en un enlace de phishing e introducir tu contraseña en el sitio falso. ¿Qué debes hacer de inmediato?",
      options: [
        "No hacer nada y esperar a ver si ocurre algo extraño",
        "Cambiar de inmediato la contraseña (en el sitio real), activar la doble autenticación y avisar a tu equipo de IT/seguridad",
        "Eliminar el email recibido para no pensar más en ello",
        "Reiniciar tu ordenador, eso basta para anular la acción",
      ],
      correct: 1,
      explanation: "Actuar rápido limita el daño: cambia de inmediato la contraseña comprometida (y cualquier otra cuenta que use la misma), activa la doble autenticación y reporta el incidente a tu equipo de informática o seguridad. Si introdujiste datos bancarios, contacta también con tu banco.",
      flags: [],
    },
    /* ── QCM 11 ── */
    {
      id: 16, type: 'qcm',
      question: "Encuentras una tienda online que ofrece rebajas del -80% en el sitio 'tienda-oficial-ofertas.shop', cuyo dominio se registró hace solo 3 días. ¿Por qué resulta sospechoso?",
      options: [
        "Porque los sitios recientes siempre son más rápidos",
        "Porque un negocio legítimo y establecido normalmente no tendría un dominio tan reciente ni promociones tan extremas",
        "Porque la extensión '.shop' está reservada para administraciones públicas",
        "No es sospechoso, un sitio nuevo puede ser perfectamente fiable desde el primer día",
      ],
      correct: 1,
      explanation: "Un dominio registrado hace muy poco, combinado con descuentos poco realistas ('-80%'), es una señal clásica de sitio fraudulento creado para una campaña de estafa efímera. Antes de comprar, consulta opiniones independientes, la antigüedad del sitio y prefiere comercios que ya conozcas.",
      flags: [],
    },
    /* ── EMAIL 6 – Fraude del CEO / BEC (phishing) ── */
    {
      id: 17, type: 'email', is_phishing: true,
      email: {
        from_name:    "Sofía Martín — Directora General",
        from_address: "s.martin.ceo@gmail.com",
        to:           "contabilidad@tuempresa.es",
        subject:      "Confidencial — Transferencia urgente a realizar hoy",
        body:         "Hola,\n\nEstoy de viaje y no puedo atender llamadas. Necesito que proceses con urgencia y de forma confidencial una transferencia de 18.500 € a un nuevo proveedor para cerrar una adquisición estratégica.\n\nNo lo comentes con nadie más por ahora, es delicado. Te enviaré los datos bancarios en un mensaje aparte.\n\nConfírmame en cuanto esté hecho.\n\nUn saludo,\nSofía Martín",
        cta_text:     "Responder a dirección",
        cta_url:      "mailto:s.martin.ceo@gmail.com",
      },
      explanation: "Se trata de una fraude del CEO (Business Email Compromise). Una verdadera directora general nunca usaría una dirección de Gmail personal para ordenar una transferencia, y ninguna empresa seria gestiona transferencias importantes con confidencialidad y urgencia, saltándose los procedimientos habituales de validación. Nunca proceses este tipo de solicitud sin verificarla por otro canal (una llamada al número habitual, no al que aparece en el email).",
      flags: [
        { type: 'red', text: "Dirección '@gmail.com' en lugar del dominio profesional de la empresa" },
        { type: 'red', text: "Solicitud de confidencialidad absoluta que impide cualquier verificación" },
        { type: 'red', text: "Urgencia: transferencia a realizar 'hoy'" },
        { type: 'red', text: "Se saltan los procedimientos habituales de validación de pagos" },
        { type: 'red', text: "Datos bancarios enviados por separado para evitar la detección" },
      ],
    },
    /* ── EMAIL 7 – Falsa Agencia Tributaria (phishing) ── */
    {
      id: 18, type: 'email', is_phishing: true,
      email: {
        from_name:    "Agencia Tributaria",
        from_address: "devoluciones@agencia-tributaria-online.com",
        to:           "tu@email.com",
        subject:      "Tienes derecho a una devolución de 247,80 €",
        body:         "Estimado/a contribuyente,\n\nTras revisar tu expediente fiscal, hemos determinado que tienes derecho a una devolución de 247,80 €.\n\nPara recibir este importe en tu cuenta bancaria, debes confirmar tus datos bancarios antes del 15/06/2026. Pasado ese plazo, la solicitud será cancelada y el importe devuelto al Tesoro Público.\n\nTu expediente de devolución está listo y solo espera tu confirmación.",
        cta_text:     "Confirmar mis datos bancarios",
        cta_url:      "http://agencia-tributaria-online.com/devolucion/confirmacion",
      },
      explanation: "El sitio real de la Agencia Tributaria es 'agenciatributaria.gob.es' (dominio oficial en '.gob.es'). 'agencia-tributaria-online.com' es un dominio fraudulento que imita el nombre oficial. La administración tributaria nunca pide confirmar datos bancarios por email con un enlace externo — las devoluciones se gestionan desde tu sede electrónica oficial.",
      flags: [
        { type: 'red', text: "Dominio falso 'agencia-tributaria-online.com' (el real: 'agenciatributaria.gob.es')" },
        { type: 'red', text: "Solicitud de datos bancarios por email con un enlace externo" },
        { type: 'red', text: "Plazo corto con amenaza de cancelar la devolución" },
        { type: 'red', text: "URL en HTTP inseguro" },
        { type: 'red', text: "La administración tributaria se comunica a través de tu sede electrónica oficial, nunca por enlace de email" },
      ],
    },
    /* ── EMAIL 8 – Falso seguimiento de paquete (phishing) ── */
    {
      id: 19, type: 'email', is_phishing: true,
      email: {
        from_name:    "Correos - Seguimiento de paquetes",
        from_address: "notificacion@correos-seguimiento-es.com",
        to:           "tu@email.com",
        subject:      "📦 Tu paquete está retenido — gastos de reenvío pendientes",
        body:         "Hola,\n\nNo hemos podido entregar tu paquete n.º ES294857103 porque los gastos de reenvío de 1,99 € no se han abonado.\n\nTu paquete será devuelto al remitente en 24 horas si no se realiza el pago.\n\nRegulariza tu situación ahora mismo para recibir tu paquete.",
        cta_text:     "Pagar los gastos y desbloquear mi paquete",
        cta_url:      "http://correos-seguimiento-es.com/pago/redireccion-gastos",
      },
      explanation: "El dominio real de Correos es 'correos.es'. 'correos-seguimiento-es.com' es un dominio falso. Este tipo de estafa, muy extendida, busca robar tus datos bancarios mediante un falso pago de pocos euros — el importe reducido es deliberado, para reducir tus sospechas. Un transportista nunca pide un micropago por email para entregar un paquete.",
      flags: [
        { type: 'red', text: "Dominio falso 'correos-seguimiento-es.com' (el real: 'correos.es')" },
        { type: 'red', text: "Solicitud de pago de 'gastos de reenvío' inusual para un paquete" },
        { type: 'red', text: "Importe deliberadamente bajo (1,99 €) para reducir la desconfianza" },
        { type: 'red', text: "Urgencia: 24 horas antes de la devolución al remitente" },
        { type: 'red', text: "URL en HTTP inseguro" },
      ],
    },
    /* ── EMAIL 9 – Falso Netflix (phishing) ── */
    {
      id: 20, type: 'email', is_phishing: true,
      email: {
        from_name:    "Netflix",
        from_address: "cuenta@netflix-actualizar-pago.com",
        to:           "tu@email.com",
        subject:      "Tu suscripción ha sido suspendida — método de pago rechazado",
        body:         "Hola,\n\nNo hemos podido procesar el pago de tu suscripción. Tu cuenta ha sido suspendida temporalmente.\n\nPara seguir disfrutando de tus series y películas favoritas sin interrupciones, actualiza tus datos de pago en las próximas 24 horas.\n\nPasado ese plazo, tu cuenta y tu historial se eliminarán de forma permanente.",
        cta_text:     "Actualizar mi método de pago",
        cta_url:      "http://netflix-actualizar-pago.com/update-billing",
      },
      explanation: "El dominio real de Netflix es 'netflix.com'. 'netflix-actualizar-pago.com' es un dominio fraudulento diseñado para robar los datos de tu tarjeta. Netflix nunca elimina tu cuenta ni tu historial en 24 horas, y siempre te invita a gestionar tu pago directamente desde la aplicación o el sitio oficial.",
      flags: [
        { type: 'red', text: "Dominio falso 'netflix-actualizar-pago.com' (el real: 'netflix.com')" },
        { type: 'red', text: "Urgencia: 24 horas antes de la eliminación definitiva de la cuenta" },
        { type: 'red', text: "URL en HTTP inseguro" },
        { type: 'red', text: "Enlace externo para 'actualizar' un método de pago, en lugar de usar la app/el sitio oficial" },
        { type: 'red', text: "Amenaza de pérdida definitiva (cuenta e historial)" },
      ],
    },
    /* ── EMAIL 10 – Compartir en Google Docs (legítimo) ── */
    {
      id: 21, type: 'email', is_phishing: false,
      email: {
        from_name:    "Google Docs",
        from_address: "drive-shares-noreply@google.com",
        to:           "tu@email.com",
        subject:      "Carmen Ruiz ha compartido un documento contigo: «Plan de proyecto T3»",
        body:         "Carmen Ruiz (carmen.ruiz@tuempresa.es) ha compartido el siguiente documento contigo:\n\n«Plan de proyecto T3»\n\nEste documento está en Google Drive, el servicio de almacenamiento y uso compartido de archivos de Google.\n\nPuedes abrirlo directamente desde tu cuenta de Google.",
        cta_text:     "Abrir en Google Docs",
        cta_url:      "https://docs.google.com/document/d/1aBcD3FgHiJkLmNoPqRsTuVwXyZ/edit",
      },
      explanation: "Este email es legítimo. Procede realmente del dominio oficial 'google.com', menciona el nombre y la dirección profesional reales de la persona que comparte el documento, y el enlace apunta a 'docs.google.com' — el verdadero servicio de Google Docs. Sin urgencia, sin solicitud de credenciales: es una notificación de uso compartido estándar.",
      flags: [
        { type: 'green', text: "Dominio oficial del remitente: 'google.com'" },
        { type: 'green', text: "Nombre y dirección profesional verificables de la persona que comparte" },
        { type: 'green', text: "Enlace que apunta a 'docs.google.com', el verdadero servicio de Google" },
        { type: 'green', text: "Sin solicitud de credenciales ni información personal" },
        { type: 'green', text: "Sin sensación de urgencia ni amenazas" },
      ],
    },
  ],
},

}; // end LOCALES
