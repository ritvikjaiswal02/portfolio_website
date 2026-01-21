'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoOpacity, setVideoOpacity] = useState(1);
  const [feathers, setFeathers] = useState<Array<{ id: number; x: number; delay: number }>>([]);

  // Debug video loading
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('loadeddata', () => {
        console.log('Video loaded successfully');
      });
      video.addEventListener('error', (e) => {
        console.error('Video error:', e);
      });
    }
  }, []);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = sectionRef.current?.offsetHeight || 1000;

      // Calculate video opacity based on scroll progress
      // Fade out video as user scrolls down
      const scrollProgress = Math.min(scrollPosition / heroHeight, 1);
      const newOpacity = Math.max(1 - scrollProgress * 1.5, 0);
      setVideoOpacity(newOpacity);

      // Generate feathers when scrolling
      if (scrollPosition > 100 && scrollPosition < heroHeight * 0.8) {
        const shouldSpawnFeather = Math.random() > 0.95; // 5% chance per scroll event

        if (shouldSpawnFeather) {
          const newFeather = {
            id: Date.now() + Math.random(),
            x: Math.random() * 100, // Random horizontal position (0-100%)
            delay: Math.random() * 0.5, // Random animation delay
          };

          setFeathers((prev) => [...prev, newFeather]);

          // Remove feather after animation completes
          setTimeout(() => {
            setFeathers((prev) => prev.filter((f) => f.id !== newFeather.id));
          }, 4000);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      className={styles.hero}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Video Background Layer */}
      <div
        className={styles.videoContainer}
        style={{ opacity: videoOpacity }}
      >
        <video
          ref={videoRef}
          className={styles.video}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/icarus.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.videoOverlay}></div>
      </div>

      {/* Feather Particles */}
      <div className={styles.feathersContainer}>
        {feathers.map((feather) => (
          <div
            key={feather.id}
            className={styles.feather}
            style={{
              left: `${feather.x}%`,
              animationDelay: `${feather.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Content Layer */}
      <div className={`container ${styles.heroContent}`}>
        <div className={styles.contentWrapper}>
          {/* Left Column: Image + Arrow */}
          <motion.div
            className={styles.imageColumn}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className={styles.imageContainer}>
              <div className={styles.imageGlow}></div>
              <div className={styles.imageFrame}>
                <Image
                  src="/pixel-art.png"
                  alt="Ritvik Jaiswal - Pixel Art"
                  width={400}
                  height={400}
                  className={styles.pixelImage}
                  priority
                />
              </div>
            </div>


          </motion.div>

          {/* Right Column: Text Content */}
          <div className={styles.textContent}>
            <motion.h1
              className={styles.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
            >
              Ritvik Jaiswal
            </motion.h1>

            <motion.p
              className={styles.subtitle}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Full-Stack Developer
            </motion.p>

            <motion.p
              className={styles.description}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Crafting digital experiences where code meets creativity. I transform
              complex ideas into elegant solutions, building full-stack applications
              that don&apos;t just work—they inspire.
            </motion.p>

            <motion.div
              className={styles.cta}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
            >
              <a href="#work" className={`link-expand ${styles.link}`}>
                View Work
              </a>
              <a href="#contact" className={`link-expand ${styles.link}`}>
                Contact
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
