'use client';

import { useEffect, useRef } from 'react';
import { skills } from '@/lib/content';
import styles from './Skills.module.css';

export default function Skills() {
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
    <section id="skills" ref={sectionRef} className="section">
      <div className="container">
        <h2 className={`${styles.sectionTitle} observe`}>The Tools of My Craft</h2>
        <p className={`${styles.sectionSubtitle} observe`}>
          A comprehensive toolkit spanning modern frontend frameworks, robust backend technologies, 
          and essential development tools that power my projects.
        </p>

        <div className={styles.grid}>
          {skills.map((category, index) => (
            <div
              key={category.category}
              className={`${styles.category} observe`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className={styles.categoryName}>{category.category}</h3>
              <ul className={styles.skillList}>
                {category.skills.map((skill) => (
                  <li key={skill} className={styles.skill}>
                    {skill}
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
