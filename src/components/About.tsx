import { useState } from 'react';

const experience = {
  role: 'Data Analyst Intern',
  company: 'Techlens Global',
  location: 'Gurugram',
  duration: 'June 2025 – July 2025',
  highlights: [
    'Built a real-time Tableau dashboard (Live Stats Energy) tracking 8+ KPIs — Total Visitors, Leads, LTQ%, Payable Clicks & New Quotes — with hourly vs. 3-month average trend comparison across web servers.',
    'Developed a Customer Churn Prediction model using Random Forest & XGBoost on the IBM Telecom dataset (7K+ records); tuned via GridSearchCV and evaluated with ROC AUC, F1-score, Precision & Recall.',
    'Performed end-to-end EDA & preprocessing using Pandas — label encoding, StandardScaler normalization, and SMOTE for class balancing on imbalanced telecom churn data.',
    'Deployed the churn model as a Flask web application with real-time inference using serialized .pkl model, encoder, and scaler pipeline objects.',
    'Operated in a production-grade Tableau Server environment (multi-node cluster, Linux CentOS 7.9, Tableau 2024.2) following a structured test-to-production deployment workflow.',
  ],
};

export default function About() {
  const [open, setOpen] = useState(false);

  return (
    <section id="about" className="relative mx-auto max-w-5xl overflow-hidden px-6 py-28">
      <span className="pointer-events-none absolute -top-6 right-0 select-none font-mono text-[10rem] font-bold leading-none text-surface-raised sm:text-[13rem]" aria-hidden="true">
        04
      </span>

      <p className="relative mb-2 font-mono text-xs uppercase tracking-[0.3em] text-teal">
        04 / about
      </p>
      <h2 className="relative mb-8 font-display text-3xl font-semibold text-text sm:text-4xl">
        About
      </h2>

      <div className="relative grid gap-10 sm:grid-cols-[1.4fr_1fr]">
        <p className="max-w-xl text-base leading-relaxed text-muted">
          Results-driven Data Analyst with hands-on experience in Python,
          SQL, Power BI, and Tableau. Proven ability to perform ETL
          operations, build interactive dashboards, conduct exploratory data
          analysis, and deliver business intelligence insights to
          stakeholders. Skilled in predictive analytics, data cleaning,
          feature engineering, statistical analysis, and machine learning
          model development. Basic familiarity with AWS for cloud-based data
          workflows. Strong communicator with a track record of translating
          complex data into actionable decisions that drive measurable
          business outcomes.
        </p>

        <div className="space-y-4 font-mono text-sm">
          <div className="flex justify-between border-b border-line pb-2">
            <span className="text-muted">Education</span>
            <span className="text-text">MCA</span>
          </div>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex w-full items-center justify-between border-b border-line pb-2 text-left transition-colors hover:border-teal"
          >
            <span className="text-muted">Experience</span>
            <span className="flex items-center gap-1.5 text-teal">
              Techlens Global
              <span aria-hidden="true" className="text-xs">↗</span>
            </span>
          </button>
          <div className="flex flex-col gap-1 border-b border-line pb-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
            <span className="text-muted">Location</span>
            <span className="text-text sm:text-right">Sirsa, Haryana, India (Open to Relocate)</span>
          </div>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 px-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-xl border border-line bg-surface-raised shadow-2xl shadow-black/50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-line px-6 py-4">
              <div>
                <h3 className="font-display text-lg font-semibold text-text">
                  {experience.role}
                </h3>
                <p className="font-mono text-xs text-muted">
                  {experience.company} · {experience.location}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="rounded-full border border-line px-2.5 py-1 font-mono text-xs text-muted transition-colors hover:border-teal hover:text-teal"
              >
                ✕
              </button>
            </div>

            <div className="px-6 py-5">
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-teal">
                {experience.duration}
              </p>
              <ul className="space-y-3">
                {experience.highlights.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2.5 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
