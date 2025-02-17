import { OrbitControls, SoftShadows, useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Avatar } from "./Avatar";

export const Experience = () => {
  const texture = useTexture("images/background.jpg");
  const { viewport } = useThree();

  return (
    <>
      <directionalLight position={[-5, 5, 5]} intensity={0.7} />
      <directionalLight position={[3, 3, -5]} intensity={6} color={"#FCE7C8"} />
      <directionalLight position={[-3, 3, -5]} intensity={8} color={"#3cb1ff"} />
      <Avatar position={[0, -1.5, 4]} scale={1} />

      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[viewport.width, viewport.height]} />
        <meshBasicMaterial map={texture} />
      </mesh>
    </>
  );
};
