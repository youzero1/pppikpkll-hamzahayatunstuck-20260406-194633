'use client';

import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoDot}></span>
          Horizon
        </a>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          <a href="#features" className={styles.navLink} onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#how-it-works" className={styles.navLink} onClick={() => setMenuOpen(false)}>How It Works</a>
          <a href="#pricing" className={styles.navLink} onClick={() => setMenuOpen(false)}>Pricing</a>
          <a href="#faq" className={styles.navLink} onClick={() => setMenuOpen(false)}>FAQ</a>
        </nav>

        <div className={styles.actions}>
          <a href="#" className={styles.btnGhost}>Log in</a>
          <a href="#" className={styles.btnPrimary}>Get Started</a>
        </div>

        <button
          className={styles.burger}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`${styles.burgerLine} ${menuOpen ? styles.burgerOpen : ''}`}></span>
          <span className={`${styles.burgerLine} ${menuOpen ? styles.burgerOpen : ''}`}></span>
          <span className={`${styles.burgerLine} ${menuOpen ? styles.burgerOpen : ''}`}></span>
        </button>
      </div>
    </header>
  );
}
