import styles from './Footer.module.css';

const links = {
  Product: ['Features', 'Pricing', 'Changelog', 'Roadmap'],
  Company: ['About', 'Blog', 'Careers', 'Press'],
  Resources: ['Docs', 'API Reference', 'Status', 'Community'],
  Legal: ['Privacy', 'Terms', 'Security', 'Cookies'],
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoDot}></span>
              Horizon
            </div>
            <p className={styles.brandDesc}>
              The platform for modern engineering teams.
              Build, ship, and scale with confidence.
            </p>
            <div className={styles.socials}>
              {['𝕏', 'in', '⌥'].map((s, i) => (
                <a key={i} href="#" className={styles.social}>{s}</a>
              ))}
            </div>
          </div>

          <div className={styles.linkGroups}>
            {Object.entries(links).map(([group, items]) => (
              <div key={group} className={styles.linkGroup}>
                <h4 className={styles.groupTitle}>{group}</h4>
                <ul className={styles.linkList}>
                  {items.map((item) => (
                    <li key={item}>
                      <a href="#" className={styles.link}>{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>&copy; {new Date().getFullYear()} Horizon, Inc. All rights reserved.</p>
          <p className={styles.madeWith}>Made with ♥ for builders</p>
        </div>
      </div>
    </footer>
  );
}
