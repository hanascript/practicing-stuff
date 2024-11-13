import Image from 'next/image';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

type ModalProps = {
  modal: { active: boolean; index: number };
  projects: { title: string; src: string; color: string }[];
};

const scaleAnimation = {
  initial: { scale: 0, x: '-50%', y: '-50%' },
  open: { scale: 1, x: '-50%', y: '-50%', transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
  closed: { scale: 0, x: '-50%', y: '-50%', transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } },
};

export const Modal = ({ modal, projects }: ModalProps) => {
  const { active, index } = modal;
  const container = useRef<HTMLDivElement>(null);
  const cursor = useRef<HTMLDivElement>(null);
  const cursorText = useRef<HTMLDivElement>(null);
  // Creates smooth mouse-following animation for the modal
  // Uses GSAP's quickTo for optimized performance, updating the modal's position
  // based on the user's cursor coordinates with easing
  useEffect(() => {
    const moveContainerX = gsap.quickTo(container.current, 'left', { duration: 0.8, ease: 'power3' });
    const moveContainerY = gsap.quickTo(container.current, 'top', { duration: 0.8, ease: 'power3' });

    const moveCursorX = gsap.quickTo(cursor.current, 'left', { duration: 0.5, ease: 'power3' });
    const moveCursorY = gsap.quickTo(cursor.current, 'top', { duration: 0.5, ease: 'power3' });

    const moveTextX = gsap.quickTo(cursorText.current, 'left', { duration: 0.45, ease: 'power3' });
    const moveTextY = gsap.quickTo(cursorText.current, 'top', { duration: 0.45, ease: 'power3' });

    window.addEventListener('mousemove', e => {
      const { clientX, clientY } = e;

      moveContainerX(clientX);
      moveContainerY(clientY);
      moveCursorX(clientX);
      moveCursorY(clientY);
      moveTextX(clientX);
      moveTextY(clientY);
    });
  }, []);

  return (
    <>
      <motion.div
        ref={container}
        variants={scaleAnimation}
        initial={'initial'}
        animate={active ? 'open' : 'closed'}
        className='h-[350px] w-[400px] flex items-center justify-center absolute overflow-hidden pointer-events-none'
      >
        <div
          className='h-full w-full absolute transition-all duration-200 ease-in-out'
          style={{ top: index * -100 + '%' }}
        >
          {projects.map((project, index) => {
            const { src, color } = project;
            return (
              <div
                key={`modal_${index}`}
                style={{ backgroundColor: color }}
                className='h-full w-full flex items-center justify-center'
              >
                <Image
                  src={`/images/${src}`}
                  alt='project'
                  width={300}
                  height={0}
                  className='h-auto'
                />
              </div>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        ref={cursor}
        className='cursor'
        variants={scaleAnimation}
        initial={'initial'}
        animate={active ? 'open' : 'closed'}
      ></motion.div>
      <motion.div
        ref={cursorText}
        className='cursor bg-transparent text-white'
        variants={scaleAnimation}
        initial={'initial'}
        animate={active ? 'open' : 'closed'}
      >
        View
      </motion.div>
    </>
  );
};
