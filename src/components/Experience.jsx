import {
  Backdrop,
  Environment,
  OrbitControls,
  SoftShadows,
  useTexture,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Avatar } from "./Avatar";

export const Experience = () => {
  const texture = useTexture("images/background.jpg");
  const { viewport, size } = useThree();

  // Calculate the aspect ratio of the viewport
  const aspectRatio = size.width / size.height;

  return (
    <>
      <OrbitControls
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
        enableZoom={false}
      />

      <SoftShadows size={52} samples={16} />

      <directionalLight position={[-5, 5, 5]} intensity={0.7} />
      {/* Back Lights */}
      <directionalLight position={[3, 3, -5]} intensity={6} color={"FCE7C8"} />
      <directionalLight
        position={[-3, 3, -5]}
        intensity={8}
        color={"#3cb1ff"}
      />
      <Avatar position={[0, -1.5, 4]} scale={1} />
      <Environment map={texture} preset="sunset" />

      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[viewport.width * aspectRatio, viewport.height]} />
        <meshBasicMaterial map={texture} />
      </mesh>
    </>
  );
};
