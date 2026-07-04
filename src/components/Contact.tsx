const links = [
  { label: 'Email', value: 'diyamin930@gmail.com', href: 'mailto:diyamin930@gmail.com' },
  { label: 'GitHub', value: 'github.com/diyamin93', href: 'https://github.com/diyamin93' },
  { label: 'LinkedIn', value: 'linkedin.com/in/diya-panwar', href: 'https://www.linkedin.com/in/diya-panwar' },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-line px-6 py-28 text-center"
    >
      <span className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 select-none font-mono text-[10rem] font-bold leading-none text-surface-raised sm:text-[13rem]" aria-hidden="true">
        05
      </span>

      <div className="relative mx-auto max-w-2xl">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-teal">
          05 / contact
        </p>
        <h2 className="mb-6 font-display text-3xl font-semibold text-text sm:text-4xl">
          Let's talk data.
        </h2>
        <p className="mb-10 text-muted">
          Open to Data Analyst & Business Analyst Role
        </p>

        <div className="flex flex-col items-center gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-sm text-text transition-colors hover:text-teal"
            >
              <span className="text-muted">{link.label}:</span> {link.value}
            </a>
          ))}
        </div>
      </div>

      <p className="mt-24 font-mono text-[11px] text-muted">
        Built with React &amp; TypeScript &mdash; deployed free on Vercel.
      </p>
    </section>
  );
}
