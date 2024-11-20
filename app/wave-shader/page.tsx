'use client';

import { useScroll } from 'framer-motion';
import { Leva } from 'leva';
import dynamic from 'next/dynamic';
import { useRef } from 'react';

const Scene = dynamic(() => import('@/components/Scene'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <>
      <Leva />
      <div>
        <div
          className='h-[300vh] bg-black text-white'
          ref={container}
        >
          <div className='h-screen'>Scroll down</div>
          <div className='h-screen sticky top-0'>
            <Scene progress={scrollYProgress} />
          </div>
        </div>
        <div className='h-screen '>Scroll up</div>
      </div>
    </>
  );
}
