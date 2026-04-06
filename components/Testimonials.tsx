import styles from './Testimonials.module.css';

const testimonials = [
  {
    avatar: 'SL',
    name: 'Sarah Lin',
    role: 'CTO at Nexus',
    text: 'Horizon cut our deployment time by 60%. The observability tools alone are worth the price of admission.',
  },
  {
    avatar: 'MR',
    name: 'Marcus Reid',
    role: 'Lead Engineer, Flowstate',
    text: 'I evaluated 12 platforms before choosing Horizon. The DX is miles ahead and the support team is incredible.',
  },
  {
    avatar: 'AC',
    name: 'Aisha Chen',
    role: 'Founder, Pulsara',
    text: 'We scaled from 0 to 50k users without touching our infrastructure config once. That says it all.',
  },
  {
    avatar: 'TP',
    name: 'Tom Petrov',
    role: 'VP Eng at Orbital',
    text: 'The AI anomaly detection caught a memory leak 20 minutes before it would have taken down production.',
  },
  {
    avatar: 'JK',
    name: 'Jamie Kim',
    role: 'Staff Eng, Layr',
    text: 'Real-time analytics finally make sense. The funnel visualization is something our PMs actually use daily.',
  },
  {
    avatar: 'NB',
    name: 'Nina Baxter',
    role: 'Platform Architect',
    text: 'Security compliance used to be a quarterly nightmare. Horizon made it a non-event for our SOC 2 audit.',
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHead}>
          <span className={styles.eyebrow}>Testimonials</span>
          <h2 className={styles.title}>Loved by engineering teams</h2>
          <p className={styles.subtitle}>Join thousands of teams already shipping faster with Horizon.</p>
        </div>
        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div key={t.name} className={styles.card}>
              <div className={styles.stars}>{'★★★★★'}</div>
              <p className={styles.text}>&ldquo;{t.text}&rdquo;</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.avatar}</div>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.role}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
