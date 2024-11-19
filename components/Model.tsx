import React, { useRef } from 'react';
import { useControls } from 'leva';
import { vertex, fragment } from './shader';
import { ShaderMaterial } from 'three';
import { useFrame } from '@react-three/fiber';
export default function Model() {
  const planeRef = useRef<ShaderMaterial>(null);

  const { amplitude, waveLength } = useControls({
    amplitude: { value: 0.25, min: 0, max: 5, step: 0.1 },
    waveLength: { value: 5, min: 0, max: 20, step: 0.5 },
  });

  const uniforms = useRef({
    uTime: { value: 0 },
    uAmplitude: { value: amplitude },
    uWaveLength: { value: waveLength },
  });

  useFrame(() => {
    if (planeRef.current) {
      planeRef.current.uniforms.uWaveLength.value = waveLength;
      planeRef.current.uniforms.uAmplitude.value = amplitude;
      planeRef.current.uniforms.uTime.value += 0.05;
    }
  });

  return (
    <mesh scale={[3, 3, 1]}>
      <planeGeometry args={[1, 1, 15, 15]} />
      {/* <meshBasicMaterial
        wireframe={true}
        color='red'
      /> */}
      <shaderMaterial
        ref={planeRef}
        vertexShader={vertex}
        fragmentShader={fragment}
        wireframe={true}
        uniforms={uniforms.current}
      />
    </mesh>
  );
}
