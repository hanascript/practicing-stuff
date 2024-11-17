import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

type CardxProps = {
  title: string;
  description: string;
  src: string;
  link: string;
  color: string;
  i: number;
  range: [number, number];
  targetScale: number;
  progress: MotionValue<number>;
};

export const Cardx = ({ title, description, src, link, color, i, range, targetScale, progress }: CardxProps) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const cardScale = useTransform(progress, range, [1, targetScale]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  return (
    <div
      ref={container}
      className='h-screen flex items-center justify-center sticky top-0'
    >
      <motion.div
        style={{ backgroundColor: color, top: `calc(-10% + ${i * 25}px)`, scale: cardScale }}
        className='w-[1000px] h-[500px] relative rounded-2xl origin-top p-12'
      >
        <h2 className='text-center text-2xl m-0'>{title}</h2>
        <div className='flex h-full mt-12 gap-12'>
          <div className='w-2/5 relative'>
            <p>{description}</p>
            <span className='flex items-center gap-2'>
              <a
                href={link}
                target='_blank'
              >
                See more
              </a>
              <svg
                width='22'
                height='12'
                viewBox='0 0 22 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z'
                  fill='black'
                />
              </svg>
            </span>
          </div>

          <div className='relative w-3/5 h-3/4 rounded-2xl overflow-hidden '>
            <motion.div
              className='w-full h-full'
              style={{ scale: imgScale }}
            >
              <Image
                fill
                src={`/images/${src}`}
                alt='image'
                className='object-cover'
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
