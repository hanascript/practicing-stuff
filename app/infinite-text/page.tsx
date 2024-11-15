'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function InfiniteText() {
  const firstTextRef = useRef<HTMLParagraphElement>(null);
  const secondTextRef = useRef<HTMLParagraphElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  let xPercent = 0;
  let direction = 1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animation);

    gsap.to(sliderRef.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.25,
        onUpdate: e => (direction = e.direction * -1),
      },
      x: '-=300px',
    });
  }, []);

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }

    if (xPercent > 0) {
      xPercent = -100;
    }

    gsap.set(firstTextRef.current, { xPercent: xPercent });
    gsap.set(secondTextRef.current, { xPercent: xPercent });

    xPercent += 0.05 * direction;

    requestAnimationFrame(animation);
  };

  return (
    <div className='relative h-screen mb-[100vh] overflow-hidden'>
      <Image
        src='/images/background.jpg'
        alt='image'
        fill={true}
        className='object-cover'
      />
      <div className='absolute top-[calc(100vh-300px)]'>
        <div className='relative whitespace-nowrap flex'>
          <p
            ref={firstTextRef}
            className='m-0 text-red-500 text-[240px] font-medium'
          >
            Freelance Developer // 
          </p>
          <p
            ref={secondTextRef}
            className='m-0 text-blue-500 text-[240px] font-medium absolute left-full'
          >
            Freelance Developer // 
          </p>
        </div>
      </div>
    </div>
  );
}
