const skillGroups = [
  {
    label: 'Languages & Query',
    skills: ['Python', 'SQL (MySQL, PostgreSQL)', 'HTML', 'CSS'],
  },
  {
    label: 'Libraries & Frameworks',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'TensorFlow', 'PyTorch'],
  },
  {
    label: 'BI & Analytics Tools',
    skills: [
      'Power BI',
      'DAX',
      'Power Query',
      'Tableau',
      'Microsoft Excel (Advanced)',
      'Jupyter Notebook',
      'VS Code',
    ],
  },
  {
    label: 'Core Competencies',
    skills: [
      'ETL',
      'Data Wrangling',
      'Exploratory Data Analysis (EDA)',
      'Feature Engineering',
      'Statistical Analysis',
      'Predictive Analytics',
      'Business Intelligence',
      'Data Visualization',
      'Dashboard Development',
      'Machine Learning',
      'Data Modeling',
      'Database Management',
      'Stakeholder Reporting',
      'Problem Solving',
    ],
  },
  {
    label: 'Cloud',
    skills: ['AWS (Basic – S3, data storage & retrieval)'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden border-t border-line bg-surface/40 px-6 py-28">
      <span className="pointer-events-none absolute -top-6 right-0 select-none font-mono text-[10rem] font-bold leading-none text-surface-raised sm:text-[13rem]" aria-hidden="true">
        03
      </span>

      <div className="relative mx-auto max-w-5xl">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-teal">
          03 / toolkit
        </p>
        <h2 className="mb-12 font-display text-3xl font-semibold text-text sm:text-4xl">
          Skills
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.label} className="rounded-lg p-3 transition-all duration-300 hover:-translate-y-0.5 hover:bg-surface-raised/60 hover:shadow-[0_0_30px_-12px_rgba(79,209,197,0.5)]">
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">
                {group.label}
              </h3>
              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-sm text-text"
                  >
                    <span className="h-1 w-1 rounded-full bg-teal" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
