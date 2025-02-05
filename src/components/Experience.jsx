import { OrbitControls, SoftShadows, useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Avatar } from "./Avatar";

export const Experience = () => {
  const texture = useTexture("images/background.jpg");
  const { viewport } = useThree();

  // Calculate the aspect ratio of the texture itself
  const aspectRatio = texture.image
    ? texture.image.width / texture.image.height
    : 1;

  // Make the texture "cover" the entire viewport area
  const planeWidth = viewport.width;
  const planeHeight = planeWidth / aspectRatio;

  // If the height is larger than the viewport's height, we need to scale the plane's height to match the viewport
  if (planeHeight < viewport.height) {
    const extraHeight = viewport.height / planeHeight;
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
        <directionalLight
          position={[3, 3, -5]}
          intensity={6}
          color={"#FCE7C8"}
        />
        <directionalLight
          position={[-3, 3, -5]}
          intensity={8}
          color={"#3cb1ff"}
        />
        <Avatar position={[0, -1.5, 4]} scale={1} />

        {/* Adjusted Plane size to cover the full viewport */}
        <mesh position={[0, 0, 0]}>
          <planeGeometry args={[viewport.width, viewport.height]} />
          <meshBasicMaterial map={texture} />
        </mesh>
      </>
    );
  }

  // Default behavior for wider screens
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
      <directionalLight position={[3, 3, -5]} intensity={6} color={"FCE7C8"} />
      <directionalLight
        position={[-3, 3, -5]}
        intensity={8}
        color={"#3cb1ff"}
      />
      <Avatar position={[0, -1.5, 4]} scale={1} />

      {/* Regular Plane with the calculated aspect ratio */}
      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[planeWidth, planeHeight]} />
        <meshBasicMaterial map={texture} />
      </mesh>
    </>
  );
};
