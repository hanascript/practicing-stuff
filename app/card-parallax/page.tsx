'use client';

import { motion, useScroll } from 'framer-motion';
import Lenis from 'lenis';
import { useEffect, useRef } from 'react';
import { Cardx } from './_components/cardx';
import { projects } from './_components/data';

export default function CardParallax() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      autoRaf: true,
    });

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div>
      <motion.div
        className='mt-[50vh]'
        ref={container}
      >
        {projects.map((project, index) => {
          const targetScale = 1 - (projects.length - index) * 0.05;

          return (
            <Cardx
              key={index}
              {...project}
              i={index}
              range={[0.25 * index, 1]}
              targetScale={targetScale}
              progress={scrollYProgress}
            />
          );
        })}
      </motion.div>
      <div className='h-[100vh] bg-black text-white'></div>
    </div>
  );
}
