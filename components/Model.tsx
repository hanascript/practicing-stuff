import { useAspect, useTexture } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useControls } from 'leva';
import { useRef } from 'react';
import * as THREE from 'three';
import { fragment, vertex } from './shader';
import { MotionValue, transform } from 'framer-motion';

export default function Model({ progress }: { progress: MotionValue<number> }) {
  const planeRef = useRef<THREE.Mesh>(null);

  const texture = useTexture('/images/hanascript.png');
  const { width, height } = texture.image;
  const { viewport } = useThree();

  const scale = useAspect(width, height, 0.5);

  const { amplitude, waveLength } = useControls({
    amplitude: { value: 0.5, min: 0, max: 2, step: 0.1 },
    waveLength: { value: 5, min: 0, max: 20, step: 0.5 },
  });

  const uniforms = useRef({
    uTime: { value: 0 },
    vUvScale: { value: new THREE.Vector2(0, 0) },
    uTexture: { value: texture },
    uAmplitude: { value: amplitude },
    uWaveLength: { value: waveLength },
  });

  useFrame(() => {
    if (planeRef.current) {
      const modifiedAmplitude = transform(progress.get(), [0, 1], [amplitude, 0]);
      const scaleX = transform(progress.get(), [0, 1], [scale[0], viewport.width]);
      const scaleY = transform(progress.get(), [0, 1], [scale[1], viewport.height]);

      planeRef.current.scale.x = scaleX;
      planeRef.current.scale.y = scaleY;

      const scaleRatio = scaleX / scaleY;
      const aspectRatio = width / height;

      const material = planeRef.current.material as THREE.ShaderMaterial;
      material.uniforms.vUvScale.value.set(1, aspectRatio / scaleRatio);
      material.uniforms.uWaveLength.value = waveLength;
      material.uniforms.uAmplitude.value = modifiedAmplitude;
      material.uniforms.uTime.value += 0.02;
    }
  });

  return (
    <mesh
      ref={planeRef}
      scale={scale}
    >
      <planeGeometry args={[1, 1, 45, 45]} />
      {/* <meshBasicMaterial
        wireframe={true}
        color='red'
      /> */}
      <shaderMaterial
        vertexShader={vertex}
        fragmentShader={fragment}
        uniforms={uniforms.current}
      />
    </mesh>
  );
}
