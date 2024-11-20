import { useAspect, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import { useRef } from 'react';
import { ShaderMaterial } from 'three';
import { fragment, vertex } from './shader';

export default function Model() {
  const planeRef = useRef<ShaderMaterial>(null);

  const texture = useTexture('/images/hanascript.png');
  const { width, height } = texture.image;

  const scale = useAspect(width, height, 1.5);

  const { amplitude, waveLength } = useControls({
    amplitude: { value: 0.25, min: 0, max: 5, step: 0.1 },
    waveLength: { value: 5, min: 0, max: 20, step: 0.5 },
  });

  const uniforms = useRef({
    uTime: { value: 0 },
    uTexture: { value: texture },
    uAmplitude: { value: amplitude },
    uWaveLength: { value: waveLength },
  });

  useFrame(() => {
    if (planeRef.current) {
      planeRef.current.uniforms.uWaveLength.value = waveLength;
      planeRef.current.uniforms.uAmplitude.value = amplitude;
      planeRef.current.uniforms.uTime.value += 0.02;
    }
  });

  return (
    <mesh scale={scale}>
      <planeGeometry args={[1, 1, 45, 45]} />
      {/* <meshBasicMaterial
        wireframe={true}
        color='red'
      /> */}
      <shaderMaterial
        ref={planeRef}
        vertexShader={vertex}
        fragmentShader={fragment}
        uniforms={uniforms.current}
      />
    </mesh>
  );
}
