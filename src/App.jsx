import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience"; 
import { UI } from "./components/UI"; 

function App() {
  return (
    <>
      <UI /> 
      <Canvas
        camera={{
          position: [-1, 1, 5],
          fov: 45,
        }}
        shadows
      >
        <color attach="background" args={["#130f30"]} />
        <fog attach="fog" args={["#130f30", 10, 40]} />
        <group position-y={-1}>
           <Experience />
        </group> 
      </Canvas>
    </>
  );
}

export default App;
