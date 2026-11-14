import { useParams, Link, Navigate } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { subjectRepo, topicRepo, resourceRepo } from '../repositories';
import { TopicCard } from '../components/knowledge/TopicCard';
import { ResourceCard } from '../components/knowledge/ResourceCard';
import { GraduationCap, BookOpen, Video, FileText, ArrowLeft } from 'lucide-react';
import type { AcademicLevel } from '../models';

const CLASS_CONFIG: Record<string, {
  label: string;
  description: string;
  academicLevel: AcademicLevel;
  classYear?: 9 | 10 | 11 | 12;
  subjectSlugs: string[];
}> = {
  '9': {
    label: 'Class 9',
    description: 'Complete NCERT Class 9 study portal — Science, Mathematics, Social Science, English, Hindi.',
    academicLevel: 'secondary',
    classYear: 9,
    subjectSlugs: [
      'cbse-class-9-science',
      'cbse-class-9-mathematics',
      'cbse-class-9-social-science',
      'cbse-class-9-english',
      'cbse-class-9-hindi',
      'cbse-class-9-it',
    ],
  },
  '10': {
    label: 'Class 10',
    description: 'Complete NCERT Class 10 board exam portal — all subjects with notes, videos, and question papers.',
    academicLevel: 'secondary',
    classYear: 10,
    subjectSlugs: [],
  },
  '11': {
    label: 'Class 11',
    description: 'Class 11 — Science (Physics, Chemistry, Maths, Biology), Commerce (Accountancy, Business Studies, Economics), and Arts (History, Political Science, Geography, Sociology, Psychology).',
    academicLevel: 'higher-secondary',
    classYear: 11,
    subjectSlugs: [
      'hs-physics-class-11-12',
      'hs-chemistry-class-11-12',
      'hs-mathematics-class-11-12',
      'hs-biology-class-11-12',
      'hs-accountancy-class-11-12',
      'hs-business-studies-class-11-12',
      'hs-economics-class-11-12',
      'hs-history-class-11-12',
      'hs-political-science-class-11-12',
      'hs-geography-class-11-12',
      'hs-sociology-class-11-12',
      'hs-psychology-class-11-12',
    ],
  },
  '12': {
    label: 'Class 12',
    description: 'Class 12 — Science (Physics, Chemistry, Maths, Biology), Commerce (Accountancy, Business Studies, Economics), and Arts (History, Political Science, Geography, Sociology, Psychology).',
    academicLevel: 'higher-secondary',
    classYear: 12,
    subjectSlugs: [
      'hs-physics-class-11-12',
      'hs-chemistry-class-11-12',
      'hs-mathematics-class-11-12',
      'hs-biology-class-11-12',
      'hs-accountancy-class-11-12',
      'hs-business-studies-class-11-12',
      'hs-economics-class-11-12',
      'hs-history-class-11-12',
      'hs-political-science-class-11-12',
      'hs-geography-class-11-12',
      'hs-sociology-class-11-12',
      'hs-psychology-class-11-12',
    ],
  },
  'jee': {
    label: 'JEE',
    description: 'JEE Main & Advanced preparation — full topic coverage with PYQs and practice tests.',
    academicLevel: 'competitive-exam',
    subjectSlugs: ['hs-physics-class-11-12', 'hs-chemistry-class-11-12', 'hs-mathematics-class-11-12'],
  },
  'neet': {
    label: 'NEET',
    description: 'NEET UG preparation — Biology, Physics, Chemistry with NCERT-based notes and MCQs.',
    academicLevel: 'competitive-exam',
    subjectSlugs: ['hs-physics-class-11-12', 'hs-chemistry-class-11-12', 'hs-biology-class-11-12'],
  },
};

