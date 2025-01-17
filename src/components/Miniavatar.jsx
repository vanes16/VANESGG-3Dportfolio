import React, { useRef, useEffect } from 'react'
import { useAnimations, useFBX, useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export function Miniavatar(props) {
  const group = useRef();
  const { nodes, materials, animations} = useGLTF('/mini model/mini model.glb')
  const { actions } = useAnimations(animations, group);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="rig" rotation={[Math.PI / 2, 0, 0]}>
          <group name="mini_model">
            <skinnedMesh
              name="mini_model_1"
              geometry={nodes.mini_model_1.geometry}
              material={materials['Material_0.001']}
              skeleton={nodes.mini_model_1.skeleton}
            />
            <skinnedMesh
              name="mini_model_2"
              geometry={nodes.mini_model_2.geometry}
              material={materials['InsideMouth.001']}
              skeleton={nodes.mini_model_2.skeleton}
            />
            <skinnedMesh
              name="mini_model_3"
              geometry={nodes.mini_model_3.geometry}
              material={materials['Teeth.001']}
              skeleton={nodes.mini_model_3.skeleton}
            />
            <skinnedMesh
              name="mini_model_4"
              geometry={nodes.mini_model_4.geometry}
              material={materials['Color_.003']}
              skeleton={nodes.mini_model_4.skeleton}
            />
            <skinnedMesh
              name="mini_model_5"
              geometry={nodes.mini_model_5.geometry}
              material={materials['BlackShiny.001']}
              skeleton={nodes.mini_model_5.skeleton}
            />
            <skinnedMesh
              name="mini_model_6"
              geometry={nodes.mini_model_6.geometry}
              material={materials['Color_.004']}
              skeleton={nodes.mini_model_6.skeleton}
            />
            <skinnedMesh
              name="mini_model_7"
              geometry={nodes.mini_model_7.geometry}
              material={materials['Color_.005']}
              skeleton={nodes.mini_model_7.skeleton}
            />
            <skinnedMesh
              name="mini_model_8"
              geometry={nodes.mini_model_8.geometry}
              material={materials['White.001']}
              skeleton={nodes.mini_model_8.skeleton}
            />
          </group>
          <primitive object={nodes.root} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('mini model/mini model.glb')
