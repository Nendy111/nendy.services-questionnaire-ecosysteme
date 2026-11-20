// ===== Mails DA 2026 (validés par Nendy le 20/11/2026) : quiz besoin, quiz entrepreneur, score =====
const INK = '#1a1714', CREAM = '#f5f1e6', GOLD = '#c9ad6a', FUX = '#ee07a5', SAGE = '#7b9a80', SAND = '#d8c79e', MUTED = '#6b6358';
const SER = "Georgia,'Times New Roman',serif", SANS = 'Arial,Helvetica,sans-serif', MONO = "'Courier New',Courier,monospace";
const SPIRALE = 'https://nendyservices.com/img/nendy-spirale-512.png';
const nb = (h: string) => h.replace(/ ([:;?!])(?=[\s<&])/g, '&nbsp;$1');
const lab = (x: string) => `<div style="font-family:${MONO};font-size:11px;letter-spacing:3px;text-transform:uppercase;color:${GOLD};padding-bottom:14px">${x}</div>`;
const bar = (pct: number, col: string, h = 8) => `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-radius:4px;overflow:hidden;background:#ece3cf"><tr><td width="${Math.max(pct, 2)}%" style="height:${h}px;background:${col};font-size:0;line-height:0">&nbsp;</td><td style="font-size:0;line-height:0">&nbsp;</td></tr></table>`;
function refDate(prefix: string) {
  const d = new Date();
  const date = d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'America/Guadeloupe' });
  const ref = `${prefix}-${String(d.getUTCFullYear()).slice(2)}${String(d.getUTCMonth() + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 9000) + 1000)}`;
  return { ref, date };
}
function shell(o: { kicker: string; prefix: string; preheader: string; body: string }) {
  const { ref, date } = refDate(o.prefix);
  return nb(`<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:${CREAM}">
<div style="display:none;max-height:0;overflow:hidden">${o.preheader}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${CREAM}"><tr><td align="center" style="padding:28px 12px">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#fffdf8;border:1px solid #e6dcc4;border-radius:18px;overflow:hidden">
<tr><td style="background:${INK};padding:26px 34px"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
 <td width="56" valign="middle"><img src="${SPIRALE}" width="44" height="44" alt="Nendy Services" style="display:block;border:0;border-radius:22px;background:${CREAM}"></td>
 <td valign="middle" style="padding-left:14px"><div style="font-family:${MONO};font-size:11px;letter-spacing:3px;text-transform:uppercase;color:${GOLD}">${o.kicker}</div><div style="font-family:${SER};font-size:19px;color:${CREAM};padding-top:4px">Nendy Services</div></td>
 <td align="right" valign="middle" style="font-family:${MONO};font-size:10px;letter-spacing:1.5px;line-height:1.7;color:#a89f92;text-transform:uppercase">Réf. ${ref}<br>${date}</td></tr></table></td></tr>
<tr><td style="height:3px;background:${GOLD};font-size:0;line-height:0">&nbsp;</td></tr>
${o.body}
<tr><td style="padding:32px 34px 30px">
 <div style="border-top:1px solid ${SAND};padding-top:20px;font-family:${SER};font-style:italic;font-size:20px;color:${INK}">Nendy</div>
 <div style="font-family:${MONO};font-size:10px;letter-spacing:2px;text-transform:uppercase;color:${MUTED};padding-top:4px">Assistante virtuelle &amp; conceptrice d’écosystèmes digitaux</div>
 <div style="font-family:${SANS};font-size:13px;font-style:italic;font-weight:bold;color:${FUX};padding-top:16px">L’harmonie entre organisation et assistance.</div>
</td></tr></table>
<div style="font-family:${MONO};font-size:10px;letter-spacing:2px;color:#a89f92;padding-top:16px">@NENDY_SERVICES · NENDYSERVICES.COM</div>
</td></tr></table></body></html>`);
}
const hero = (kick: string, badge: string, col: string, title: string, tag: string, big = 34) => `<tr><td style="padding:34px 34px 6px">
 ${lab('◆ ' + kick)}
 <span style="display:inline-block;background:${col};color:#ffffff;font-family:${MONO};font-size:11px;letter-spacing:2px;text-transform:uppercase;padding:7px 14px;border-radius:99px">${badge}</span>
 <h1 style="margin:18px 0 0;font-family:${SER};font-weight:normal;font-size:${big}px;line-height:1.1;color:${INK}">${title}</h1>
 <p style="margin:14px 0 0;font-family:${SER};font-style:italic;font-size:19px;line-height:1.4;color:#5a524a">${tag}</p></td></tr>`;
