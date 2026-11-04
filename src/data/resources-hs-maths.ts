import type { Resource } from '../models';

const base = {
  language: 'English',
  contentStatus: 'published' as const,
  academicLevel: 'higher-secondary' as const,
  createdAt: '2026-11-05',
  updatedAt: '2026-11-05',
  examIds: ['veda-exam-jee-main', 'veda-exam-jee-advanced'],
};

export const resourcesHsMathsData: Resource[] = [

  // ── 3Blue1Brown ──────────────────────────────────────────────────────────────

  {
    ...base,
    id: 'veda-resource-hs-math-3b1b-calculus',
    slug: 'hs-math-3b1b-essence-of-calculus',
    title: '3Blue1Brown — Essence of Calculus (Series)',
    description: '12-episode series by Grant Sanderson giving profound visual intuition for derivatives, chain rule, integrals, Taylor series, and the fundamental theorem of calculus. The best free introduction to calculus concepts.',
    type: 'course',
    url: 'https://www.youtube.com/@3blue1brown',
    source: '3Blue1Brown (YouTube)',
    author: 'Grant Sanderson',
    subjectIds: ['veda-subject-hs-maths'],
    topicIds: [
      'veda-topic-hs-math-limits-continuity',
      'veda-topic-hs-math-differentiation',
      'veda-topic-hs-math-integration',
    ],
    verificationStatus: 'verified',
    difficulty: 'intermediate',
    durationMinutes: 240,
    tags: ['3Blue1Brown', 'calculus', 'visual', 'animation', 'derivatives', 'integrals', 'free'],
  },

  {
    ...base,
    id: 'veda-resource-hs-math-3b1b-linear-algebra',
    slug: 'hs-math-3b1b-essence-of-linear-algebra',
    title: '3Blue1Brown — Essence of Linear Algebra',
    description: 'Visual series making linear algebra intuitive: vectors, matrices as transformations, determinants (why they measure scaling), eigenvalues. Perfect supplementary viewing for Matrices & Determinants and Vectors chapters.',
    type: 'course',
    url: 'https://www.youtube.com/@3blue1brown',
    source: '3Blue1Brown (YouTube)',
    author: 'Grant Sanderson',
    subjectIds: ['veda-subject-hs-maths'],
    topicIds: [
      'veda-topic-hs-math-matrices-determinants',
      'veda-topic-hs-math-vectors',
    ],
    verificationStatus: 'verified',
    difficulty: 'intermediate',
    durationMinutes: 180,
    tags: ['3Blue1Brown', 'linear algebra', 'vectors', 'matrices', 'visual', 'free'],
  },

  // ── Physics Wallah — Maths ───────────────────────────────────────────────────

  {
    ...base,
    id: 'veda-resource-hs-math-pw-jee',
    slug: 'hs-math-pw-jee-maths',
    title: 'Physics Wallah — JEE Mathematics',
    description: 'Complete JEE Mathematics lectures on Physics Wallah YouTube. Chapter-wise videos from Algebra to Calculus with solved examples, shortcuts, and previous year questions. One of the most popular free maths resources for JEE aspirants.',
    type: 'course',
    url: 'https://www.youtube.com/@PhysicsWallah',
    source: 'Physics Wallah (YouTube)',
    author: 'Physics Wallah Faculty',
    subjectIds: ['veda-subject-hs-maths'],
    topicIds: [
      'veda-topic-hs-math-sets-relations', 'veda-topic-hs-math-trigonometry',
      'veda-topic-hs-math-complex-numbers', 'veda-topic-hs-math-quadratic',
      'veda-topic-hs-math-sequences-series', 'veda-topic-hs-math-permutation-combination',
      'veda-topic-hs-math-straight-lines', 'veda-topic-hs-math-conic-sections',
      'veda-topic-hs-math-vectors', 'veda-topic-hs-math-3d-geometry',
      'veda-topic-hs-math-limits-continuity', 'veda-topic-hs-math-differentiation',
      'veda-topic-hs-math-integration', 'veda-topic-hs-math-probability',
    ],
    verificationStatus: 'verified',
    difficulty: 'intermediate',
    durationMinutes: 20000,
    tags: ['Physics Wallah', 'JEE', 'maths', 'free', 'Class 11', 'Class 12', 'Hindi-English'],
  },

  // ── SL Loney — Trigonometry & Coordinate Geometry ───────────────────────────

  {
    ...base,
    id: 'veda-resource-hs-math-sl-loney-trig',
    slug: 'hs-math-sl-loney-trigonometry',
    title: 'SL Loney — Plane Trigonometry (Parts 1 & 2)',
    description: 'Classic trigonometry textbook by SL Loney. Part 1 covers ratios, identities, compound angles, and inverse trig. Part 2 covers properties of triangles and applications. Standard reference for JEE Advanced trigonometry preparation.',
    type: 'book',
    source: 'S. Chand / Arihant (reprints)',
    author: 'S.L. Loney',
    year: 2020,
    subjectIds: ['veda-subject-hs-maths'],
    topicIds: [
      'veda-topic-hs-math-trigonometry',
      'veda-topic-hs-math-inverse-trig',
    ],
    verificationStatus: 'verified',
    difficulty: 'advanced',
    tags: ['SL Loney', 'trigonometry', 'JEE Advanced', 'classic', 'book'],
  },

  // ── Hall & Knight ────────────────────────────────────────────────────────────

  {
    ...base,
    id: 'veda-resource-hs-math-hall-knight',
    slug: 'hs-math-hall-knight-higher-algebra',
    title: 'Hall & Knight — Higher Algebra',
    description: 'Classic algebra textbook with deep coverage of sequences/series, progressions, permutations, combinations, binomial theorem, complex numbers, and quadratic equations. Essential for JEE Advanced algebraic rigour.',
    type: 'book',
    source: 'Arihant (Indian reprint)',
    author: 'Hall & Knight',
    year: 2019,
    subjectIds: ['veda-subject-hs-maths'],
    topicIds: [
      'veda-topic-hs-math-sequences-series',
      'veda-topic-hs-math-permutation-combination',
      'veda-topic-hs-math-complex-numbers',
      'veda-topic-hs-math-quadratic',
    ],
    verificationStatus: 'verified',
    difficulty: 'advanced',
    tags: ['Hall Knight', 'algebra', 'JEE Advanced', 'classic', 'book', 'series', 'binomial'],
  },

  // ── RD Sharma ────────────────────────────────────────────────────────────────

  {
    ...base,
    id: 'veda-resource-hs-math-rd-sharma',
    slug: 'hs-math-rd-sharma-class-11-12',
    title: 'RD Sharma — Mathematics for Class 11 & 12',
    description: 'Comprehensive textbook aligned with CBSE and JEE Main syllabus. Covers all chapters with solved examples and graded exercises. Best entry-level book after NCERT for building problem-solving skills.',
    type: 'book',
    source: 'Dhanpat Rai Publications',
    author: 'R.D. Sharma',
    year: 2024,
    subjectIds: ['veda-subject-hs-maths'],
    topicIds: [
      'veda-topic-hs-math-sets-relations', 'veda-topic-hs-math-trigonometry',
      'veda-topic-hs-math-conic-sections', 'veda-topic-hs-math-limits-continuity',
      'veda-topic-hs-math-differentiation', 'veda-topic-hs-math-integration',
      'veda-topic-hs-math-probability', 'veda-topic-hs-math-statistics',
    ],
    verificationStatus: 'verified',
    difficulty: 'beginner',
    tags: ['RD Sharma', 'Class 11', 'Class 12', 'CBSE', 'JEE Main', 'book', 'beginner'],
  },

  // ── Khan Academy ─────────────────────────────────────────────────────────────

  {
    ...base,
    id: 'veda-resource-hs-math-khan-academy',
    slug: 'hs-math-khan-academy',
    title: 'Khan Academy — Precalculus, Calculus, Statistics',
    description: 'Free online maths courses on Khan Academy: trigonometry, complex numbers, matrices, precalculus, AP Calculus AB/BC (equivalent to JEE maths level), and statistics. Interactive exercises with instant feedback.',
    type: 'course',
    url: 'https://www.khanacademy.org/math',
    source: 'Khan Academy',
    author: 'Sal Khan & Khan Academy Faculty',
    subjectIds: ['veda-subject-hs-maths'],
    topicIds: [
      'veda-topic-hs-math-trigonometry', 'veda-topic-hs-math-complex-numbers',
      'veda-topic-hs-math-matrices-determinants', 'veda-topic-hs-math-limits-continuity',
      'veda-topic-hs-math-differentiation', 'veda-topic-hs-math-integration',
      'veda-topic-hs-math-probability', 'veda-topic-hs-math-statistics',
    ],
    verificationStatus: 'official',
    difficulty: 'beginner',
    tags: ['Khan Academy', 'free', 'online', 'calculus', 'trigonometry', 'statistics'],
  },

  // ── Vedantu ──────────────────────────────────────────────────────────────────

  {
    ...base,
    id: 'veda-resource-hs-math-vedantu-jee',
    slug: 'hs-math-vedantu-jee-maths',
    title: 'Vedantu JEE — Mathematics',
    description: 'JEE Mathematics lectures on Vedantu JEE YouTube channel. Strong coverage of Coordinate Geometry (Conic Sections), Calculus (Integration techniques), and Probability. Regular PYQ sessions and crash courses.',
    type: 'course',
    url: 'https://www.youtube.com/@VedantuJEE',
    source: 'Vedantu (YouTube)',
    author: 'Vedantu JEE Faculty',
    subjectIds: ['veda-subject-hs-maths'],
    topicIds: [
      'veda-topic-hs-math-conic-sections', 'veda-topic-hs-math-integration',
      'veda-topic-hs-math-probability', 'veda-topic-hs-math-differential-equations',
      'veda-topic-hs-math-3d-geometry',
    ],
    verificationStatus: 'verified',
    difficulty: 'intermediate',
    tags: ['Vedantu', 'JEE', 'maths', 'free', 'coordinate geometry', 'calculus'],
  },
];
