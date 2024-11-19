'use client';

import { Leva } from 'leva';
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('@/components/Scene'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <>
      <Leva />
      <div className='h-screen'>
        <Scene />
      </div>
    </>
  );
}
