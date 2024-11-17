import { MotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const Section2 = ({ progress }: { progress: MotionValue<number> }) => {
  const scale = useTransform(progress, [0, 1], [0.8, 1]);
  const rotate = useTransform(progress, [0, 1], [-5, 0]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className='h-screen relative'
    >
      <Image
        src='/images/background.jpg'
        alt='image'
        fill
        className='object-cover'
      />
    </motion.div>
  );
};
