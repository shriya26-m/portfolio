import { Canvas } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, OrbitControls } from "@react-three/drei";

const ThreeScene = () => {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <directionalLight position={[2, 2, 5]} />

      <Sphere args={[1, 100, 200]} scale={2}>
        <MeshDistortMaterial
          color="#8b5cf6"
          distort={0.4}
          speed={2}
        />
      </Sphere>

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default ThreeScene;