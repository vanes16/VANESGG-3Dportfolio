import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import { GLTFExporter } from "three-stdlib";
import { Asset } from "./Asset";

export const Miniavatar = ({ ...props }) => {
  const group = useRef();
  const { nodes } = useGLTF("/mini model/Mini model.glb");
  const { animations } = useFBX("/mini model/Idle.fbx");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions["mixamo.com"]?.play();
  }, [actions]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Mini model" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  );
};
