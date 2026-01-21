'use client';

import { useEffect, useRef } from 'react';
import { experience } from '@/lib/content';
import styles from './Experience.module.css';

export default function Experience() {
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
    <section id="experience" ref={sectionRef} className="section">
      <div className="container">
        <h2 className={`${styles.sectionTitle} observe`}>Where I've Made My Mark</h2>
        <p className={`${styles.sectionSubtitle} observe`}>
          Real-world experience building production applications and collaborating with 
          talented teams to deliver exceptional results.
        </p>

        <div className={styles.timeline}>
          {experience.map((exp) => (
            <article key={exp.id} className={`${styles.experience} observe`}>
              <div className={styles.header}>
                <div>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <p className={styles.company}>{exp.company}</p>
                </div>
                <p className={styles.period}>{exp.period}</p>
              </div>

              <ul className={styles.achievements}>
                {exp.achievements.map((achievement, index) => (
                  <li key={index} className={styles.achievement}>
                    {achievement}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
