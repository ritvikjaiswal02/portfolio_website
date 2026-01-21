'use client';

import { useEffect, useRef } from 'react';
import { contact } from '@/lib/content';
import styles from './Contact.module.css';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.observe');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <footer id="contact" ref={sectionRef} className={styles.footer}>
      <div className="container">
        <div className={`${styles.content} observe`}>
          <h2 className={styles.title}>Let's Build Something Extraordinary</h2>
          <p className={styles.subtitle}>
            Whether you're looking to collaborate on an innovative project, discuss technology, 
            or explore new opportunities—I'd love to hear from you.
          </p>

          <div className={styles.links}>
            <a
              href={`mailto:${contact.email}`}
              className={`link-expand ${styles.link}`}
              aria-label="Send email to Ritvik Jaiswal"
            >
              <span className={styles.linkIcon}>✉</span>
              Email
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`link-expand ${styles.link}`}
              aria-label="Visit Ritvik Jaiswal's GitHub profile"
            >
              <span className={styles.linkIcon}>⚡</span>
              GitHub
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`link-expand ${styles.link}`}
              aria-label="Visit Ritvik Jaiswal's LinkedIn profile"
            >
              <span className={styles.linkIcon}>💼</span>
              LinkedIn
            </a>
          </div>

          <p className={styles.copyright}>
            © {new Date().getFullYear()} Ritvik Jaiswal. Crafted with passion and precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
