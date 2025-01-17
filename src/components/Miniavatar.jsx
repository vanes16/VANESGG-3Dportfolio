import React, { useRef, useEffect } from 'react'
import { useAnimations, useFBX, useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export function Miniavatar(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/mini model/mini model.glb')
  const { animations } = useGLTF("/mini model/Poses.glb");
  const { actions } = useAnimations(animations, group);
  
  useEffect(() => {
    // Cek jika animasi 'Idle' ada
    if (actions['Idle']) {
      // Mulai animasi dan set loop berulang
      actions['Idle'].play();
      actions['Idle'].setLoop(THREE.LoopRepeat, Infinity);  // Looping selamanya

      // Log status animasi saat dimainkan
      console.log('Animasi "Idle" dimulai dan berulang...');

      // Jika animasi selesai atau loop, log di console
      actions['Idle'].onLoop = () => {
        console.log('Animasi "Idle" berulang...');
      };
    }

    // Fungsi cleanup: berhenti dari animasi saat komponen dibersihkan
    return () => {
      Object.values(actions).forEach((action) => action.stop());
    };
  }, [actions]);
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <primitive object={nodes.mixamorigHips} />
        <skinnedMesh
          name="mesh_0"
          geometry={nodes.mesh_0.geometry}
          material={nodes.mesh_0.material}
          skeleton={nodes.mesh_0.skeleton}
          morphTargetDictionary={nodes.mesh_0.morphTargetDictionary}
          morphTargetInfluences={nodes.mesh_0.morphTargetInfluences}
        />
        <skinnedMesh
          name="mesh_1"
          geometry={nodes.mesh_1.geometry}
          material={materials.InsideMouth}
          skeleton={nodes.mesh_1.skeleton}
          morphTargetDictionary={nodes.mesh_1.morphTargetDictionary}
          morphTargetInfluences={nodes.mesh_1.morphTargetInfluences}
        />
        <skinnedMesh
          name="mesh_2"
          geometry={nodes.mesh_2.geometry}
          material={materials.Teeth}
          skeleton={nodes.mesh_2.skeleton}
          morphTargetDictionary={nodes.mesh_2.morphTargetDictionary}
          morphTargetInfluences={nodes.mesh_2.morphTargetInfluences}
        />
        <skinnedMesh
          geometry={nodes.mesh_3.geometry}
          material={materials.Color_}
          skeleton={nodes.mesh_3.skeleton}
        />
        <skinnedMesh
          name="mesh_4"
          geometry={nodes.mesh_4.geometry}
          material={materials.BlackShiny}
          skeleton={nodes.mesh_4.skeleton}
          morphTargetDictionary={nodes.mesh_4.morphTargetDictionary}
          morphTargetInfluences={nodes.mesh_4.morphTargetInfluences}
        />
        <skinnedMesh
          geometry={nodes.mesh_5.geometry}
          material={materials.Color_}
          skeleton={nodes.mesh_5.skeleton}
        />
        <skinnedMesh
          geometry={nodes.mesh_6.geometry}
          material={nodes.mesh_6.material}
          skeleton={nodes.mesh_6.skeleton}
        />
        <skinnedMesh
          geometry={nodes.mesh_7.geometry}
          material={materials.Color_}
          skeleton={nodes.mesh_7.skeleton}
        />
        <skinnedMesh
          geometry={nodes.mesh_8.geometry}
          material={nodes.mesh_8.material}
          skeleton={nodes.mesh_8.skeleton}
        />
        <skinnedMesh
          geometry={nodes.mesh_9.geometry}
          material={materials.Color_}
          skeleton={nodes.mesh_9.skeleton}
        />
        <skinnedMesh
          geometry={nodes.mesh_10.geometry}
          material={nodes.mesh_10.material}
          skeleton={nodes.mesh_10.skeleton}
        />
        <skinnedMesh
          geometry={nodes.mesh_11.geometry}
          material={materials.White}
          skeleton={nodes.mesh_11.skeleton}
        />
        <skinnedMesh
          geometry={nodes.mesh_12.geometry}
          material={materials.Color_}
          skeleton={nodes.mesh_12.skeleton}
        />
      </group>
    </group>
  )
}

useGLTF.preload('mini model/mini model.glb')
