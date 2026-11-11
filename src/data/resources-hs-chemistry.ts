import type { Resource } from '../models';

const base = {
  language: 'English',
  contentStatus: 'published' as const,
  academicLevel: 'higher-secondary' as const,
  createdAt: '2026-11-05',
  updatedAt: '2026-11-05',
  examIds: ['veda-exam-jee-main', 'veda-exam-jee-advanced', 'veda-exam-neet'],
  courseIds: [] as string[],
  branchIds: [] as string[],
  semesterIds: [] as string[],
  institutionIds: [] as string[],
  relatedResourceIds: [] as string[],
  prerequisiteIds: [] as string[],
};

export const resourcesHsChemistryData: Resource[] = [

  // ── Physics Wallah — Chemistry ────────────────────────────────────────────────

  {
    ...base,
    id: 'veda-resource-hs-chem-pw-jee',
    slug: 'hs-chem-pw-jee-chemistry',
    title: 'Physics Wallah — JEE Chemistry',
    description: 'Free complete JEE Chemistry lectures on the Physics Wallah YouTube channel. Physical, Organic, and Inorganic chemistry covered chapter-wise with concept clarity and exam strategy.',
    type: 'course',
    url: 'https://www.youtube.com/@PhysicsWallah',
    source: 'Physics Wallah (YouTube)',
    author: 'Physics Wallah Faculty',
    subjectIds: ['veda-subject-hs-chemistry'],
    topicIds: [
      'veda-topic-hs-chem-mole-concept', 'veda-topic-hs-chem-atomic-structure',
      'veda-topic-hs-chem-chemical-bonding', 'veda-topic-hs-chem-thermodynamics',
      'veda-topic-hs-chem-equilibrium', 'veda-topic-hs-chem-kinetics',
      'veda-topic-hs-chem-goc', 'veda-topic-hs-chem-hydrocarbons',
      'veda-topic-hs-chem-p-block', 'veda-topic-hs-chem-d-f-block',
    ],
    verificationStatus: 'verified',
    difficulty: 'intermediate',
    durationMinutes: 15000,
    tags: ['Physics Wallah', 'JEE', 'NEET', 'chemistry', 'free', 'Hindi-English'],
  },

  // ── NCERT Chemistry Class 11 & 12 ────────────────────────────────────────────

  {
    ...base,
    id: 'veda-resource-hs-chem-ncert-textbook',
    slug: 'hs-chem-ncert-class-11-12',
    title: 'NCERT Chemistry — Class 11 & 12 (Free PDF)',
    description: 'Official NCERT Chemistry textbooks for Class 11 (Part 1 & 2) and Class 12 (Part 1 & 2). Essential reading for NEET — 90% of NEET chemistry questions originate directly from NCERT text. Free PDFs available on the NCERT website.',
    type: 'reference',
    url: 'https://ncert.nic.in/textbook.php',
    source: 'NCERT',
    year: 2024,
    subjectIds: ['veda-subject-hs-chemistry'],
    topicIds: [
      'veda-topic-hs-chem-mole-concept', 'veda-topic-hs-chem-atomic-structure',
      'veda-topic-hs-chem-chemical-bonding', 'veda-topic-hs-chem-periodic-table',
      'veda-topic-hs-chem-thermodynamics', 'veda-topic-hs-chem-equilibrium',
      'veda-topic-hs-chem-redox', 'veda-topic-hs-chem-kinetics',
      'veda-topic-hs-chem-solutions', 'veda-topic-hs-chem-solid-state',
      'veda-topic-hs-chem-p-block', 'veda-topic-hs-chem-d-f-block',
      'veda-topic-hs-chem-goc', 'veda-topic-hs-chem-hydrocarbons',
      'veda-topic-hs-chem-biomolecules',
    ],
    verificationStatus: 'official',
    difficulty: 'beginner',
    tags: ['NCERT', 'textbook', 'NEET', 'JEE', 'free PDF', 'Class 11', 'Class 12'],
  },

  // ── JD Lee Concise Inorganic Chemistry ──────────────────────────────────────

  {
    ...base,
    id: 'veda-resource-hs-chem-jd-lee',
    slug: 'hs-chem-jd-lee-inorganic',
    title: 'JD Lee — Concise Inorganic Chemistry (Indian Adaptation)',
    description: 'The definitive inorganic chemistry reference for JEE Advanced. Covers periodic trends, chemical bonding, coordination chemistry (crystal field theory), and p/d/f-block elements in depth. Indian adaptation edited for JEE relevance.',
    type: 'reference',
    source: 'Wiley India',
    author: 'J.D. Lee (adapted by Sudarshan Guha)',
    year: 2023,
    subjectIds: ['veda-subject-hs-chemistry'],
    topicIds: [
      'veda-topic-hs-chem-periodic-table', 'veda-topic-hs-chem-chemical-bonding',
      'veda-topic-hs-chem-p-block', 'veda-topic-hs-chem-d-f-block',
    ],
    verificationStatus: 'verified',
    difficulty: 'advanced',
    tags: ['JD Lee', 'inorganic chemistry', 'JEE Advanced', 'coordination chemistry', 'book'],
  },

  // ── MS Chouhan Organic Chemistry ─────────────────────────────────────────────

  {
    ...base,
    id: 'veda-resource-hs-chem-ms-chouhan',
    slug: 'hs-chem-ms-chouhan-organic',
    title: 'MS Chouhan — Advanced Problems in Organic Chemistry',
    description: 'Problem set for JEE Advanced organic chemistry. Contains reaction mechanism questions, named reaction problems, and multi-step synthesis. Best used after completing basic organic concepts.',
    type: 'reference',
    source: 'Balaji Publications',
    author: 'M.S. Chouhan',
    year: 2023,
    subjectIds: ['veda-subject-hs-chemistry'],
    topicIds: [
      'veda-topic-hs-chem-goc', 'veda-topic-hs-chem-hydrocarbons',
      'veda-topic-hs-chem-halogen-compounds', 'veda-topic-hs-chem-carbonyl-compounds',
      'veda-topic-hs-chem-amines',
    ],
    verificationStatus: 'verified',
    difficulty: 'advanced',
    tags: ['MS Chouhan', 'organic chemistry', 'JEE Advanced', 'mechanisms', 'problems'],
  },

  // ── Vedantu Chemistry ─────────────────────────────────────────────────────────

  {
    ...base,
    id: 'veda-resource-hs-chem-vedantu',
    slug: 'hs-chem-vedantu-neet-chemistry',
    title: 'Vedantu NEET — Chemistry',
    description: 'NEET-focused Chemistry lectures by Vedantu NEET channel. Covers inorganic chemistry (most feared by NEET aspirants), organic named reactions, and physical chemistry numerical. Live Q&A sessions included.',
    type: 'course',
    url: 'https://www.youtube.com/@VedantuNEET',
    source: 'Vedantu (YouTube)',
    author: 'Vedantu NEET Faculty',
    subjectIds: ['veda-subject-hs-chemistry'],
    topicIds: [
      'veda-topic-hs-chem-p-block', 'veda-topic-hs-chem-d-f-block',
      'veda-topic-hs-chem-carbonyl-compounds', 'veda-topic-hs-chem-biomolecules',
      'veda-topic-hs-chem-kinetics', 'veda-topic-hs-chem-solutions',
    ],
    verificationStatus: 'verified',
    difficulty: 'intermediate',
    tags: ['Vedantu', 'NEET', 'chemistry', 'free', 'inorganic', 'organic'],
  },

  // ── Narendra Awasthi — Physical Chemistry Problems ───────────────────────────

  {
    ...base,
    id: 'veda-resource-hs-chem-narendra-awasthi',
    slug: 'hs-chem-narendra-awasthi-physical',
    title: 'Narendra Awasthi — Problems in Physical Chemistry',
    description: 'Highly reputed problem book for JEE Physical Chemistry. Chapter-wise numerical problems with full solutions. Covers mole concept, thermodynamics, electrochemistry, kinetics, and solutions at JEE Advanced level.',
    type: 'reference',
    source: 'VK Global Publications',
    author: 'Narendra Awasthi',
    year: 2024,
    subjectIds: ['veda-subject-hs-chemistry'],
    topicIds: [
      'veda-topic-hs-chem-mole-concept', 'veda-topic-hs-chem-thermodynamics',
      'veda-topic-hs-chem-equilibrium', 'veda-topic-hs-chem-kinetics',
      'veda-topic-hs-chem-redox', 'veda-topic-hs-chem-solutions',
      'veda-topic-hs-chem-solid-state',
    ],
    verificationStatus: 'verified',
    difficulty: 'advanced',
    tags: ['Narendra Awasthi', 'physical chemistry', 'JEE', 'problems', 'numericals'],
  },

  // ── Khan Academy ─────────────────────────────────────────────────────────────

  {
    ...base,
    id: 'veda-resource-hs-chem-khan-academy',
    slug: 'hs-chem-khan-academy-chemistry',
    title: 'Khan Academy — Chemistry',
    description: 'Free online chemistry lessons on Khan Academy covering atomic structure, chemical bonding, stoichiometry, thermodynamics, acids and bases, organic chemistry basics. Great as a supplement for conceptual understanding.',
    type: 'course',
    url: 'https://www.khanacademy.org/science/chemistry',
    source: 'Khan Academy',
    author: 'Sal Khan & Khan Academy Faculty',
    subjectIds: ['veda-subject-hs-chemistry'],
    topicIds: [
      'veda-topic-hs-chem-mole-concept', 'veda-topic-hs-chem-atomic-structure',
      'veda-topic-hs-chem-chemical-bonding', 'veda-topic-hs-chem-thermodynamics',
      'veda-topic-hs-chem-equilibrium',
    ],
    verificationStatus: 'official',
    difficulty: 'beginner',
    tags: ['Khan Academy', 'free', 'online', 'chemistry', 'beginner-friendly'],
  },
];
