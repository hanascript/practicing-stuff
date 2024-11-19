// This is a vertex shader(gsl code)
// 1. position: Built-in attribute containing the vertex position
// 2. projectionMatrix & modelViewMatrix: Built-in uniforms for transforming vertices
// 3. gl_Position: Final clip-space position of the vertex

export const vertex = `
  uniform float uAmplitude;
  uniform float uWaveLength;
  uniform float uTime;

  void main() {
    vec3 newPosition = position;
    float wave = uAmplitude * sin(position.x * uWaveLength + uTime);
    newPosition.z += wave;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  }
`;

export const fragment = `
  void main() {
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
  }
`;
