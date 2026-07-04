const links = [
  { label: 'projects', href: '#projects' },
  { label: 'skills', href: '#skills' },
  { label: 'about', href: '#about' },
  { label: 'contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-line/60 bg-ink/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-mono text-sm text-teal tracking-tight"
        >
          diya<span className="text-muted">.panwar</span>
        </a>
        <ul className="hidden gap-8 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-text"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/resume.pdf"
          className="rounded-full border border-line px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-text transition-colors hover:border-teal hover:text-teal"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
