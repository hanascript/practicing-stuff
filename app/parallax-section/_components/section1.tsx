import { MotionValue, useTransform } from 'framer-motion';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const Section1 = ({ progress }: { progress: MotionValue<number> }) => {
  const scale = useTransform(progress, [0, 1], [1, 0.8]);
  const opacity = useTransform(progress, [0, 1], [1, 0.5]);
  const rotate = useTransform(progress, [0, 1], [0, -5]);

  return (
    <motion.div
      style={{ scale, opacity, rotate }}
      className='h-screen bg-red-500 text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh] sticky top-0'
    >
      <p>Scroll Perspective</p>
      <div className='flex gap-4'>
        <p>Section</p>
        <div className='relative w-[12.5vw]'>
          <Image
            src='/images/cactus.jpg'
            alt='image'
            fill
          />
        </div>
        <p>Transition</p>
      </div>
    </motion.div>
  );
};
