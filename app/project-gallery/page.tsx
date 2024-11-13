'use client';

import { useState } from 'react';
import { Project } from './_components/project';
import { Modal } from './_components/modal';

export default function ProjectGallery() {
  const projects = [
    {
      title: 'C2 Montreal',
      src: 'c2montreal.png',
      color: '#000000',
    },
    {
      title: 'Office Studio',
      src: 'officestudio.png',
      color: '#8C8C8C',
    },
    {
      title: 'Locomotive',
      src: 'locomotive.png',
      color: '#E5E5E5',
    },
    {
      title: 'Silencio',
      src: 'silencio.png',
      color: '#706D63',
    },
  ];

  const [modal, setModal] = useState<{ active: boolean; index: number }>({
    active: false,
    index: 0,
  });

  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='w-[1000px] flex flex-col items-center justify-center'>
        {projects.map((project, index) => (
          <Project
            key={index}
            index={index}
            title={project.title}
            setModal={setModal}
          />
        ))}
      </div>
      <Modal
        modal={modal}
        projects={projects}
      />
    </div>
  );
}
