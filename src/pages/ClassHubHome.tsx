import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { GraduationCap, BookOpen, Atom, FlaskConical, Calculator, Globe, ArrowRight } from 'lucide-react';

const hubs = [
  {
    level: '9',
    label: 'Class 9',
    description: 'NCERT Science, Maths, Social Science, English, Hindi — complete study portal.',
    icon: BookOpen,
    color: 'bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-800',
    iconColor: 'text-teal-600 dark:text-teal-400',
    textColor: 'text-teal-900 dark:text-teal-100',
    subjects: ['Science (15 ch)', 'Maths (13 ch)', 'Social Science', 'English', 'Hindi'],
  },
  {
    level: '10',
    label: 'Class 10',
    description: 'NCERT Class 10 — board exam preparation with full notes and question papers.',
    icon: BookOpen,
    color: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
    iconColor: 'text-blue-600 dark:text-blue-400',
    textColor: 'text-blue-900 dark:text-blue-100',
    subjects: ['Science', 'Maths', 'Social Science', 'English', 'Hindi'],
  },
  {
    level: '11',
    label: 'Class 11',
    description: 'Physics, Chemistry, Mathematics, Biology — Class 11 foundation for JEE & NEET.',
    icon: Atom,
    color: 'bg-violet-50 dark:bg-violet-900/20 border-violet-200 dark:border-violet-800',
    iconColor: 'text-violet-600 dark:text-violet-400',
    textColor: 'text-violet-900 dark:text-violet-100',
    subjects: ['Physics (20 ch)', 'Chemistry (14 ch)', 'Maths (10 ch)', 'Biology (11 ch)'],
  },
  {
    level: '12',
    label: 'Class 12',
    description: 'Physics, Chemistry, Mathematics, Biology — Class 12 board + JEE/NEET preparation.',
    icon: FlaskConical,
    color: 'bg-rose-50 dark:bg-rose-900/20 border-rose-200 dark:border-rose-800',
    iconColor: 'text-rose-600 dark:text-rose-400',
    textColor: 'text-rose-900 dark:text-rose-100',
    subjects: ['Physics (10 ch)', 'Chemistry (16 ch)', 'Maths (10 ch)', 'Biology (11 ch)'],
  },
  {
    level: 'jee',
    label: 'JEE',
    description: 'JEE Main & Advanced — Physics, Chemistry, Maths with full topic coverage and PYQs.',
    icon: Calculator,
    color: 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800',
    iconColor: 'text-amber-600 dark:text-amber-400',
    textColor: 'text-amber-900 dark:text-amber-100',
    subjects: ['Physics', 'Chemistry', 'Mathematics'],
  },
  {
    level: 'neet',
    label: 'NEET',
    description: 'NEET UG — Physics, Chemistry, Biology with NCERT-focused notes and MCQ practice.',
    icon: Globe,
    color: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
    iconColor: 'text-green-600 dark:text-green-400',
    textColor: 'text-green-900 dark:text-green-100',
    subjects: ['Physics', 'Chemistry', 'Botany', 'Zoology'],
  },
];

export function ClassHubHome() {
  useSEO(
    'Class Hub — Study Portals',
    'Choose your class and access a complete self-contained study portal — Class 9, 10, 11, 12, JEE, NEET. Notes, videos, PDFs, all in one place.',
    '/class'
  );

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <GraduationCap size={20} className="text-veda-700 dark:text-veda-400" />
          <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-100">Class Study Hubs</h1>
        </div>
        <p className="text-stone-500 dark:text-stone-400 text-sm">
          Pick your class and get everything you need in one place — NCERT notes, videos in English and Hindi, PDFs, practice questions, and beyond-syllabus resources.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {hubs.map(hub => {
          const Icon = hub.icon;
          return (
            <Link
              key={hub.level}
              to={`/class/${hub.level}`}
              className={`group flex flex-col gap-3 p-5 rounded-xl border ${hub.color} hover:shadow-md transition-all`}
            >
              <div className="flex items-start justify-between">
                <div className={`p-2 rounded-lg bg-white/60 dark:bg-black/20`}>
                  <Icon size={20} className={hub.iconColor} />
                </div>
                <ArrowRight size={16} className={`${hub.iconColor} opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all`} />
              </div>
              <div>
                <h2 className={`font-semibold ${hub.textColor}`}>{hub.label}</h2>
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 leading-relaxed">{hub.description}</p>
              </div>
              <div className="flex flex-wrap gap-1 mt-auto">
                {hub.subjects.map(s => (
                  <span key={s} className="text-xs px-2 py-0.5 rounded-full bg-white/60 dark:bg-black/20 text-stone-600 dark:text-stone-400">
                    {s}
                  </span>
                ))}
              </div>
            </Link>
          );
        })}
      </div>

      <div className="bg-stone-50 dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 p-5">
        <h2 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">Why use a Class Hub?</h2>
        <ul className="space-y-2 text-sm text-stone-600 dark:text-stone-400">
          <li className="flex items-start gap-2">
            <span className="text-veda-600 dark:text-veda-400 mt-0.5">✓</span>
            Everything for your class in one place — no hunting across multiple websites
          </li>
          <li className="flex items-start gap-2">
            <span className="text-veda-600 dark:text-veda-400 mt-0.5">✓</span>
            NCERT-aligned chapter-by-chapter notes with key concepts, formulae, and diagrams
          </li>
          <li className="flex items-start gap-2">
            <span className="text-veda-600 dark:text-veda-400 mt-0.5">✓</span>
            Videos in both English and Hindi for every chapter
          </li>
          <li className="flex items-start gap-2">
            <span className="text-veda-600 dark:text-veda-400 mt-0.5">✓</span>
            LibreTexts links for deeper understanding beyond the NCERT syllabus
          </li>
        </ul>
      </div>
    </div>
  );
}
