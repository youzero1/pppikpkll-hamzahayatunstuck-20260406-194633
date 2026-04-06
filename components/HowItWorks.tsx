import styles from './HowItWorks.module.css';

const steps = [
  {
    num: '01',
    title: 'Create your workspace',
    desc: 'Sign up in seconds and set up your team workspace. Invite members, configure roles, and you\'re ready to go.',
  },
  {
    num: '02',
    title: 'Connect your stack',
    desc: 'Integrate your existing tools with one click. We support 200+ apps including GitHub, Jira, Slack, and more.',
  },
  {
    num: '03',
    title: 'Ship with confidence',
    desc: 'Deploy, monitor, and iterate faster than ever. Our AI co-pilot catches issues before your users do.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className={styles.section}>
      <div className="container">
        <div className={styles.sectionHead}>
          <span className={styles.eyebrow}>How It Works</span>
          <h2 className={styles.title}>Up and running in minutes</h2>
          <p className={styles.subtitle}>No complicated setup. No dedicated DevOps team required.</p>
        </div>
        <div className={styles.steps}>
          {steps.map((s, i) => (
            <div key={s.num} className={styles.step}>
              {i < steps.length - 1 && <div className={styles.connector}></div>}
              <div className={styles.numWrap}>
                <span className={styles.num}>{s.num}</span>
              </div>
              <div className={styles.content}>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepDesc}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
