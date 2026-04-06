import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.glow}></div>
      <div className={`container ${styles.inner}`}>
        <div className={styles.badge}>🚀 Now in Public Beta</div>
        <h1 className={styles.headline}>
          Build the future,<br />
          <span className={styles.gradient}>ship faster.</span>
        </h1>
        <p className={styles.subheadline}>
          Horizon gives your team the infrastructure, tools, and insights to
          launch world-class products—without the complexity.
        </p>
        <div className={styles.cta}>
          <a href="#" className={styles.btnPrimary}>Start for free</a>
          <a href="#how-it-works" className={styles.btnSecondary}>
            <span className={styles.playIcon}>▶</span> Watch demo
          </a>
        </div>
        <p className={styles.note}>No credit card required &bull; Free forever plan</p>

        <div className={styles.dashboardWrap}>
          <div className={styles.dashboard}>
            <div className={styles.dashboardBar}>
              <span className={styles.dot} style={{background:'#ff5f57'}}></span>
              <span className={styles.dot} style={{background:'#febc2e'}}></span>
              <span className={styles.dot} style={{background:'#28c840'}}></span>
              <span className={styles.dashTitle}>horizon — dashboard</span>
            </div>
            <div className={styles.dashboardBody}>
              <div className={styles.statRow}>
                {[{label:'Active Users',val:'124k',up:true},{label:'MRR',val:'$48.2k',up:true},{label:'Churn',val:'1.2%',up:false}].map(s=>(
                  <div key={s.label} className={styles.statCard}>
                    <span className={styles.statLabel}>{s.label}</span>
                    <span className={styles.statVal}>{s.val}</span>
                    <span className={`${styles.statBadge} ${s.up ? styles.statUp : styles.statDown}`}>
                      {s.up ? '↑' : '↓'} {s.up ? '12%' : '0.3%'}
                    </span>
                  </div>
                ))}
              </div>
              <div className={styles.chartArea}>
                <div className={styles.chartLabel}>Revenue (last 7 days)</div>
                <div className={styles.bars}>
                  {[40,65,50,80,70,90,75].map((h,i)=>(
                    <div key={i} className={styles.bar} style={{height:`${h}%`}}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
