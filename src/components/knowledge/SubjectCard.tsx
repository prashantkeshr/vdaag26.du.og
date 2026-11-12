import { Link } from 'react-router-dom';
import { BookOpen, ChevronRight } from 'lucide-react';
import type { Subject } from '../../models';
import { Card, Badge } from '../ui';
import { cn } from '../../utils/cn';

interface SubjectCardProps {
  subject: Subject;
  className?: string;
}

export function SubjectCard({ subject, className }: SubjectCardProps) {
  const levelLabel = subject.academicLevels[0]?.replace(/-/g, ' ') ?? '';
  const accentColor = subject.color ?? '#7c3aed';
  return (
    <Link to={`/subjects/${subject.slug}`}>
      <Card hover className={cn('p-5 flex flex-col gap-3 overflow-hidden', className)} style={{ borderTop: `3px solid ${accentColor}` }}>
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-stone-900 dark:text-stone-100 line-clamp-2 leading-snug">{subject.title}</h3>
            <p className="text-xs text-stone-400 dark:text-stone-600 mt-0.5">{subject.shortTitle}</p>
          </div>
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: `${accentColor}18` }}
          >
            <BookOpen size={16} style={{ color: accentColor }} />
          </div>
        </div>

        <p className="text-sm text-stone-600 dark:text-stone-400 line-clamp-2 leading-relaxed">
          {subject.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-2 border-t border-stone-100 dark:border-stone-800">
          <Badge variant="blue" className="capitalize">{levelLabel}</Badge>
          <span className="text-xs text-stone-400 flex items-center gap-0.5">
            {(subject.topicIds?.length ?? 0)} topics
            <ChevronRight size={12} />
          </span>
        </div>
      </Card>
    </Link>
  );
}
