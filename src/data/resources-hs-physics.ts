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

export const resourcesHsPhysicsData: Resource[] = [

  // ── Physics Wallah ───────────────────────────────────────────────────────────

  {
    ...base,
    id: 'veda-resource-hs-phys-pw-jee-main',
    slug: 'hs-phys-pw-alakh-pandey-jee',
    title: 'Physics Wallah — JEE Physics (Alakh Pandey)',
    description: 'Free complete JEE Physics lectures by Alakh Pandey (Physics Wallah). Covers entire Class 11 and 12 syllabus with solved examples, shortcuts, and exam-focused tips. Most popular free physics resource in India.',
    type: 'course',
    url: 'https://www.youtube.com/@PhysicsWallah',
    source: 'Physics Wallah (YouTube)',
    author: 'Alakh Pandey',
    subjectIds: ['veda-subject-hs-physics'],
    topicIds: [
      'veda-topic-hs-phys-kinematics', 'veda-topic-hs-phys-newtons-laws',
      'veda-topic-hs-phys-work-energy', 'veda-topic-hs-phys-rotation',
      'veda-topic-hs-phys-gravitation', 'veda-topic-hs-phys-shm',
      'veda-topic-hs-phys-waves', 'veda-topic-hs-phys-heat-thermodynamics',
      'veda-topic-hs-phys-electrostatics', 'veda-topic-hs-phys-current-electricity',
      'veda-topic-hs-phys-magnetism', 'veda-topic-hs-phys-emi',
      'veda-topic-hs-phys-ray-optics', 'veda-topic-hs-phys-modern-physics',
      'veda-topic-hs-phys-atoms-nuclei', 'veda-topic-hs-phys-semiconductors',
    ],
    verificationStatus: 'verified',
    difficulty: 'intermediate',
    durationMinutes: 18000,
    tags: ['Physics Wallah', 'Alakh Pandey', 'JEE', 'NEET', 'free', 'Hindi', 'Class 11', 'Class 12'],
  },

  {
    ...base,
    id: 'veda-resource-hs-phys-pw-neet',
    slug: 'hs-phys-pw-neet-physics',
    title: 'Physics Wallah — NEET Physics',
    description: 'NEET-specific Physics lectures by Physics Wallah covering all chapters as per NTA NEET syllabus. Bilingual (Hindi-English), with formula sheets and PYQ discussions.',
    type: 'course',
    url: 'https://www.youtube.com/@PhysicsWallahNeet',
    source: 'Physics Wallah (YouTube)',
    author: 'Physics Wallah Faculty',
    subjectIds: ['veda-subject-hs-physics'],
    topicIds: [
      'veda-topic-hs-phys-kinematics', 'veda-topic-hs-phys-newtons-laws',
      'veda-topic-hs-phys-ray-optics', 'veda-topic-hs-phys-atoms-nuclei',
      'veda-topic-hs-phys-semiconductors', 'veda-topic-hs-phys-current-electricity',
    ],
    verificationStatus: 'verified',
    difficulty: 'intermediate',
    tags: ['Physics Wallah', 'NEET', 'free', 'Hindi', 'physics'],
  },

  // ── HC Verma — Concepts of Physics ──────────────────────────────────────────

  {
    ...base,
    id: 'veda-resource-hs-phys-hcv-book',
    slug: 'hs-phys-hcv-concepts-of-physics',
    title: 'Concepts of Physics — H.C. Verma (Vol. 1 & 2)',
    description: 'The gold standard textbook for JEE Physics. Volume 1: Mechanics, Waves, Thermodynamics (Class 11). Volume 2: Electricity, Magnetism, Optics, Modern Physics (Class 12). Known for clear conceptual explanations and rigorous exercises.',
    type: 'reference',
    source: 'Bharati Bhawan Publishers',
    author: 'H.C. Verma',
    year: 2020,
    subjectIds: ['veda-subject-hs-physics'],
    topicIds: [
      'veda-topic-hs-phys-kinematics', 'veda-topic-hs-phys-newtons-laws',
      'veda-topic-hs-phys-work-energy', 'veda-topic-hs-phys-rotation',
      'veda-topic-hs-phys-electrostatics', 'veda-topic-hs-phys-current-electricity',
      'veda-topic-hs-phys-ray-optics', 'veda-topic-hs-phys-wave-optics',
      'veda-topic-hs-phys-modern-physics',
    ],
    verificationStatus: 'verified',
    difficulty: 'intermediate',
    tags: ['HC Verma', 'book', 'JEE', 'textbook', 'Class 11', 'Class 12', 'mechanics', 'optics'],
  },

  // ── 3Blue1Brown ─────────────────────────────────────────────────────────────

  {
    ...base,
    id: 'veda-resource-hs-phys-3b1b-calculus',
    slug: 'hs-phys-3b1b-essence-of-calculus',
    title: '3Blue1Brown — Essence of Calculus',
    description: 'Visual, intuitive introduction to calculus (derivatives, integrals, Taylor series, the fundamental theorem). Essential mathematical background for understanding Physics deeply. Beautifully animated.',
    type: 'course',
    url: 'https://www.youtube.com/@3blue1brown',
    source: '3Blue1Brown (YouTube)',
    author: 'Grant Sanderson',
    subjectIds: ['veda-subject-hs-physics', 'veda-subject-hs-maths'],
    topicIds: ['veda-topic-hs-math-differentiation', 'veda-topic-hs-math-integration', 'veda-topic-hs-phys-kinematics'],
    verificationStatus: 'verified',
    difficulty: 'intermediate',
    durationMinutes: 240,
    tags: ['3Blue1Brown', 'calculus', 'visual', 'animation', 'mathematics', 'free'],
  },

  // ── Vedantu JEE ─────────────────────────────────────────────────────────────

  {
    ...base,
    id: 'veda-resource-hs-phys-vedantu-jee',
    slug: 'hs-phys-vedantu-jee-physics',
    title: 'Vedantu JEE — Physics Lectures',
    description: 'High-quality JEE Physics video lectures and live sessions on the Vedantu JEE YouTube channel. Chapter-wise playlists with concept videos, PYQs, and doubt clearing. Good for electrostatics and optics.',
    type: 'course',
    url: 'https://www.youtube.com/@VedantuJEE',
    source: 'Vedantu (YouTube)',
    author: 'Vedantu JEE Faculty',
    subjectIds: ['veda-subject-hs-physics'],
    topicIds: [
      'veda-topic-hs-phys-electrostatics', 'veda-topic-hs-phys-current-electricity',
      'veda-topic-hs-phys-magnetism', 'veda-topic-hs-phys-emi',
      'veda-topic-hs-phys-ray-optics', 'veda-topic-hs-phys-wave-optics',
    ],
    verificationStatus: 'verified',
    difficulty: 'intermediate',
    tags: ['Vedantu', 'JEE', 'physics', 'electrostatics', 'optics', 'free', 'live sessions'],
  },

  // ── NCERT Exemplar ───────────────────────────────────────────────────────────

  {
    ...base,
    id: 'veda-resource-hs-phys-ncert-exemplar',
    slug: 'hs-phys-ncert-exemplar-class-11-12',
    title: 'NCERT Exemplar — Physics Class 11 & 12',
    description: 'Official NCERT Exemplar problem books for Class 11 and 12 Physics. Includes MCQs, short and long answer questions of increasing difficulty. The free PDF is available on the NCERT website.',
    type: 'reference',
    url: 'https://ncert.nic.in/exemplar-problems.php',
    source: 'NCERT',
    year: 2022,
    subjectIds: ['veda-subject-hs-physics'],
    topicIds: [
      'veda-topic-hs-phys-kinematics', 'veda-topic-hs-phys-newtons-laws',
      'veda-topic-hs-phys-electrostatics', 'veda-topic-hs-phys-atoms-nuclei',
    ],
    verificationStatus: 'official',
    difficulty: 'intermediate',
    tags: ['NCERT', 'Exemplar', 'JEE', 'NEET', 'Class 11', 'Class 12', 'practice', 'free PDF'],
  },

  // ── DC Pandey ────────────────────────────────────────────────────────────────

  {
    ...base,
    id: 'veda-resource-hs-phys-dc-pandey',
    slug: 'hs-phys-dc-pandey-arihant',
    title: 'DC Pandey Physics for JEE — Arihant Series',
    description: 'Multi-volume JEE Physics series by D.C. Pandey published by Arihant. Each volume (Mechanics 1 & 2, Waves & Thermodynamics, Electricity & Magnetism, Optics & Modern Physics) contains theory, examples, exercises (Level 1 & 2), and previous year JEE questions.',
    type: 'reference',
    source: 'Arihant Publications',
    author: 'D.C. Pandey',
    year: 2024,
    subjectIds: ['veda-subject-hs-physics'],
    topicIds: [
      'veda-topic-hs-phys-kinematics', 'veda-topic-hs-phys-rotation',
      'veda-topic-hs-phys-waves', 'veda-topic-hs-phys-heat-thermodynamics',
      'veda-topic-hs-phys-electrostatics', 'veda-topic-hs-phys-magnetism',
    ],
    verificationStatus: 'verified',
    difficulty: 'advanced',
    tags: ['DC Pandey', 'Arihant', 'JEE', 'book', 'Class 11', 'Class 12', 'practice'],
  },

  // ── Khan Academy ─────────────────────────────────────────────────────────────

  {
    ...base,
    id: 'veda-resource-hs-phys-khan-academy',
    slug: 'hs-phys-khan-academy-physics',
    title: 'Khan Academy — Physics',
    description: 'Free online physics course on Khan Academy covering Class 11-12 level topics: forces, energy, waves, electricity, optics. Concept videos + practice exercises + mastery challenges. Available in English and Hindi.',
    type: 'course',
    url: 'https://www.khanacademy.org/science/physics',
    source: 'Khan Academy',
    author: 'Sal Khan & Khan Academy Faculty',
    subjectIds: ['veda-subject-hs-physics'],
    topicIds: [
      'veda-topic-hs-phys-kinematics', 'veda-topic-hs-phys-newtons-laws',
      'veda-topic-hs-phys-work-energy', 'veda-topic-hs-phys-current-electricity',
      'veda-topic-hs-phys-ray-optics',
    ],
    verificationStatus: 'official',
    difficulty: 'beginner',
    tags: ['Khan Academy', 'free', 'online', 'physics', 'beginner-friendly', 'English', 'Hindi'],
  },
];
