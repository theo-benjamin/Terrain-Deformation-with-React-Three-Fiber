# Dynamic Terrain Deformation with React Three Fiber

https://terrain-deformation-with-react-three-fiber.vercel.app/

Creating dynamic snowy terrain that reacts to footsteps by splitting the surface into chunks and deforming the snow in real time using textures like displacement and normal maps. The deformMesh function handles the magic, adjusting nearby vertices whenever a foot touches the ground, it calculates the deformation based on proximity and even adds wave effects for ripples, making the snow react naturally to movement. 

To handle larger areas, the terrain is divided into a 3x3 grid of chunks. Each chunk can save and restore its deformation state to avoid losing tracks when recycled. Chunks near the character are updated in real-time, while distant ones reset to save resources. This setup eliminates gaps, keeps tracks connected between chunks, and ensures the terrain looks seamless as the character moves. The result is a smooth, interactive snowy environment where footprints and trails form naturally and persist realistically.