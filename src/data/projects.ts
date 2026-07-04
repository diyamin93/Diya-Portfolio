export type ProjectType = 'analytics' | 'ml';

export interface Project {
  id: string;
  title: string;
  type: ProjectType;
  problem: string;
  approach: string;
  result: string;
  tools: string[];
  githubUrl: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'churn-prediction',
    title: 'Customer Churn Prediction',
    type: 'ml',
    problem:
      'A telecom provider had no systematic way to flag at-risk customers before they churned — the retention team was reacting after the fact, with no clear read on which customer attributes actually drove churn.',
    approach:
      'Cleaned and explored a 10K-row telecom customer dataset in Python, running full EDA and feature engineering to surface 8 key churn drivers. Built and compared three classification models — Logistic Regression, Random Forest, and XGBoost — then tuned hyperparameters specifically to cut down false negatives, since missing an at-risk customer is far costlier than a false alarm.',
    result:
      'The best model hit 87% accuracy, and hyperparameter tuning reduced false-negative churn predictions by 15%, giving the retention team a ranked list of at-risk customers and the drivers behind their risk to act on.',
    tools: ['Python', 'SQL', 'scikit-learn', 'XGBoost'],
    githubUrl: 'https://github.com/diyamin93/Customer-Churn-Prediction',
  },
  {
    id: 'qr-phishing-detector',
    title: 'AI-Powered QR Phishing Detection',
    type: 'ml',
    problem:
      'QR codes hide their destination URL until scanned, making them an easy phishing vector — and a raw "phishing or not" label isn\'t enough for someone to trust or act on, since there\'s no visibility into why a link was flagged risky.',
    approach:
      'Engineered a set of URL-based features in Python and pandas, then built an ML classification model to flag phishing links, layering in SHAP explainability so every prediction comes with the specific features driving it. Wrapped the model in an interactive Streamlit dashboard that translates the risk score and its drivers into a readable, actionable view.',
    result:
      'The model reached 95% accuracy, and the Streamlit dashboard turns each prediction into clear risk categorization and explainable insights rather than a black-box score.',
    tools: ['Python', 'pandas', 'scikit-learn', 'SHAP', 'Streamlit'],
    githubUrl: 'https://github.com/diyamin93/QR-CODE-PHISING-DETECTOR',
  },
  {
    id: 'music-store-analysis',
    title: 'Music Store Data Analysis',
    type: 'analytics',
    problem:
      'The business had a relational sales database but no clear view into which products, customers, or behaviors were actually driving revenue — so marketing spend wasn\'t targeted at the segments that mattered most.',
    approach:
      'Queried and analyzed the PostgreSQL database directly, writing 15+ complex SQL queries using joins, aggregations, and window functions to break down sales by product, region, and customer over time.',
    result:
      'Surfaced the top 5 sales trends and distinct customer behavioral segments, feeding directly into a targeted marketing recommendation for the business.',
    tools: ['SQL', 'PostgreSQL'],
    githubUrl: 'https://github.com/diyamin93/SQL_Music_Store_Analysis',
  },
  {
    id: 'hr-analytics-dashboard',
    title: 'HR Analytics Dashboard',
    type: 'analytics',
    problem:
      'HR had raw employee data (IBM\'s sample workforce dataset) but no easy way to see workforce trends like income patterns, employee movement, or department composition at a glance.',
    approach:
      'Imported and cleaned the raw employee data, then built an interactive Tableau dashboard with bar graphs, line charts, and KPI indicators — using filters and parameters so the dashboard stays dynamic rather than static. Designed the layout around storytelling, surfacing top-performing categories, monthly trends, and regional comparisons.',
    result:
      'Delivered a dashboard tracking average monthly income by department and job role, number of companies worked for (as a proxy for employee movement) via line chart, and total employees segmented by department and job role — giving HR a single place to spot workforce trends.',
    tools: ['Tableau'],
    githubUrl: 'https://github.com/diyamin93/HR-Analytics-Tableau-Dashboard-',
  },
];
