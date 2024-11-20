// This is a vertex shader(gsl code)
// 1. position: Built-in attribute containing the vertex position
// 2. projectionMatrix & modelViewMatrix: Built-in uniforms for transforming vertices
// 3. gl_Position: Final clip-space position of the vertex

export const vertex = `
  uniform float uAmplitude;
  uniform float uWaveLength;
  uniform float uTime;

  varying vec2 vUv;

  void main() {
    vUv = uv;
    vec3 newPosition = position;
    float wave = uAmplitude * sin(position.x * uWaveLength + uTime);
    newPosition.z += wave;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  }
`;

export const fragment = `
  uniform sampler2D uTexture;
  varying vec2 vUv;

  void main() {
    vec4 color = texture2D(uTexture, vUv);

    gl_FragColor = color;
  }
`;

/**
 * 
 * 
 * vec4 color = vec4(0.5, 0.5, 0.5, 1.0);

    if (vUv.x >= 0.0 && vUv.x <= 1.0 && vUv.y >= 0.0 && vUv.y <= 1.0) {
      color = texture2D(uTexture, vUv);
    }
 * 
 * 
 * 
 */