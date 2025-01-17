import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience"; 
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { UI } from "./components/UI"; 
import { Leva } from "leva";

function App() {
  return (
    <>
      <Leva hidden />
      <UI />
      <Canvas
        gl={{
          preserveDrawingBuffer: true,
        }}
        shadows
      >
        <color attach="background" args={["#130f30"]} />
        <fog attach="fog" args={["#130f30", 10, 40]} />
        <group position-y={-1}>
          <Experience />
        </group>
        <EffectComposer>
          <Bloom mipmapBlur luminanceThreshold={1.2} intensity={1.2} />
        </EffectComposer>
      </Canvas>
    </>
  );
}

export default App;