const box = (inner: string) => `<tr><td style="padding:28px 34px 4px"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e6dcc4;border-radius:14px;background:${CREAM}"><tr><td style="padding:22px 22px 20px">${inner}</td></tr></table></td></tr>`;
const lecture = (bonjour: string, merci: string, bravo: string, texte: string) => `<tr><td style="padding:28px 34px 0">${lab('Ce que ça veut dire')}
 <p style="margin:0;font-family:${SANS};font-size:16px;line-height:1.65;color:#3a3530">${bonjour}<br><br>${merci}<br><br><b style="color:${INK}">${bravo}</b><br><br>${texte}</p></td></tr>`;
const etapes = (titre: string, steps: [string, string, string?][]) => `<tr><td style="padding:30px 34px 4px">${lab(titre)}<table role="presentation" width="100%" cellpadding="0" cellspacing="0">${steps.map(([a, b, u], i) => `<tr><td width="56" valign="top" style="padding:0 0 18px"><div style="width:40px;height:40px;border-radius:20px;border:1px solid ${GOLD};text-align:center;line-height:40px;font-family:${SER};font-size:17px;color:${FUX}">0${i + 1}</div></td><td valign="top" style="padding:8px 0 18px;font-family:${SANS};font-size:15px;line-height:1.5;color:#3a3530">${u ? `<a href="${u}" style="font-family:${SER};font-size:17px;color:${FUX};text-decoration:none">${a}</a>` : `<b style="font-family:${SER};font-size:17px;font-weight:normal;color:${INK}">${a}</b>`} ${b}</td></tr>`).join('')}</table></td></tr>`;
const ctaBlock = (t: string, cta: string, url: string, sub: string) => `<tr><td style="padding:6px 34px 0"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${INK};border-radius:16px"><tr><td style="padding:28px 28px 26px">
 <div style="font-family:${MONO};font-size:11px;letter-spacing:3px;text-transform:uppercase;color:${GOLD}">◆ Prochaine étape</div>
 <div style="font-family:${SER};font-size:24px;line-height:1.25;color:${CREAM};padding:12px 0 20px">${t}</div>
 <a href="${url}" style="display:inline-block;background:${FUX};color:#ffffff;text-decoration:none;font-family:${MONO};font-size:13px;letter-spacing:2px;text-transform:uppercase;padding:15px 26px;border-radius:999px">${cta} →</a>
 <div style="font-family:${SANS};font-size:13px;color:#b5ab9c;padding-top:12px">${sub}</div></td></tr></table></td></tr>`;
const plusLoin = (links: [string, string, string][]) => `<tr><td style="padding:30px 34px 0">${lab('Pour aller plus loin')}<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>${links.map(([t, s, u], i) => `<td width="${Math.floor(100 / links.length)}%" valign="top" style="padding:0 ${i < links.length - 1 ? 6 : 0}px 0 ${i ? 6 : 0}px"><a href="${u}" style="display:block;text-decoration:none;border:1px solid #e6dcc4;border-radius:12px;padding:16px"><span style="font-family:${SER};font-size:17px;color:${INK}">${t}</span> <span style="font-family:${MONO};color:${FUX}">→</span><br><span style="font-family:${SANS};font-size:13px;color:${MUTED}">${s}</span></a></td>`).join('')}</tr></table></td></tr>`;
const L_QUIZ: [string, string, string] = ['Mon business a besoin de quoi ?', 'Assistance, organisation ou les deux', 'https://nendyservices.com/quiz/'];
const L_SCORE: [string, string, string] = ['Ton score d’organisation', 'Une note sur 100 en 3 minutes', 'https://nendyservices.com/score/'];
const OFFERT = 'Premier appel offert · 30 minutes, sans engagement';

