import { useState, useEffect, useMemo } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import {
  FolderOpen, BookOpen, Hash, FileText, StickyNote,
  ChevronRight, ChevronDown, Search, ArrowLeft, Plus,
  Circle, Clock, CheckCircle,
} from 'lucide-react';
import { subjectRepo, topicRepo } from '../repositories';
import type { Subject, Topic, AcademicLevel } from '../models';
import { notesDB, type Note, newNote } from '../db/notes';
import { useUserData } from '../app/providers/UserDataProvider';
import { cn } from '../utils/cn';

const LEVEL_GROUPS: Array<{ level: AcademicLevel; label: string; subtitle: string; emoji: string }> = [
  { level: 'primary',          label: 'Primary School',    subtitle: 'Class 1–5',          emoji: '🌱' },
  { level: 'middle',           label: 'Middle School',     subtitle: 'Class 6–8',          emoji: '📗' },
  { level: 'secondary',        label: 'Secondary',         subtitle: 'Class 9–10',         emoji: '📘' },
  { level: 'higher-secondary', label: 'Higher Secondary',  subtitle: 'Class 11–12',        emoji: '📙' },
  { level: 'diploma',          label: 'Diploma / ITI',     subtitle: '',                   emoji: '🎓' },
  { level: 'undergraduate',    label: 'Undergraduate',     subtitle: 'B.Tech / B.Sc',      emoji: '🏛️' },
  { level: 'postgraduate',     label: 'Postgraduate',      subtitle: 'M.Tech / M.Sc',      emoji: '📜' },
  { level: 'competitive-exam', label: 'Competitive Exams', subtitle: 'JEE / GATE / NEET',  emoji: '🏆' },
  { level: 'professional',     label: 'Professional',      subtitle: 'CA / MBA / Law',      emoji: '💼' },
];

function ProgressIcon({ status }: { status: string }) {
  if (status === 'completed') return <CheckCircle size={13} className="text-emerald-500 flex-shrink-0" />;
  if (status === 'in-progress') return <Clock size={13} className="text-amber-500 flex-shrink-0" />;
  return <Circle size={13} className="text-stone-300 dark:text-stone-700 flex-shrink-0" />;
}

