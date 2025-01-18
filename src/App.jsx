import { Canvas } from "@react-three/fiber";
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
        <color attach="background" args={["#555"]} />
        <fog attach="fog" args={["#555", 15, 25]} />
 
      </Canvas>
    </>
  );
}

export default App;