// ---------- Quiz « Mon business a besoin de quoi ? » (vouvoiement) ----------
const ORDER_B = ['Pure assistance', "Assistance d'abord", 'Les deux ensemble', "Organisation d'abord", 'Pure organisation'];
const SHORT_B = ['Pure<br>assistance', 'Assistance<br>d’abord', 'Les deux<br>ensemble', 'Organisation<br>d’abord', 'Pure<br>organisation'];
const PB: Record<string, any> = {
  'Pure assistance': { col: FUX, name: 'Vous avez besoin d’un bras droit.', tag: 'Vos systèmes existent. Il vous faut quelqu’un pour les faire tourner.', bravo: 'Bravo : vos systèmes sont déjà en place, c’est une vraie force.',
    desc: 'Votre organisation est en place, ou suffisante pour le moment. Ce qui vous manque, c’est une personne de confiance qui prend en charge l’exécution au quotidien : emails, suivi clients, agenda, tâches administratives. Vous avez besoin de déléguer, pas de tout reconstruire.',
    steps: [['Réserver votre appel offert :', 'on liste ensemble ce qui vous prend le plus de temps.', RDV], ['Choisir', 'votre module d’assistance : Flow, Structure ou Expansion.'], ['Déléguer', 'vos premières tâches dès la semaine suivante.']],
    ctaT: 'Trouvons ensemble le module d’assistance à votre mesure.', cta: 'Réserver mon appel offert', url: RDV, sub: OFFERT },
  "Assistance d'abord": { col: FUX, name: 'Souffler maintenant, structurer après.', tag: 'L’urgence, c’est de vous libérer. Les systèmes peuvent attendre un peu.', bravo: 'Bravo d’avoir pris ce temps pour vous, alors que vos journées sont si pleines.',
    desc: 'Vous êtes débordée et vous avez besoin de souffler. Le plus utile dans votre situation : déléguer d’abord ce qui vous prend le plus d’énergie au quotidien. Une fois la tête libre, on pose les bons systèmes, étape par étape.',
    steps: [['Réserver votre appel offert :', 'on repère ce qui vous épuise le plus.', RDV], ['Déléguer', 'ces tâches en priorité, pour retrouver de l’air.'], ['Structurer', 'ensuite vos outils, étape par étape.']],
    ctaT: 'Identifions ce que vous déléguez en premier.', cta: 'Réserver mon appel offert', url: RDV, sub: OFFERT },
  'Les deux ensemble': { col: GOLD, name: 'Vous avez besoin des deux, en même temps.', tag: 'De la structure et de l’exécution : l’un sans l’autre ne suffira pas.', bravo: 'Bravo d’avoir fait le point : voir clairement ce qui manque, c’est déjà avancer.',
    desc: 'Votre situation demande une approche globale : des systèmes et quelqu’un pour les faire tourner, en parallèle. C’est exactement le travail de Nendy Services : concevoir l’architecture de vos opérations et piloter vos flux pour que tout tourne, même sans vous.',
    steps: [['Réserver votre appel offert :', 'on fait le tour de votre activité.', RDV], ['Auditer', 'votre écosystème et poser un plan d’action.'], ['Lancer', 'les systèmes et l’assistance, en parallèle.']],
    ctaT: 'Construisons votre plan d’action complet.', cta: 'Réserver mon appel offert', url: RDV, sub: OFFERT },
  "Organisation d'abord": { col: SAGE, name: 'Structurer, puis déléguer.', tag: 'Poser les bases maintenant pour déléguer sereinement ensuite.', bravo: 'Bravo : vous savez déjà qu’il faut des bases solides avant de déléguer, c’est la bonne intuition.',
    desc: 'Vous avez besoin des deux, dans le bon ordre. Construire les systèmes en premier rendra la délégation beaucoup plus fluide. Déléguer sans structure, c’est confier le désordre à quelqu’un d’autre. On commence par le fond, puis on passe à l’exécution.',
    steps: [['Réserver votre appel offert :', 'on pose ensemble la bonne séquence.', RDV], ['Construire', 'les systèmes de base qui manquent.'], ['Déléguer', 'l’exécution, une fois la structure en place.']],
    ctaT: 'Définissons ensemble la bonne séquence.', cta: 'Réserver mon appel offert', url: RDV, sub: OFFERT },
  'Pure organisation': { col: SAGE, name: 'Vous avez besoin de systèmes.', tag: 'Avant de déléguer, il faut poser les fondations.', bravo: 'Bravo : vous avez l’énergie et l’envie, il ne manque que la structure.',
    desc: 'Ce qui vous manque en priorité, ce ne sont pas des bras en plus, c’est une architecture : des outils qui se parlent, des process clairs, des automatisations qui travaillent pour vous. Une fois les systèmes en place, déléguer deviendra simple et efficace.',
    steps: [['Réserver votre audit d’écosystème :', 'on cartographie vos outils et vos flux.', AUDIT], ['Planifier', 'ce qu’on garde, ce qu’on connecte, ce qu’on automatise.'], ['Piloter', 'depuis un Poste de pilotage clair et centralisé.']],
    ctaT: 'Cartographions votre écosystème digital.', cta: 'Réserver un audit écosystème', url: AUDIT, sub: '30 minutes pour faire le point sur vos outils' },
};
function mailBesoin(data: any, prenom: string) {
  const key = PB[data.profil] ? data.profil : 'Les deux ensemble';
  const p = PB[key]; const pa = Math.max(0, Math.min(100, Number(data.assistance) || 0)); const po = 100 - pa; const idx = ORDER_B.indexOf(key);
  const scale = ORDER_B.map((k, i) => `<td width="20%" align="center" valign="top" style="padding:0 2px"><div style="height:8px;border-radius:4px;background:${i === idx ? p.col : '#e9e0cc'};font-size:0;line-height:0">&nbsp;</div><div style="font-family:${SANS};font-size:11px;line-height:1.3;padding-top:9px;color:${i === idx ? INK : '#a89f92'};${i === idx ? 'font-weight:bold;' : ''}">${SHORT_B[i]}</div>${i === idx ? `<div style="font-family:${MONO};font-size:12px;color:${p.col};padding-top:4px">▲ vous</div>` : ''}</td>`).join('');
  const body = hero('Votre profil', esc(key.replace("'", '’')), p.col, p.name, p.tag)
    + box(`${lab('Votre équilibre')}<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
   <td width="50%" valign="bottom"><div style="font-family:${SER};font-size:40px;line-height:1;color:${FUX}">${pa}<span style="font-size:20px">&nbsp;%</span></div><div style="font-family:${MONO};font-size:11px;letter-spacing:2px;text-transform:uppercase;color:${MUTED};padding-top:6px">Besoin d’assistance</div></td>
   <td width="50%" align="right" valign="bottom"><div style="font-family:${SER};font-size:40px;line-height:1;color:${SAGE}">${po}<span style="font-size:20px">&nbsp;%</span></div><div style="font-family:${MONO};font-size:11px;letter-spacing:2px;text-transform:uppercase;color:${MUTED};padding-top:6px">Besoin d’organisation</div></td></tr></table>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:14px;border-radius:6px;overflow:hidden"><tr><td width="${Math.max(pa, 1)}%" style="height:10px;background:${FUX};font-size:0;line-height:0">&nbsp;</td><td width="${Math.max(po, 1)}%" style="height:10px;background:${SAGE};font-size:0;line-height:0">&nbsp;</td></tr></table>
  <div style="height:22px"></div>${lab('Où vous vous situez')}<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>${scale}</tr></table>`)
    + lecture(prenom ? `Bonjour ${esc(prenom)},` : 'Bonjour,', 'Merci d’avoir répondu au quiz.', p.bravo, p.desc)
    + etapes('Vos 3 prochaines étapes', p.steps) + ctaBlock(p.ctaT, p.cta, p.url, p.sub) + plusLoin([L_SCORE]);
  return { subject: `Votre résultat au quiz · Profil « ${key.replace("'", '’')} »`, html: shell({ kicker: 'Résultat du quiz', prefix: 'ND', preheader: p.tag, body }) };
}

