'use client';

import { useEffect, useRef } from 'react';
import { Section1 } from './_components/section1';
import { Section2 } from './_components/section2';
import Lenis from 'lenis';
import { useScroll, useTransform } from 'framer-motion';

export default function ParallaxSection() {
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
    <>
      <div
        ref={container}
        className='relative h-[200vh]'
      >
        <Section1 progress={scrollYProgress} />
        <Section2 progress={scrollYProgress} />
      </div>
      <div className='bg-black h-screen'></div>
    </>
  );
}
