'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './SectionDivider.module.css';

export default function SectionDivider() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const lineWidth = useTransform(scrollYProgress, [0, 0.5, 1], ['0%', '100%', '100%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} className={styles.divider}>
      <motion.div className={styles.lineContainer} style={{ opacity }}>
        <motion.div className={styles.line} style={{ width: lineWidth }} />
        <motion.div className={styles.glow} style={{ width: lineWidth }} />
      </motion.div>

      {/* Floating accent dots */}
      <motion.div
        className={styles.dot}
        style={{ left: '20%' }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className={styles.dot}
        style={{ left: '50%' }}
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className={styles.dot}
        style={{ left: '80%' }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />
    </div>
  );
}
