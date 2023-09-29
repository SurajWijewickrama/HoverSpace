/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.4 car.glb
*/

import { Float, useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import useKeyboard from "../../useKeyboard";
import CarBody from "./CarBody";
import Wheels from "./wheels";

const speed = 2;
export function Car(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/car.glb");

  const { action } = useAnimations(animations, group);
  const [speed, setSpeed] = useState(3.5);
  const [rSpeed, setRSpeed] = useState(3.5);

  const keyMap = useKeyboard();
  const car = useRef();

  useFrame((_, delta) => {
    // keyMap["KeyE"] && (car.current.rotation.x -= speed * delta);
    // keyMap["KeyQ"] && (car.current.rotation.x += speed * delta);
    keyMap["KeyD"] && (car.current.rotation.y -= rSpeed * delta);
    keyMap["KeyA"] && (car.current.rotation.y += rSpeed * delta);
    keyMap["KeyW"] &&
      (car.current.position.z +=
        Math.cos(car.current.rotation.y) * speed * delta) &&
      (car.current.position.x +=
        Math.sin(car.current.rotation.y) * speed * delta);
    keyMap["KeyS"] &&
      (car.current.position.z -=
        Math.cos(car.current.rotation.y) * speed * delta) &&
      (car.current.position.x -=
        Math.sin(car.current.rotation.y) * speed * delta);
  });

  return (
    <Float speed={1} floatIntensity={0} floatingRange={[1, 2]}>
      <group
        ref={car}
        {...props}
        dispose={null}
        onClick={() => (speed < 10 ? setSpeed(50) : setSpeed(3.5))}
      >
        <group name="Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group
              name="7cc9d382d43242cbb5b2b43b1faba982fbx"
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.01}
            >
              <group name="Object_2">
                <group name="RootNode">
                  <group
                    name="car"
                    position={[-1.876, 15.287, -69.52]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={78.486}
                  >
                    <Wheels
                      nodes={nodes}
                      materials={materials}
                      speed={speed}
                      carColor={props.carColor}
                    />
                    <group
                      name="Cube004"
                      position={[0.024, -0.886, -0.195]}
                      scale={1.274}
                    >
                      <mesh
                        name="Cube004_cvet_0"
                        geometry={nodes.Cube004_cvet_0.geometry}
                        material={materials.cvet}
                      />
                      <mesh
                        name="Cube004_Material002_0"
                        geometry={nodes.Cube004_Material002_0.geometry}
                        material={materials["Material.002"]}
                        castShadows
                      />
                    </group>
                    <group
                      name="Cube005"
                      position={[0.008, -3.904, -0.33]}
                      rotation={[0.195, 0, 0]}
                      scale={[0.631, 0.04, 0.196]}
                    >
                      <mesh
                        name="Cube005_Material001_0"
                        geometry={nodes.Cube005_Material001_0.geometry}
                        material={materials["Material.006"]}
                        castShadows
                      />
                    </group>
                    <CarBody
                      nodes={nodes}
                      materials={materials}
                      carColor={props.carColor}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </Float>
  );
}

useGLTF.preload("/models/car.glb");