import type { Resource } from '../models';

const base = {
  language: 'English',
  contentStatus: 'published' as const,
  academicLevel: 'higher-secondary' as const,
  createdAt: '2026-11-05',
  updatedAt: '2026-11-05',
  examIds: ['veda-exam-neet', 'veda-exam-cbse-board'],
  courseIds: [] as string[],
  branchIds: [] as string[],
  semesterIds: [] as string[],
  institutionIds: [] as string[],
  relatedResourceIds: [] as string[],
  prerequisiteIds: [] as string[],
};

export const resourcesHsBiologyData: Resource[] = [

  // ── NCERT Biology — The Primary Resource for NEET ────────────────────────────

  {
    ...base,
    id: 'veda-resource-hs-bio-ncert-textbook',
    slug: 'hs-bio-ncert-class-11-12',
    title: 'NCERT Biology — Class 11 & 12 (Free PDF)',
    description: 'The single most important resource for NEET Biology. NCERT Biology Class 11 (Living World to Body Fluids) and Class 12 (Reproduction to Biodiversity). Approximately 90-95% of NEET Biology questions trace directly to NCERT text. Free PDFs available on NCERT website.',
    type: 'reference',
    url: 'https://ncert.nic.in/textbook.php',
    source: 'NCERT',
    year: 2024,
    subjectIds: ['veda-subject-hs-biology'],
    topicIds: [
      'veda-topic-hs-bio-cell-structure', 'veda-topic-hs-bio-cell-division',
      'veda-topic-hs-bio-biomolecules', 'veda-topic-hs-bio-photosynthesis',
      'veda-topic-hs-bio-respiration', 'veda-topic-hs-bio-plant-growth',
      'veda-topic-hs-bio-human-physiology', 'veda-topic-hs-bio-nervous-system',
      'veda-topic-hs-bio-reproduction', 'veda-topic-hs-bio-human-reproduction',
      'veda-topic-hs-bio-genetics', 'veda-topic-hs-bio-molecular-biology',
      'veda-topic-hs-bio-evolution', 'veda-topic-hs-bio-human-health',
      'veda-topic-hs-bio-biotechnology', 'veda-topic-hs-bio-ecology',
      'veda-topic-hs-bio-biodiversity', 'veda-topic-hs-bio-microbes',
    ],
    verificationStatus: 'official',
    difficulty: 'beginner',
    tags: ['NCERT', 'textbook', 'NEET', 'free PDF', 'Class 11', 'Class 12', 'must-read'],
  },

  // ── Physics Wallah — NEET Biology ────────────────────────────────────────────

  {
    ...base,
    id: 'veda-resource-hs-bio-pw-neet',
    slug: 'hs-bio-pw-neet-biology',
    title: 'Physics Wallah — NEET Biology',
    description: 'Complete NEET Biology lectures on Physics Wallah NEET channel. Chapter-wise videos with NCERT-line reading, diagrams, assertion-reason practice, and previous year question analysis. Covers Botany and Zoology.',
    type: 'course',
    url: 'https://www.youtube.com/@PhysicsWallahNeet',
    source: 'Physics Wallah (YouTube)',
    author: 'Physics Wallah Biology Faculty',
    subjectIds: ['veda-subject-hs-biology'],
    topicIds: [
      'veda-topic-hs-bio-cell-structure', 'veda-topic-hs-bio-photosynthesis',
      'veda-topic-hs-bio-respiration', 'veda-topic-hs-bio-human-physiology',
      'veda-topic-hs-bio-genetics', 'veda-topic-hs-bio-molecular-biology',
      'veda-topic-hs-bio-biotechnology', 'veda-topic-hs-bio-ecology',
      'veda-topic-hs-bio-evolution',
    ],
    verificationStatus: 'verified',
    difficulty: 'intermediate',
    durationMinutes: 20000,
    tags: ['Physics Wallah', 'NEET', 'biology', 'free', 'Botany', 'Zoology', 'Hindi-English'],
  },

  // ── Arvind Arora — W2 Biology ────────────────────────────────────────────────

  {
    ...base,
    id: 'veda-resource-hs-bio-arvind-arora',
    slug: 'hs-bio-arvind-arora-w2-biology',
    title: 'Arvind Arora (W2) — NEET Biology',
    description: 'Highly popular NEET Biology channel by Arvind Arora. Known for making Genetics, Molecular Biology, and Biotechnology extremely clear. Regular One-Shot videos and NCERT line-by-line revision sessions.',
    type: 'course',
    url: 'https://www.youtube.com/@ArvindAroraBiology',
    source: 'W2 Biology (YouTube)',
    author: 'Arvind Arora',
    subjectIds: ['veda-subject-hs-biology'],
    topicIds: [
      'veda-topic-hs-bio-genetics', 'veda-topic-hs-bio-molecular-biology',
      'veda-topic-hs-bio-biotechnology', 'veda-topic-hs-bio-evolution',
      'veda-topic-hs-bio-human-health', 'veda-topic-hs-bio-human-reproduction',
    ],
    verificationStatus: 'verified',
    difficulty: 'intermediate',
    tags: ['Arvind Arora', 'W2 Biology', 'NEET', 'genetics', 'molecular biology', 'free'],
  },

  // ── Vedantu NEET — Biology ───────────────────────────────────────────────────

  {
    ...base,
    id: 'veda-resource-hs-bio-vedantu-neet',
    slug: 'hs-bio-vedantu-neet-biology',
    title: 'Vedantu NEET — Biology Lectures',
    description: 'NEET Biology video lectures and live sessions on Vedantu NEET YouTube channel. Strong in Plant Physiology, Human Physiology, and Ecology. Daily live classes during session and free one-shot videos.',
    type: 'course',
    url: 'https://www.youtube.com/@VedantuNEET',
    source: 'Vedantu (YouTube)',
    author: 'Vedantu NEET Biology Faculty',
    subjectIds: ['veda-subject-hs-biology'],
    topicIds: [
      'veda-topic-hs-bio-photosynthesis', 'veda-topic-hs-bio-respiration',
      'veda-topic-hs-bio-plant-growth', 'veda-topic-hs-bio-human-physiology',
      'veda-topic-hs-bio-nervous-system', 'veda-topic-hs-bio-ecology',
      'veda-topic-hs-bio-biodiversity',
    ],
    verificationStatus: 'verified',
    difficulty: 'intermediate',
    tags: ['Vedantu', 'NEET', 'biology', 'free', 'physiology', 'ecology'],
  },

  // ── Trueman's Elementary Biology ─────────────────────────────────────────────

  {
    ...base,
    id: 'veda-resource-hs-bio-trueman',
    slug: 'hs-bio-truemans-elementary-biology',
    title: "Trueman's Elementary Biology — Class 11 & 12",
    description: "Standard NEET reference book that expands on NCERT content with additional explanations, diagrams, and practice MCQs. Volume 1 (Class 11) and Volume 2 (Class 12). Widely used as a companion to NCERT.",
    type: 'reference',
    source: "Trueman's Publishers",
    author: 'K.N. Bhatia & M.P. Tyagi',
    year: 2023,
    subjectIds: ['veda-subject-hs-biology'],
    topicIds: [
      'veda-topic-hs-bio-cell-structure', 'veda-topic-hs-bio-photosynthesis',
      'veda-topic-hs-bio-human-physiology', 'veda-topic-hs-bio-genetics',
      'veda-topic-hs-bio-ecology', 'veda-topic-hs-bio-biodiversity',
    ],
    verificationStatus: 'verified',
    difficulty: 'beginner',
    tags: ["Trueman's", 'NEET', 'book', 'Class 11', 'Class 12', 'MCQ', 'reference'],
  },

  // ── Khan Academy Biology ─────────────────────────────────────────────────────

  {
    ...base,
    id: 'veda-resource-hs-bio-khan-academy',
    slug: 'hs-bio-khan-academy-biology',
    title: 'Khan Academy — Biology',
    description: 'Free online biology on Khan Academy. Strong coverage of cell biology, DNA/molecular genetics, evolution, ecology, and human physiology. AP Biology level, slightly above CBSE but good for concept clarity and visual animations.',
    type: 'course',
    url: 'https://www.khanacademy.org/science/biology',
    source: 'Khan Academy',
    author: 'Sal Khan & Khan Academy Faculty',
    subjectIds: ['veda-subject-hs-biology'],
    topicIds: [
      'veda-topic-hs-bio-cell-structure', 'veda-topic-hs-bio-cell-division',
      'veda-topic-hs-bio-genetics', 'veda-topic-hs-bio-molecular-biology',
      'veda-topic-hs-bio-evolution', 'veda-topic-hs-bio-ecology',
    ],
    verificationStatus: 'official',
    difficulty: 'beginner',
    tags: ['Khan Academy', 'free', 'online', 'biology', 'beginner-friendly', 'animation'],
  },

  // ── Pradeep's Biology ─────────────────────────────────────────────────────────

  {
    ...base,
    id: 'veda-resource-hs-bio-pradeep',
    slug: 'hs-bio-pradeep-class-11-12',
    title: "Pradeep's — A Textbook of Biology Class 11 & 12",
    description: "Pradeep's is a comprehensive NEET reference that covers NCERT content plus additional details with solved NEET PYQs, assertion-reason questions, and diagrams. Standard additional reference after NCERT for NEET aspirants.",
    type: 'reference',
    source: "Pradeep Publications",
    author: 'P.S. Dhami, G. Chopra, H.N. Sinha',
    year: 2024,
    subjectIds: ['veda-subject-hs-biology'],
    topicIds: [
      'veda-topic-hs-bio-cell-structure', 'veda-topic-hs-bio-photosynthesis',
      'veda-topic-hs-bio-respiration', 'veda-topic-hs-bio-human-physiology',
      'veda-topic-hs-bio-genetics', 'veda-topic-hs-bio-molecular-biology',
      'veda-topic-hs-bio-biotechnology', 'veda-topic-hs-bio-ecology',
    ],
    verificationStatus: 'verified',
    difficulty: 'intermediate',
    tags: ["Pradeep's", 'NEET', 'book', 'Class 11', 'Class 12', 'reference'],
  },
];