export function Explorer() {
  useSEO('Explorer', 'Browse subjects, topics, and notes organised by academic level.');
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedSubjectSlug = searchParams.get('subject') ?? '';
  const selectedLevel = searchParams.get('level') ?? '';
  const [treeSearch, setTreeSearch] = useState('');
  const [expandedLevels, setExpandedLevels] = useState<Set<string>>(new Set(['higher-secondary']));
  const [notes, setNotes] = useState<Note[]>([]);
  const [mobileView, setMobileView] = useState<'tree' | 'content'>('tree');
  const { progressMap } = useUserData();
  const navigate = useNavigate();

  useEffect(() => {
    notesDB.getAll().then(setNotes).catch(() => {});
  }, []);

  const subjectsByLevel = useMemo(() => {
    const all = subjectRepo.getAll();
    const map = new Map<string, Subject[]>();
    for (const s of all) {
      for (const lvl of s.academicLevels) {
        if (!map.has(lvl)) map.set(lvl, []);
        map.get(lvl)!.push(s);
      }
    }
    return map;
  }, []);

  const notesBySubject = useMemo(() => {
    const map = new Map<string, Note[]>();
    for (const n of notes) {
      if (n.subjectId) {
        if (!map.has(n.subjectId)) map.set(n.subjectId, []);
        map.get(n.subjectId)!.push(n);
      }
    }
    return map;
  }, [notes]);

  const selectedSubject = selectedSubjectSlug ? subjectRepo.getBySlug(selectedSubjectSlug) : undefined;
  const topics = selectedSubject ? topicRepo.getBySubjectId(selectedSubject.id) : [];
  const subjectNotes = selectedSubject ? (notesBySubject.get(selectedSubject.id) ?? []) : [];

  const levelsWithSubjects = LEVEL_GROUPS.filter(g => {
    const subs = subjectsByLevel.get(g.level) ?? [];
    if (subs.length === 0) return false;
    if (!treeSearch) return true;
    const q = treeSearch.toLowerCase();
    return g.label.toLowerCase().includes(q) ||
      subs.some(s => s.title.toLowerCase().includes(q) || s.shortTitle.toLowerCase().includes(q));
  });

  function toggleLevel(level: string) {
    setExpandedLevels(prev => {
      const next = new Set(prev);
      next.has(level) ? next.delete(level) : next.add(level);
      return next;
    });
  }

  function selectSubject(slug: string, level: string) {
    setSearchParams({ subject: slug, level });
    setMobileView('content');
  }

  function selectLevel(level: string) {
    setSearchParams({ level });
  }

  function goToNotes() {
    if (selectedSubject) {
      const n = newNote({ subjectId: selectedSubject.id });
      notesDB.save(n).catch(() => {});
    }
    navigate('/notes');
  }

  return (
    <div className="-mt-6 -mx-4 lg:-mx-8 overflow-hidden" style={{ height: 'calc(100svh - 64px)' }}>
      <div className="flex h-full">

        {/* ── Tree Panel ──────────────────────────── */}
        <aside className={cn(
          'flex flex-col border-r border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900',
          'w-full md:w-64 lg:w-72 flex-shrink-0 overflow-hidden',
          mobileView === 'content' ? 'hidden md:flex' : 'flex'
        )}>
          <div className="px-3 pt-3 pb-2.5 border-b border-stone-100 dark:border-stone-800 flex-shrink-0">
            <div className="flex items-center gap-2 mb-2.5">
              <FolderOpen size={15} className="text-veda-700 dark:text-veda-400 flex-shrink-0" />
              <h1 className="text-sm font-bold text-stone-800 dark:text-stone-100">Knowledge Explorer</h1>
            </div>
            <div className="relative">
              <Search size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
              <input
                type="search"
                placeholder="Filter subjects…"
                value={treeSearch}
                onChange={e => setTreeSearch(e.target.value)}
                className="w-full pl-7 pr-3 py-1.5 text-xs rounded-md bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-veda-700/40"
              />
            </div>
          </div>

          <nav className="flex-1 overflow-y-auto py-1 pb-14 lg:pb-2" aria-label="Knowledge tree">
            {levelsWithSubjects.length === 0 && (
              <p className="text-xs text-stone-400 px-4 py-6 text-center">No subjects match your search.</p>
            )}
            {levelsWithSubjects.map(group => {
              const allSubs = subjectsByLevel.get(group.level) ?? [];
              const subs = treeSearch
                ? allSubs.filter(s =>
                    s.title.toLowerCase().includes(treeSearch.toLowerCase()) ||
                    s.shortTitle.toLowerCase().includes(treeSearch.toLowerCase())
                  )
                : allSubs;
              const expanded = expandedLevels.has(group.level) || !!treeSearch;
              const isLevelActive = selectedLevel === group.level && !selectedSubjectSlug;

              return (
                <div key={group.level}>
                  <button
                    onClick={() => { toggleLevel(group.level); selectLevel(group.level); }}
                    className={cn(
                      'w-full flex items-center gap-2 px-3 py-2 text-xs font-semibold transition-colors',
                      isLevelActive
                        ? 'bg-veda-50 dark:bg-veda-900/20 text-veda-700 dark:text-veda-300'
                        : 'text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-800'
                    )}
                  >
                    {expanded ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
                    <span className="text-sm">{group.emoji}</span>
                    <span className="flex-1 text-left">{group.label}</span>
                    <span className="text-[10px] text-stone-400 font-normal">{allSubs.length}</span>
                  </button>

                  {expanded && subs.map(s => {
                    const nCount = notesBySubject.get(s.id)?.length ?? 0;
                    const isActive = selectedSubjectSlug === s.slug;
                    return (
                      <button
                        key={s.id}
                        onClick={() => selectSubject(s.slug, group.level)}
                        className={cn(
                          'w-full flex items-center gap-2 pr-3 py-1.5 text-xs transition-colors',
                          isActive
                            ? 'bg-veda-100 dark:bg-veda-900/30 text-veda-800 dark:text-veda-200 pl-6 border-l-2 border-veda-600'
                            : 'text-stone-600 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-stone-800 pl-7'
                        )}
                      >
                        <span
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: s.color ?? '#6b7280' }}
                        />
                        <span className="flex-1 text-left truncate">{s.shortTitle}</span>
                        <span className="text-[10px] text-stone-400">{s.topicIds.length}</span>
                        {nCount > 0 && (
                          <span className="text-[10px] text-veda-600 dark:text-veda-400 ml-0.5">📝{nCount}</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              );
            })}
          </nav>
        </aside>

        {/* ── Content Panel ────────────────────────── */}
        <main className={cn(
          'flex-1 flex flex-col overflow-hidden',
          mobileView === 'content' ? 'flex' : 'hidden md:flex'
        )}>
          {!selectedSubject ? (
            <div className="flex-1 overflow-y-auto p-5 pb-14 lg:pb-5">
              {selectedLevel ? (
                <LevelOverview
                  level={selectedLevel}
                  subjects={subjectsByLevel.get(selectedLevel) ?? []}
                  notesBySubject={notesBySubject}
                  onSelect={(slug) => selectSubject(slug, selectedLevel)}
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center py-20">
                  <FolderOpen size={44} className="text-stone-200 dark:text-stone-700 mb-4" />
                  <h2 className="text-base font-semibold text-stone-500 dark:text-stone-400">Select a level or subject</h2>
                  <p className="text-sm text-stone-400 mt-1 max-w-xs">Use the tree on the left to browse all subjects by academic level.</p>
                </div>
              )}
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto">
              <div className="md:hidden flex items-center gap-2 px-4 py-2.5 border-b border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 flex-shrink-0">
                <button
                  onClick={() => setMobileView('tree')}
                  className="flex items-center gap-1.5 text-sm text-veda-700 dark:text-veda-400"
                >
                  <ArrowLeft size={15} /> Back
                </button>
              </div>
              <SubjectExplorer
                subject={selectedSubject}
                topics={topics}
                notes={subjectNotes}
                progressMap={progressMap}
                onGoToNotes={goToNotes}
              />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

// ── Level Overview ──────────────────────────────────────────────────────────

function LevelOverview({
  level, subjects, notesBySubject, onSelect,
}: {
  level: string;
  subjects: Subject[];
  notesBySubject: Map<string, Note[]>;
  onSelect: (slug: string) => void;
}) {
  const group = LEVEL_GROUPS.find(g => g.level === level);
  return (
    <div className="max-w-2xl">
      <div className="mb-5">
        <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100">
          {group?.emoji} {group?.label ?? level}
        </h2>
        {group?.subtitle && (
          <p className="text-sm text-stone-500 mt-0.5">
            {group.subtitle} · {subjects.length} subject{subjects.length !== 1 ? 's' : ''}
          </p>
        )}
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        {subjects.map(s => {
          const nCount = notesBySubject.get(s.id)?.length ?? 0;
          return (
            <button
              key={s.id}
              onClick={() => onSelect(s.slug)}
              className="text-left bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-4 hover:border-veda-400 dark:hover:border-veda-600 transition-colors group"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 rounded-sm flex-shrink-0" style={{ backgroundColor: s.color ?? '#6b7280' }} />
                <span className="text-sm font-semibold text-stone-800 dark:text-stone-100 group-hover:text-veda-700 dark:group-hover:text-veda-400 transition-colors">
                  {s.shortTitle}
                </span>
              </div>
              <p className="text-xs text-stone-500 dark:text-stone-400 line-clamp-2 leading-relaxed mb-3">
                {s.description}
              </p>
              <div className="flex items-center gap-3 text-[11px] text-stone-400">
                <span className="flex items-center gap-1"><Hash size={10} />{s.topicIds.length} topics</span>
                {nCount > 0 && (
                  <span className="flex items-center gap-1 text-veda-600 dark:text-veda-400">
                    <StickyNote size={10} />{nCount} notes
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ── Subject Explorer ────────────────────────────────────────────────────────

function SubjectExplorer({
  subject, topics, notes, progressMap, onGoToNotes,
}: {
  subject: Subject;
  topics: Topic[];
  notes: Note[];
  progressMap: Record<string, string>;
  onGoToNotes: () => void;
}) {
  const [topicSearch, setTopicSearch] = useState('');
  const filtered = topicSearch
    ? topics.filter(t => t.title.toLowerCase().includes(topicSearch.toLowerCase()))
    : topics;

  const completedCount = topics.filter(t => progressMap[t.id] === 'completed').length;
  const inProgressCount = topics.filter(t => progressMap[t.id] === 'in-progress').length;

  return (
    <div className="p-5 max-w-2xl space-y-5 pb-14 lg:pb-5">
      {/* Subject header */}
      <div className="flex items-start gap-3">
        <div
          className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center"
          style={{ backgroundColor: subject.color ? `${subject.color}22` : '#f5f3ff' }}
        >
          <BookOpen size={18} style={{ color: subject.color ?? '#7c3aed' }} />
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100 truncate">{subject.title}</h2>
          <p className="text-sm text-stone-500 dark:text-stone-400 mt-0.5 line-clamp-2">{subject.description}</p>
        </div>
        <Link
          to={`/subjects/${subject.slug}`}
          className="flex-shrink-0 text-xs text-veda-700 dark:text-veda-400 hover:underline flex items-center gap-1 mt-0.5"
        >
          Full page <ChevronRight size={12} />
        </Link>
      </div>

      {/* Progress */}
      {topics.length > 0 && (
        <div className="bg-stone-50 dark:bg-stone-800/60 rounded-lg p-3">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="text-stone-500">Progress</span>
            <span className="text-stone-700 dark:text-stone-300">{completedCount}/{topics.length} completed</span>
          </div>
          <div className="h-1.5 bg-stone-200 dark:bg-stone-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 rounded-full transition-all"
              style={{ width: `${topics.length > 0 ? (completedCount / topics.length) * 100 : 0}%` }}
            />
          </div>
          <div className="flex gap-3 mt-2 text-[11px] text-stone-400">
            {completedCount > 0 && <span className="text-emerald-600">{completedCount} done</span>}
            {inProgressCount > 0 && <span className="text-amber-600">{inProgressCount} in progress</span>}
            <span>{topics.length - completedCount - inProgressCount} remaining</span>
          </div>
        </div>
      )}

      {/* Topics */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-semibold text-stone-800 dark:text-stone-200 flex items-center gap-2">
            <Hash size={14} className="text-stone-400" /> Topics ({topics.length})
          </h3>
          {topics.length > 6 && (
            <div className="relative">
              <Search size={12} className="absolute left-2 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
              <input
                type="search"
                placeholder="Filter…"
                value={topicSearch}
                onChange={e => setTopicSearch(e.target.value)}
                className="pl-6 pr-3 py-1 text-xs rounded-md border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-veda-700/40"
              />
            </div>
          )}
        </div>
        <div className="space-y-0.5">
          {filtered.map(t => {
            const status = progressMap[t.id] ?? 'not-started';
            return (
              <Link
                key={t.id}
                to={`/topics/${t.slug}`}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-stone-50 dark:hover:bg-stone-800/60 transition-colors group"
              >
                <ProgressIcon status={status} />
                <span className="flex-1 text-sm text-stone-800 dark:text-stone-200 group-hover:text-veda-700 dark:group-hover:text-veda-400 transition-colors">
                  {t.title}
                </span>
                <span className="text-[11px] text-stone-400 capitalize hidden sm:block">{t.difficulty}</span>
                <ChevronRight size={13} className="text-stone-300 dark:text-stone-700 group-hover:text-veda-500 transition-colors flex-shrink-0" />
              </Link>
            );
          })}
          {filtered.length === 0 && (
            <p className="text-xs text-stone-400 py-3 text-center">No topics match your filter.</p>
          )}
        </div>
      </div>

      {/* Notes */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-semibold text-stone-800 dark:text-stone-200 flex items-center gap-2">
            <StickyNote size={14} className="text-stone-400" /> My Notes ({notes.length})
          </h3>
          <button
            onClick={onGoToNotes}
            className="flex items-center gap-1 text-xs text-veda-700 dark:text-veda-400 hover:underline"
          >
            <Plus size={12} /> New note
          </button>
        </div>
        {notes.length === 0 ? (
          <div className="text-center py-5 border-2 border-dashed border-stone-200 dark:border-stone-800 rounded-lg">
            <p className="text-xs text-stone-400 mb-2">No notes for this subject yet.</p>
            <button
              onClick={onGoToNotes}
              className="text-xs text-veda-700 dark:text-veda-400 font-medium hover:underline"
            >
              Open Notes to create one →
            </button>
          </div>
        ) : (
          <div className="space-y-1.5">
            {notes.map(n => (
              <Link
                key={n.id}
                to="/notes"
                className="flex items-start gap-3 px-3 py-2.5 rounded-lg border border-stone-100 dark:border-stone-800 hover:border-stone-200 dark:hover:border-stone-700 transition-colors"
              >
                <FileText size={14} className="text-stone-400 mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-stone-800 dark:text-stone-200 truncate">
                    {n.title || 'Untitled note'}
                  </p>
                  <p className="text-xs text-stone-400 truncate mt-0.5">
                    {n.body ? n.body.slice(0, 60) + (n.body.length > 60 ? '…' : '') : 'Empty note'}
                  </p>
                </div>
                <ChevronRight size={13} className="text-stone-300 dark:text-stone-700 mt-0.5 flex-shrink-0" />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
