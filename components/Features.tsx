import styles from './Features.module.css';

const features = [
  {
    icon: '⚡',
    title: 'Blazing Fast',
    desc: 'Edge-optimized infrastructure delivers sub-50ms response times globally, keeping your users happy.',
  },
  {
    icon: '🛡️',
    title: 'Enterprise Security',
    desc: 'SOC 2 Type II certified. End-to-end encryption, SSO, and role-based access out of the box.',
  },
  {
    icon: '📊',
    title: 'Real-time Analytics',
    desc: 'Understand your users with live dashboards, funnel analysis, and custom event tracking.',
  },
  {
    icon: '🔗',
    title: '200+ Integrations',
    desc: 'Connect Slack, Stripe, GitHub, Salesforce and hundreds more with one-click integrations.',
  },
  {
    icon: '🤖',
    title: 'AI Co-pilot',
    desc: 'Let our AI surface insights, detect anomalies, and suggest optimizations automatically.',
  },
  {
    icon: '🌍',
    title: 'Global CDN',
    desc: 'Content delivered from 60+ PoPs worldwide. 99.99% uptime SLA guaranteed.',
  },
];

export default function Features() {
  return (
    <section id="features" className={styles.section}>
      <div className="container">
        <div className={styles.sectionHead}>
          <span className={styles.eyebrow}>Features</span>
          <h2 className={styles.title}>Everything your team needs</h2>
          <p className={styles.subtitle}>
            From infrastructure to analytics, Horizon brings your entire stack under one roof.
          </p>
        </div>
        <div className={styles.grid}>
          {features.map((f) => (
            <div key={f.title} className={styles.card}>
              <div className={styles.iconWrap}>{f.icon}</div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
