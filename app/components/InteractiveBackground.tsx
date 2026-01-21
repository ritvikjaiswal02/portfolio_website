'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import styles from './InteractiveBackground.module.css';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speedX: number;
  speedY: number;
}

interface FloatingOrb {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function InteractiveBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [orbs, setOrbs] = useState<FloatingOrb[]>([]);
  const [mounted, setMounted] = useState(false);

  // Cursor tracking with spring physics
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Initialize particles and orbs on mount
  useEffect(() => {
    setMounted(true);

    // Create floating particles
    const newParticles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.1,
      speedX: (Math.random() - 0.5) * 0.02,
      speedY: (Math.random() - 0.5) * 0.02,
    }));
    setParticles(newParticles);

    // Create floating orbs (larger, glowing elements)
    const newOrbs: FloatingOrb[] = [
      { id: 1, x: 15, y: 20, size: 300, duration: 20, delay: 0 },
      { id: 2, x: 80, y: 60, size: 250, duration: 25, delay: 5 },
      { id: 3, x: 50, y: 80, size: 200, duration: 18, delay: 10 },
      { id: 4, x: 30, y: 50, size: 180, duration: 22, delay: 3 },
    ];
    setOrbs(newOrbs);
  }, []);

  // Track cursor movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        cursorX.set(x);
        cursorY.set(y);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  // Animate particles
  useEffect(() => {
    if (!mounted) return;

    const animateParticles = () => {
      setParticles((prev) =>
        prev.map((particle) => {
          let newX = particle.x + particle.speedX;
          let newY = particle.y + particle.speedY;

          // Wrap around edges
          if (newX < 0) newX = 100;
          if (newX > 100) newX = 0;
          if (newY < 0) newY = 100;
          if (newY > 100) newY = 0;

          return { ...particle, x: newX, y: newY };
        })
      );
    };

    const intervalId = setInterval(animateParticles, 50);
    return () => clearInterval(intervalId);
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div ref={containerRef} className={styles.container}>
      {/* Gradient mesh background */}
      <div className={styles.gradientMesh}>
        <motion.div
          className={styles.gradientOrb1}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className={styles.gradientOrb2}
          animate={{
            x: [0, -40, 20, 0],
            y: [0, 30, -20, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Floating orbs with glow */}
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className={styles.floatingOrb}
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: orb.size,
            height: orb.size,
          }}
          animate={{
            x: [0, 50, -30, 20, 0],
            y: [0, -40, 30, -20, 0],
            scale: [1, 1.1, 0.9, 1.05, 1],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Cursor-following glow */}
      <motion.div
        className={styles.cursorGlow}
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
        }}
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={styles.particle}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
          }}
        />
      ))}

      {/* Grid lines (subtle) */}
      <div className={styles.gridOverlay} />

      {/* Noise texture overlay */}
      <div className={styles.noiseOverlay} />
    </div>
  );
}
