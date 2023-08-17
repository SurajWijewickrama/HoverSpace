/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.4 dancing_man.glb
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Dancing_man(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/dancing_man.glb");
  const { actions, names } = useAnimations(animations, group);
  console.log(names);
  useEffect(() => {
    actions[names[0]].reset().fadeIn(0.5).play();
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.025}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            castShadow
            name="Ch43"
            geometry={nodes.Ch43.geometry}
            material={materials.Ch43_Body}
            skeleton={nodes.Ch43.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/dancing_man.glb");
