'use client';

import { useState } from 'react';
import styles from './Pricing.module.css';

const plans = [
  {
    name: 'Starter',
    monthlyPrice: 0,
    annualPrice: 0,
    desc: 'Perfect for indie hackers and personal projects.',
    cta: 'Get started free',
    popular: false,
    features: [
      '1 workspace',
      '3 team members',
      '10k monthly events',
      'Basic analytics',
      'Community support',
    ],
  },
  {
    name: 'Pro',
    monthlyPrice: 49,
    annualPrice: 39,
    desc: 'For growing teams that need more power and collaboration.',
    cta: 'Start free trial',
    popular: true,
    features: [
      'Unlimited workspaces',
      '25 team members',
      '1M monthly events',
      'Advanced analytics + AI',
      '200+ integrations',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    monthlyPrice: 199,
    annualPrice: 159,
    desc: 'Custom solutions for large-scale, security-first organizations.',
    cta: 'Contact sales',
    popular: false,
    features: [
      'Unlimited everything',
      'SSO & SAML',
      'Custom SLA',
      'Dedicated infra',
      'SOC 2 compliance toolkit',
      '24/7 dedicated support',
    ],
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className={styles.section}>
      <div className="container">
        <div className={styles.sectionHead}>
          <span className={styles.eyebrow}>Pricing</span>
          <h2 className={styles.title}>Simple, transparent pricing</h2>
          <p className={styles.subtitle}>No hidden fees. Cancel anytime.</p>

          <div className={styles.toggle}>
            <span className={!annual ? styles.toggleActive : styles.toggleInactive}>Monthly</span>
            <button
              className={`${styles.toggleBtn} ${annual ? styles.toggleBtnOn : ''}`}
              onClick={() => setAnnual(!annual)}
              aria-label="Toggle billing period"
            >
              <span className={styles.toggleThumb}></span>
            </button>
            <span className={annual ? styles.toggleActive : styles.toggleInactive}>
              Annual <span className={styles.saveBadge}>Save 20%</span>
            </span>
          </div>
        </div>

        <div className={styles.grid}>
          {plans.map((p) => (
            <div key={p.name} className={`${styles.card} ${p.popular ? styles.popular : ''}`}>
              {p.popular && <div className={styles.popularBadge}>Most Popular</div>}
              <h3 className={styles.planName}>{p.name}</h3>
              <p className={styles.planDesc}>{p.desc}</p>
              <div className={styles.priceRow}>
                <span className={styles.currency}>$</span>
                <span className={styles.price}>{annual ? p.annualPrice : p.monthlyPrice}</span>
                <span className={styles.period}>/mo</span>
              </div>
              {annual && p.annualPrice > 0 && (
                <p className={styles.billedAnnually}>Billed ${p.annualPrice * 12}/year</p>
              )}
              <a href="#" className={`${styles.planBtn} ${p.popular ? styles.planBtnPrimary : styles.planBtnGhost}`}>
                {p.cta}
              </a>
              <ul className={styles.featureList}>
                {p.features.map((f) => (
                  <li key={f} className={styles.featureItem}>
                    <span className={styles.check}>✓</span> {f}
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
