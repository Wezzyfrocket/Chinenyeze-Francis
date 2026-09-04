export const diaryEntries = [
  ['Undertaking quality improvements initiatives', '29 Aug 2026', '8'],
  ['Across a lifetime: The transformative role of orthotist and prosthetist', '29 Aug 2026', '1'],
  ['Creating community in paediatric O&P', '16 Aug 2026', '0.5'],
  ['Why clinically relevant matters in O&P (O&P research insights)', '30 Jul 2026', '0.5'],
  ['Biomechanics of partial foot amputation', '26 Jul 2026', '1.25'],
  ['Upper extremity orthotics', '26 Jul 2026', '0.58'],
  ['Shared decision making in O&P: from tools to conversation', '24 Jul 2026', '1'],
  ['Comprehensive care of plagiocephaly, torticollis, and early childhood development', '17 Jul 2026', '1'],
  ['Outcome measures in lower limb prosthetics: empowering through mobility', '17 Jul 2026', '1'],
  ['3D scanning, modelling, and clinical protocols for lower-limb prosthetic management, with specialization in digital process for transfemoral prosthetics', '27 Apr 2026', '24'],
  ['Does AFO affect muscle activity', '11 Apr 2026', '1'],
  ['Advanced pain management in osteoarthritis', '21 Mar 2026', '1'],
  ['Re-thinking early orthotic intervention on post stroke patients', '20 Mar 2026', '1'],
  ['Effect of dynamic knee brace on OA: insights from MAI motion analysis', '20 Mar 2026', '1'],
  ['Burns and scar management — insights from clinical practice in Germany', '20 Mar 2026', '0.83'],
  ['Introducing Agilik, a new smart powered orthosis', '20 Mar 2026', '1'],
  ['Body powered to myoelectric solutions for upper limb prostheses', '21 Feb 2026', '5'],
  ['Advanced clinical and technical proficiency in digital prosthetic design, modelling and fabrication for complex transfemoral cases', '5 Nov 2025', '24'],
  ['Advanced clinical and technical proficiency in digital prosthetic design, modelling and fabrication for complex transtibial cases', '5 Nov 2025', '24'],
  ['3D scanning, modelling, and clinical protocols for lower-limb prosthetic management, with specialization in digital process for transtibial prosthetics', '5 Nov 2025', '24'],
] as const;

export const professionalExperience = [
  {
    period: 'NOV 2025 — PRESENT',
    role: 'Prosthetist & Orthotist',
    organisation: 'Instalimb',
    detail: 'Digital manufacturing for prosthetics and orthotics, with a focus on clinically grounded design and 3D workflows.',
  },
  {
    period: '2021 — 2022',
    role: 'Prosthetist & Orthotist',
    organisation: '44 Nigeria Army Reference Hospital, Kaduna',
    detail: 'Clinical practice within a hospital rehabilitation setting.',
  },
  {
    period: '2019 — PRESENT',
    role: 'Volunteer writer',
    organisation: 'Rehab Edge',
    detail: 'Sharing rehabilitation and prosthetics and orthotics knowledge through writing.',
  },
] as const;

export const evidenceTabs = {
  practice: {
    label: 'Practice',
    title: 'From assessment to considered action',
    body: 'The portfolio records a clinical approach that combines anatomical findings, functional requirements, patient feedback and outcome measures rather than treating a socket as a standard shape.',
    items: ['Patient-centred assessment', 'Incremental modification', 'Dynamic gait observation', 'Evidence-informed decisions'],
  },
  digital: {
    label: 'Digital craft',
    title: 'A digital workflow with clinical intent',
    body: 'Repeated learning entries show a sustained focus on 3D scanning, modelling and digital fabrication for complex transfemoral and transtibial cases.',
    items: ['3D scanning and modelling', 'Digital prosthetic design', 'Fabrication protocols', 'Complex lower-limb cases'],
  },
  development: {
    label: 'Development',
    title: 'A record that stays in motion',
    body: 'The CPD record spans professional courses, webinars, podcasts and reflective practice across clinical, technical, research and quality-improvement themes.',
    items: ['Professional registration reference MR/22/0167', 'B.Tech, Prosthetics and Orthotics', 'Interests: advanced practice, education, mentorship', 'Employer: Instalimb'],
  },
} as const;