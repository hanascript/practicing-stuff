'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { useState } from 'react';
import { Loader } from './_components/loader';
import { AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 2000);
  }, []);

  return (
    <div>
      <AnimatePresence mode='wait'>{!isLoaded && <Loader />}</AnimatePresence>

      <div className='relative h-screen'>
        <Image
          src='/images/background.jpg'
          alt='image'
          fill
          className='object-cover'
        />
        <p className='absolute bottom-5 text-7xl text-white z-10 left-1/2 -translate-x-1/2'>Preloader</p>
      </div>
    </div>
  );
}
