'use client';

import { useState } from 'react';
import styles from './FAQ.module.css';

const faqs = [
  {
    q: 'Is there really a free plan?',
    a: 'Yes! Our Starter plan is free forever, with no credit card required. You can upgrade at any time as your team grows.',
  },
  {
    q: 'Can I migrate from another platform?',
    a: 'Absolutely. We offer guided migration support and a dedicated migration toolkit. Most teams are up and running within a day.',
  },
  {
    q: 'How does the AI co-pilot work?',
    a: 'Our AI analyzes your event data, deployment patterns, and user behavior to surface insights and anomalies automatically—no configuration required.',
  },
  {
    q: 'What does the 99.99% uptime SLA mean?',
    a: 'We guarantee less than 52 minutes of downtime per year. If we miss this target, you receive automatic service credits.',
  },
  {
    q: 'Is Horizon SOC 2 compliant?',
    a: 'Yes. Horizon is SOC 2 Type II certified. We publish our audit reports and can provide them to Enterprise customers on request.',
  },
  {
    q: 'Can I cancel at any time?',
    a: 'Yes. No lock-in, no cancellation fees. You can downgrade or cancel your subscription at any point from your account settings.',
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`${styles.item} ${open ? styles.itemOpen : ''}`}>
      <button className={styles.question} onClick={() => setOpen(!open)}>
        {q}
        <span className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}>›</span>
      </button>
      {open && <p className={styles.answer}>{a}</p>}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className={styles.section}>
      <div className="container">
        <div className={styles.sectionHead}>
          <span className={styles.eyebrow}>FAQ</span>
          <h2 className={styles.title}>Frequently asked questions</h2>
        </div>
        <div className={styles.list}>
          {faqs.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
        </div>
      </div>
    </section>
  );
}
