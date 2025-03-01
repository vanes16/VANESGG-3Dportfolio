import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useFBX, useAnimations } from "@react-three/drei";
import { useSound } from "./SoundContext";

export function Avatar(props) {
  const { isMuted } = useSound();
  const group = useRef();
  const [animation, setAnimation] = useState("Idle");
  const { nodes, materials } = useGLTF("/models/model.glb");
  const idleFbx = useFBX("/models/Idle.fbx");
  const greetingFbx = useFBX("/models/Greeting.fbx");

  const { actions: idleActions } = useAnimations(idleFbx.animations, group);
  const { actions: greetingActions } = useAnimations(greetingFbx.animations, group);

  useEffect(() => {
    if (idleActions && greetingActions) {
      const idleAction = idleActions["Idle"] || idleActions[Object.keys(idleActions)[0]];
      const greetingAction = greetingActions["Greeting"] || greetingActions[Object.keys(greetingActions)[0]];

      if (animation === "Idle" && idleAction) {
        greetingAction?.stop();
        idleAction.reset().fadeIn(0.2).play();
      } else if (animation === "Greeting" && greetingAction) {
        idleAction?.stop();
        greetingAction.reset().fadeIn(0.5).play();
      }
    }
  }, [animation, idleActions, greetingActions]);

  useEffect(() => {
    let timeout;
    if (!isMuted) {
      setAnimation("Greeting");
      timeout = setTimeout(() => {
        setAnimation("Idle");
      }, 3000); 
    }
    return () => clearTimeout(timeout);
  }, [isMuted]);

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