// ---------- Quiz « Quel entrepreneur es-tu ? » (tutoiement) ----------
const PE: Record<string, any> = {
  V: { n: 'La Visionnaire', col: FUX, tag: 'Tes idées sont ta force. Il leur manque un cadre pour devenir des projets.', bravo: 'Bravo, ta vision est un vrai moteur : peu de gens voient aussi loin.',
    d: 'Tu vois loin, tu as toujours un temps d’avance et une nouvelle idée en poche. Le problème, ce n’est pas l’inspiration : c’est le passage à l’action. Sans structure, tes projets s’empilent, et tu passes d’une piste à l’autre sans en voir le bout.',
    f: 'Créativité, vision, énergie de lancement.', p: 'Commencer dix choses, en finir une.', b: 'Un cadre simple pour trier, planifier et suivre tes projets.',
    s: [['Réserver ton audit d’écosystème :', 'on trie tes projets et tes outils.', AUDIT], ['Prioriser', '3 projets, pas 10, avec un plan clair.'], ['Suivre', 'tout depuis un seul Poste de pilotage.']],
    ct: 'Donnons un cadre à tes idées.', cta: 'Réserver mon audit', url: AUDIT, sub: '30 minutes pour faire le point sur tes outils et tes projets' },
  M: { n: 'La Multitâche', col: '#b08d57', tag: 'Tu tiens tout à bout de bras. Il est temps de passer le relais.', bravo: 'Bravo pour tout ce que tu portes chaque jour : tenir autant de rôles, c’est une vraie force.',
    d: 'Tu gères les mails, les clients, les factures, les réseaux et le reste, souvent en même temps. Ton business tient grâce à toi, mais il repose entièrement sur toi. Tu n’as pas besoin d’en faire plus : tu as besoin de quelqu’un pour faire avec toi.',
    f: 'Réactivité, endurance, sens du service.', p: 'Tout repose sur toi : si tu t’arrêtes, tout s’arrête.', b: 'Déléguer l’exécution du quotidien à quelqu’un de confiance.',
    s: [['Réserver ton appel offert :', 'on liste ce qui te prend le plus de temps.', RDV], ['Choisir', 'ton module d’assistance : Flow, Structure ou Expansion.'], ['Déléguer', 'tes premières tâches dès la semaine suivante.']],
    ct: 'Identifions ce que tu délègues en premier.', cta: 'Réserver mon appel offert', url: RDV, sub: OFFERT },
  P: { n: 'La Perfectionniste', col: SAGE, tag: 'Ton exigence fait ta qualité. Elle ne doit pas faire ta charge.', bravo: 'Bravo pour ton exigence : tes clients sentent la qualité de ton travail.',
    d: 'Tout ce que tu livres est soigné, et tes clients le sentent. Mais tu refais, tu relis, tu repousses, et chaque tâche te prend deux fois plus de temps qu’elle ne devrait. Ce qu’il te faut, ce sont des process et des modèles prêts, pour garder ta qualité sans tout recommencer.',
    f: 'Qualité, rigueur, souci du détail.', p: 'Repousser tant que ce n’est pas parfait.', b: 'Des process et des modèles prêts à l’emploi.',
    s: [['Réserver ton appel offert :', 'on repère ce que tu refais sans arrêt.', RDV], ['Modéliser', 'tes tâches récurrentes en process et en modèles.'], ['Livrer', 'plus vite, avec la même qualité.']],
    ct: 'Gardons ta qualité, sans y passer tes nuits.', cta: 'Réserver mon appel offert', url: RDV, sub: OFFERT },
  A: { n: 'L’Architecte', col: INK, tag: 'Ton business est bien rangé. Maintenant, il doit tourner sans toi.', bravo: 'Bravo, ton business est déjà bien organisé : tu as fait le plus difficile.',
    d: 'Tu as des outils, des process, une vraie organisation. Mais tout passe encore par toi, et tu sens que tu plafonnes. La prochaine étape, c’est de connecter tes outils, d’automatiser ce qui se répète, et de piloter ton activité d’un coup d’œil.',
    f: 'Organisation, méthode, vision d’ensemble.', p: 'Rester la pièce centrale de ton propre système.', b: 'Automatiser et piloter depuis un Poste de pilotage.',
    s: [['Réserver ton audit d’écosystème :', 'on cartographie tes outils et tes flux.', AUDIT], ['Automatiser', 'ce qui se répète entre tes outils.'], ['Piloter', 'ton activité depuis un Poste de pilotage.']],
    ct: 'Passons ton système au palier suivant.', cta: 'Réserver mon audit', url: AUDIT, sub: '30 minutes pour cartographier ton écosystème' },
};
const MIXKEY: Record<string, string> = { V: 'visionnaire', M: 'multitache', P: 'perfectionniste', A: 'architecte' };
const MIXNAME: Record<string, string> = { V: 'Visionnaire', M: 'Multitâche', P: 'Perfectionniste', A: 'Architecte' };
function mailEntrepreneur(data: any, prenom: string) {
  const prof = String(data.profil || '').replace("'", '’');
  const k = (Object.keys(PE).find((x) => PE[x].n === prof) || 'M'); const p = PE[k];
  const m = data.melange && typeof data.melange === 'object' ? data.melange : {};
  const vals = Object.keys(PE).map((x) => [x, Math.max(0, Math.min(100, Number(m[MIXKEY[x]]) || 0))] as [string, number]).sort((a, b) => b[1] - a[1]);
  const mix = vals.map(([x, v]) => `<tr><td width="34%" style="font-family:${SANS};font-size:14px;color:#3a3530;padding:7px 10px 7px 0;${x === k ? 'font-weight:bold;' : ''}">${MIXNAME[x]}</td><td style="padding:7px 0">${bar(v, PE[x].col)}</td><td width="48" align="right" style="font-family:${MONO};font-size:12px;color:${INK};padding-left:10px">${v}&nbsp;%</td></tr>`).join('');
  const trio = [['Ta force', p.f], ['Ton piège', p.p], ['Ce qu’il te faut', p.b]].map(([t, v]) => `<td width="33%" valign="top" style="padding:0 4px"><div style="border:1px solid #e6dcc4;border-radius:12px;padding:14px;background:#fff"><div style="font-family:${MONO};font-size:10px;letter-spacing:2px;text-transform:uppercase;color:${GOLD}">${t}</div><div style="font-family:${SANS};font-size:13px;line-height:1.45;color:#3a3530;padding-top:8px">${v}</div></div></td>`).join('');
  const body = hero('Ton profil d’entrepreneuse', 'Quel entrepreneur es-tu ?', p.col, p.n, p.tag, 38)
    + box(`${lab('Ton mélange')}<table role="presentation" width="100%" cellpadding="0" cellspacing="0">${mix}</table>`)
    + lecture(prenom ? `Bonjour ${esc(prenom)},` : 'Bonjour,', 'Merci d’avoir répondu au quiz.', p.bravo, p.d)
    + `<tr><td style="padding:22px 30px 0"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>${trio}</tr></table></td></tr>`
    + etapes('Tes 3 prochaines étapes', p.s) + ctaBlock(p.ct, p.cta, p.url, p.sub) + plusLoin([L_QUIZ, L_SCORE]);
  return { subject: `Ton profil d’entrepreneuse : ${p.n}`, html: shell({ kicker: 'Résultat du quiz', prefix: 'QE', preheader: p.tag, body }) };
}

