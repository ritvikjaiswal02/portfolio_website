'use client';

import { useEffect, useRef } from 'react';
import { projects } from '@/lib/content';
import styles from './Work.module.css';

export default function Work() {
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
    <section id="work" ref={sectionRef} className="section">
      <div className="container">
        <h2 className={`${styles.sectionTitle} observe`}>Projects That Define Impact</h2>
        <p className={`${styles.sectionSubtitle} observe`}>
          Each project represents a journey of solving complex problems with elegant solutions, 
          pushing the boundaries of what's possible in web development.
        </p>

        <div className={styles.projects}>
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`${styles.project} observe`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <p className={styles.details}>{project.details}</p>

              <div className={styles.tech}>
                {project.tech.map((item) => (
                  <span key={item} className={styles.techItem}>
                    {item}
                  </span>
                ))}
              </div>

              {(project.github || project.live) && (
                <div className={styles.links}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`link-expand ${styles.link}`}
                    >
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`link-expand ${styles.link}`}
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
