import { useState } from 'react';
import { projects, type ProjectType } from '../data/projects';

const typeLabel: Record<ProjectType, string> = {
  analytics: 'Analytics',
  ml: 'ML',
};

export default function Projects() {
  const [filter, setFilter] = useState<ProjectType | 'all'>('all');

  const filtered =
    filter === 'all' ? projects : projects.filter((p) => p.type === filter);

  return (
    <section id="projects" className="relative mx-auto max-w-5xl overflow-hidden px-6 py-28">
      <span className="pointer-events-none absolute -top-6 right-0 select-none font-mono text-[10rem] font-bold leading-none text-surface-raised sm:text-[13rem]" aria-hidden="true">
        02
      </span>

      <div className="relative mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-teal">
            02 / selected work
          </p>
          <h2 className="font-display text-3xl font-semibold text-text sm:text-4xl">
            Projects
          </h2>
        </div>

        <div className="flex gap-2 font-mono text-xs uppercase tracking-widest">
          {(['all', 'analytics', 'ml'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-1.5 transition-colors ${
                filter === f
                  ? 'border-teal text-teal'
                  : 'border-line text-muted hover:text-text'
              }`}
            >
              {f === 'all' ? 'All' : typeLabel[f]}
            </button>
          ))}
        </div>
      </div>

      <div className="relative grid gap-6 sm:grid-cols-2">
        {filtered.map((project) => (
          <article
            key={project.id}
            className="group flex flex-col rounded-xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-dim hover:shadow-[0_0_30px_-10px_rgba(79,209,197,0.5)]"
          >
            <div className="mb-4 flex items-center justify-between">
              <span
                className={`rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-widest ${
                  project.type === 'ml'
                    ? 'border-amber/40 text-amber'
                    : 'border-teal/40 text-teal'
                }`}
              >
                {typeLabel[project.type]}
              </span>
            </div>

            <h3 className="mb-3 font-display text-xl font-semibold text-text">
              {project.title}
            </h3>

            <dl className="mb-5 space-y-3 text-sm text-muted">
              <div>
                <dt className="mb-1 font-mono text-[10px] uppercase tracking-widest text-teal">
                  Problem
                </dt>
                <dd>{project.problem}</dd>
              </div>
              <div>
                <dt className="mb-1 font-mono text-[10px] uppercase tracking-widest text-teal">
                  Approach
                </dt>
                <dd>{project.approach}</dd>
              </div>
              <div>
                <dt className="mb-1 font-mono text-[10px] uppercase tracking-widest text-teal">
                  Result
                </dt>
                <dd>{project.result}</dd>
              </div>
            </dl>

            <div className="mt-auto flex items-center justify-between pt-4">
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded bg-surface-raised px-2 py-1 font-mono text-[10px] text-muted"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs text-text underline decoration-line underline-offset-4 transition-colors hover:text-teal hover:decoration-teal"
              >
                Code &rarr;
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