// ---------- Score d'organisation (tutoiement) ----------
const LV: [string, string, number, number, string, string][] = [
  ['Système à construire', 'Tu as les fondations, il manque l’architecture qui tient tout ensemble.', 0, 39, FUX, 'Bravo d’avoir pris ces quelques minutes : regarder son organisation en face, c’est déjà le premier pas.'],
  ['Système en construction', 'Tu avances bien : quelques axes clés peuvent tout changer rapidement.', 40, 69, '#b08d57', 'Bravo, tu as déjà de bonnes bases : tu es sur la bonne voie.'],
  ['Système solide', 'Tu as un bon socle. Le prochain palier, c’est l’automatisation avancée.', 70, 89, SAGE, 'Bravo, ton organisation est solide : peu d’entrepreneuses en sont à ce niveau.'],
  ['Système exemplaire', 'Tu es dans les meilleurs. Voyons comment aller encore plus loin.', 90, 100, SAGE, 'Bravo, ton système fait partie des meilleurs : tu as fait un vrai travail de fond.'],
];
function mailScore(data: any, prenom: string) {
  const det = data.detail && typeof data.detail === 'object' ? data.detail : {};
  const detail = AXES.map((_, i) => Math.max(0, Math.min(10, Number(det[i + 1]) || 0)));
  const t = Math.max(0, Math.min(100, Number(data.score) || detail.reduce((a, b) => a + b, 0)));
  const li = t < 40 ? 0 : t < 70 ? 1 : t < 90 ? 2 : 3; const [name, sub, , , col, bravo] = LV[li];
  const scale = LV.map((l, i) => `<td width="25%" align="center" valign="top" style="padding:0 2px"><div style="height:8px;border-radius:4px;background:${i === li ? l[4] : '#e9e0cc'};font-size:0;line-height:0">&nbsp;</div><div style="font-family:${SANS};font-size:11px;line-height:1.3;padding-top:9px;color:${i === li ? INK : '#a89f92'};${i === li ? 'font-weight:bold;' : ''}">${l[0].replace('Système ', 'Système<br>')}</div><div style="font-family:${MONO};font-size:10px;color:#a89f92;padding-top:3px">${l[2]}–${l[3]}</div>${i === li ? `<div style="font-family:${MONO};font-size:12px;color:${col};padding-top:4px">▲ toi</div>` : ''}</td>`).join('');
  const axes = AXES.map((a, i) => { const v = detail[i]; return `<tr><td width="40%" style="font-family:${SANS};font-size:13px;color:#3a3530;padding:7px 10px 7px 0">${a}</td><td style="padding:7px 0">${bar(v * 10, v <= 4 ? FUX : v <= 7 ? '#b08d57' : SAGE)}</td><td width="44" align="right" style="font-family:${MONO};font-size:12px;color:${INK};padding-left:10px;white-space:nowrap">${v}/10</td></tr>`; }).join('');
  const base = 'Ton score est calculé sur 10 axes de ton organisation, de la prise de rendez-vous à l’automatisation. ';
  const mn = Math.min(...detail);
  const expl = base + (mn <= 4 ? 'Les barres en rose sont tes points faibles : c’est en les améliorant en premier que tu gagneras le plus de temps.' : mn <= 7 ? 'Les barres dorées sont les axes à optimiser : c’est là que tu peux encore gagner du temps.' : 'Tous tes axes sont au vert : la prochaine étape, c’est d’automatiser et de piloter pour aller encore plus loin.');
  const low = AXES.map((a, i) => [a, detail[i]] as [string, number]).filter((x) => x[1] <= 7).sort((a, b) => a[1] - b[1]).slice(0, 2);
  const verb = (v: number) => (v <= 4 ? 'Améliorer :' : 'Optimiser :');
  const steps: [string, string, string?][] = [['Réserver ton audit d’écosystème :', 'on regarde ensemble tes outils et tes flux.', AUDIT]];
  if (low.length === 2 && verb(low[0][1]) === verb(low[1][1])) steps.push([verb(low[0][1]), `<b>${low[0][0]}</b> et <b>${low[1][0]}</b>, tes deux axes à renforcer.`]);
  else low.forEach(([a, v]) => steps.push([verb(v), `<b>${a}</b>, l’un de tes axes à renforcer.`]));
  if (steps.length < 3) steps.push(['Automatiser :', 'tes flux pour passer au palier suivant.']);
  const body = `<tr><td style="padding:34px 34px 6px">${lab('◆ Ton score d’organisation')}
 <table role="presentation" cellpadding="0" cellspacing="0"><tr><td valign="bottom" style="font-family:${SER};font-size:76px;line-height:.9;color:${col}">${t}</td><td valign="bottom" style="font-family:${SER};font-size:26px;color:#a89f92;padding:0 0 6px 6px">/ 100</td></tr></table>
 <div style="margin-top:16px">${bar(t, col, 10)}</div>
 <h1 style="margin:22px 0 0;font-family:${SER};font-weight:normal;font-size:32px;line-height:1.1;color:${INK}">${name}.</h1>
 <p style="margin:12px 0 0;font-family:${SER};font-style:italic;font-size:19px;line-height:1.4;color:#5a524a">${sub}</p></td></tr>`
    + box(`${lab('Où tu te situes')}<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>${scale}</tr></table><div style="height:24px"></div>${lab('Le détail de tes 10 axes')}<table role="presentation" width="100%" cellpadding="0" cellspacing="0">${axes}</table>`)
    + lecture(prenom ? `Bonjour ${esc(prenom)},` : 'Bonjour,', 'Merci d’avoir fait le score d’organisation.', bravo, expl)
    + etapes('Tes 3 prochaines étapes', steps.slice(0, 3)) + ctaBlock('Cartographions ton écosystème et passons au palier suivant.', 'Réserver mon audit', AUDIT, '30 minutes pour faire le point sur tes outils') + plusLoin([L_QUIZ]);
  return { subject: `Ton score d’organisation : ${t}/100 · ${name}`, html: shell({ kicker: 'Résultat du score', prefix: 'ND', preheader: `${t}/100 · ${name}`, body }) };
}
