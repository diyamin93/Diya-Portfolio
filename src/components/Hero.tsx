import { useEffect, useState } from 'react';

const QUERY = `SELECT skills FROM diya_panwar
WHERE domain IN ('analytics', 'ml')
  AND impact = true;`;

export default function Hero() {
  const [typed, setTyped] = useState('');

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (prefersReduced) {
      setTyped(QUERY);
      return;
    }

    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setTyped(QUERY.slice(0, i));
      if (i >= QUERY.length) clearInterval(interval);
    }, 25);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-start justify-center px-6 pt-20"
    >
      {/* background grid layer only — kept separate so the fade mask never touches the text/content above it */}
      <div className="grid-backdrop pointer-events-none absolute inset-0" />

      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-start gap-10 md:flex-row md:items-center md:justify-between">
        <div className="w-full max-w-3xl">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-teal">
            Data Analyst - Business Analytics
          </p>

          <h1 className="font-display text-4xl font-semibold leading-tight text-text sm:text-5xl md:text-6xl">
            I turn raw data into decisions&mdash;
            <span className="text-text/70">and build the models that predict what's next.</span>
          </h1>

          <div className="mt-10 w-full max-w-xl rounded-lg border border-line bg-surface/80 shadow-2xl shadow-black/40">
            <div className="flex items-center gap-1.5 border-b border-line px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="ml-2 font-mono text-[11px] text-muted">
                query.sql
              </span>
            </div>
            <pre className="overflow-x-auto px-5 py-4 font-mono text-sm leading-relaxed text-teal">
              {typed}
              <span className="animate-pulse text-muted">|</span>
            </pre>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-amber px-6 py-2.5 font-mono text-xs uppercase tracking-widest text-[#412402] transition-transform hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-line px-6 py-2.5 font-mono text-xs uppercase tracking-widest text-text transition-colors hover:border-teal hover:text-teal"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* circular photo placeholder — swap the inner content for an <img> once you have a headshot */}
        <div className="flex shrink-0 flex-col items-center gap-4 self-center md:self-auto">
          <div className="h-56 w-56 overflow-hidden rounded-full border border-line bg-surface-raised shadow-2xl shadow-black/40 sm:h-72 sm:w-72 md:h-80 md:w-80">
            <img
              src="/diya-photo.jpg"
              alt="Diya Panwar"
              className="h-full w-full object-cover"
              style={{ objectPosition: '60% 35%' }}
            />
          </div>
          <p className="font-display text-lg text-text">
            Hi, I'm Diya
          </p>
        </div>
      </div>
    </section>
  );
}
