import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import { GLTFExporter } from "three-stdlib";

export const Miniavatar = ({ ...props }) => {
  const group = useRef();
  const { nodes } = useGLTF("/mini model/mini model.glb");
  const { animations } = useFBX("/mini model/Idle.fbx");
  const { actions } = useAnimations(animations, group);
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  );
