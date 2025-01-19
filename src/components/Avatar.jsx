import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useFBX, useAnimations } from "@react-three/drei";

export function Avatar(props) {
  const { nodes, materials } = useGLTF("/models/model.glb");

  // Import animasi FBX
  const { animations: idleAnimation } = useFBX("/models/Idle.fbx");
  const { animations: greetingAnimation } = useFBX("/models/Greeting.fbx");

  // Beri nama animasi
  idleAnimation[0].name = "Idle";
  greetingAnimation[0].name = "Greeting";

  // State untuk mengontrol animasi
  const [animation, setAnimation] = useState("Idle");

  // Grup model
  const group = useRef();

  // Menghubungkan animasi dengan group
  const { actions } = useAnimations(
    [idleAnimation[0], greetingAnimation[0]],
    group
  );

  // Efek untuk memutar animasi dengan fade in/fade out
  useEffect(() => {
    if (actions[animation]) {
      actions[animation].reset().fadeIn(0.5).play(); // Fade in animasi baru
    }

    return () => {
      if (actions[animation]) {
        actions[animation].fadeOut(0.5); // Fade out animasi lama
      }
    };
  }, [animation, actions]);

  // Timer untuk mengganti animasi secara bergantian
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimation((prev) => (prev === "Idle" ? "Greeting" : "Idle"));
    }, 5000); // Ganti animasi setiap 5 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
    </group>
  );
}

useGLTF.preload("/models/model.glb");