export function ClassHub() {
  const { level } = useParams<{ level: string }>();
  const config = level ? CLASS_CONFIG[level] : null;

  useSEO(
    config ? `${config.label} Study Hub` : 'Class Hub',
    config?.description,
    level ? `/class/${level}` : '/class'
  );

  if (!config) return <Navigate to="/class" replace />;

  const subjects = config.subjectSlugs
    .map(slug => subjectRepo.getBySlug(slug))
    .filter(Boolean) as NonNullable<ReturnType<typeof subjectRepo.getBySlug>>[];

  const classTopics = config.classYear
    ? topicRepo.getAll().filter(t => t.classYear === config.classYear)
    : subjects.flatMap(s => topicRepo.getMany(s.topicIds));

  const allResources = config.classYear
    ? resourceRepo.getAll().filter(r =>
        r.subjectIds.some(sid => subjects.map(s => s.id).includes(sid)) &&
        r.academicLevel === config.academicLevel
      )
    : resourceRepo.getAll().filter(r =>
        r.subjectIds.some(sid => subjects.map(s => s.id).includes(sid))
      );

  const pdfResources = allResources.filter(r => r.type === 'pdf').slice(0, 8);
  const videoResources = allResources.filter(r => r.type === 'video').slice(0, 8);

  const isComingSoon = subjects.length === 0;

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Back + header */}
      <div>
        <Link to="/class" className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 mb-4 transition-colors">
          <ArrowLeft size={14} /> All Hubs
        </Link>
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-veda-50 dark:bg-veda-900/20">
            <GraduationCap size={20} className="text-veda-700 dark:text-veda-400" />
          </div>
          <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-100">{config.label} Study Hub</h1>
        </div>
        <p className="text-stone-500 dark:text-stone-400 text-sm">{config.description}</p>
      </div>

      {isComingSoon ? (
        <div className="bg-stone-50 dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 p-10 text-center">
          <BookOpen size={36} className="mx-auto mb-3 text-stone-300 dark:text-stone-600" />
          <h2 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-2">Coming Soon</h2>
          <p className="text-sm text-stone-500 dark:text-stone-400">
            {config.label} content is being prepared. Check back shortly — we're adding full NCERT notes, videos, and resources.
          </p>
        </div>
      ) : (
        <>
          {/* Subjects grid */}
          <div>
            <h2 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-4 flex items-center gap-2">
              <BookOpen size={18} className="text-veda-600 dark:text-veda-400" /> Subjects
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {subjects.map(subject => (
                <Link
                  key={subject.id}
                  to={`/subjects/${subject.slug}`}
                  className="p-4 rounded-lg border bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 hover:border-veda-400 dark:hover:border-veda-600 hover:shadow-sm transition-all"
                >
                  <h3 className="font-medium text-stone-900 dark:text-stone-100 text-sm">{subject.title}</h3>
                  <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 line-clamp-2">{subject.description}</p>
                  <span className="text-xs text-veda-600 dark:text-veda-400 mt-2 inline-block">
                    {subject.topicIds.length} topic{subject.topicIds.length !== 1 ? 's' : ''} →
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Chapter topics */}
          {classTopics.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-4 flex items-center gap-2">
                <BookOpen size={18} className="text-veda-600 dark:text-veda-400" />
                All Chapters &amp; Topics
                <span className="text-sm font-normal text-stone-400">({classTopics.length})</span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {classTopics.map(topic => (
                  <TopicCard key={topic.id} topic={topic} />
                ))}
              </div>
            </div>
          )}

          {/* PDF resources */}
          {pdfResources.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-4 flex items-center gap-2">
                <FileText size={18} className="text-red-500" /> NCERT Books &amp; PDFs
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {pdfResources.map(r => (
                  <ResourceCard key={r.id} resource={r} />
                ))}
              </div>
            </div>
          )}

          {/* Video resources */}
          {videoResources.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-4 flex items-center gap-2">
                <Video size={18} className="text-red-500" /> Video Lectures (English &amp; Hindi)
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {videoResources.map(r => (
                  <ResourceCard key={r.id} resource={r} />
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
