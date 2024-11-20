# Wave Shader

1. Create components for organization
- inside of the scene component, is where the canvas will be rendered
- inside of the model component, is where the mesh will be rendered

2. Use dynamic import for the scene component
- this is to prevent the scene from being server-side rendered
- Because of the dynamic import, we can return a placeholder from the scene while its loading.

3. In side the model initialize the Leva control panel so we can control the shader in real time
- Make sure to import the Leva component from leva

Now it is all set up and ready to start
First replace the material with a shader material and add the vertex and fragment shaders inside
- the vertex shader is where we define the geometry of the wave
- the fragment shader is where we define the color of the wave

In order to pass the controls to the shader, we need to add the uniforms to the shader material with a ref
- we need to use a ref because if the state changes it wont reset the uniforms
- then we need to add the uniforms to the shader material
- then we can use a useFrame hook to update the uniforms

Now that we have the wave, we need to be able to animate it
- we will create a time value that will increase at every frame and pass it to the shader and add it to the waveLength
- This will create a wave that moves from left to right because we are adding it inside the sin function which always returns a value between -1 and 1

Next step is adding an image on top of the wave
unfortunately since react19 a lot of hooks are not working. Downgrading to react18 and next14 fixed the issue




