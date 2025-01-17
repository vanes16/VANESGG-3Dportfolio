import React, { useRef, useEffect } from 'react'
import { useAnimations, useFBX, useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export function Miniavatar(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/mini model/mini model.glb')
  const { animations } = useFBX('/mini model/Idle.fbx');
  const { actions } = useAnimations(animations, group);
  
  useEffect(() => {
    actions['Maximo.com'].reset().fadeIn(0.5).play();
    return () => {
      actions['Maximo.com'].reset().fadeOut(0.5);
    };
  }, ['Maximo.com']);

  
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
