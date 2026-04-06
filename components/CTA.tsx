import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.section}>
      <div className={styles.glow}></div>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.title}>Ready to ship faster?</h2>
        <p className={styles.subtitle}>
          Join 10,000+ teams using Horizon to build better products.
          Start free, scale when you\'re ready.
        </p>
        <div className={styles.actions}>
          <a href="#" className={styles.btnPrimary}>Get started for free</a>
          <a href="#" className={styles.btnSecondary}>Talk to sales</a>
        </div>
        <p className={styles.note}>No credit card required &bull; Set up in 2 minutes</p>
      </div>
    </section>
  );
}
