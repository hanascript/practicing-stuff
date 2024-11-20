import { Canvas } from '@react-three/fiber';
import React from 'react';
import Model from './Model';
import { MotionValue } from 'framer-motion';

export default function Scene({progress}: {progress: MotionValue<number>}) {
  return (
    <Canvas>
      <Model progress={progress}/>
    </Canvas>
  );
}
