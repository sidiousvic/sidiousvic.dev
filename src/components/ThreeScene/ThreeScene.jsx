import React, { Suspense, useEffect, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useLoader, useThree } from "react-three-fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import sidiousSkull from "../../assets/3D/sidiousSkull.obj";

const SidiousSkull = props => {
  useFrame(({ clock, camera, scene }) => {
    camera.position.y = (props.mouse.y - camera.position.z) * 0.06;
    camera.position.x = (-props.mouse.x - camera.position.z) * 0.04;
    camera.lookAt(scene.position);
  });

  // load the skull, inject material
  const obj = useLoader(OBJLoader, sidiousSkull);
  useEffect(() => {
    obj.children.map(child => {
      if (child instanceof THREE.Mesh)
        child.material = new THREE.MeshToonMaterial({ color: 0x000000 });
    });
  }, []);

  return <primitive onClick={() => {}} object={obj}></primitive>;
};

export default function ThreeScene() {
  let [mouse, setMouse] = useState({ x: 0, y: 0 });
  return (
    <Canvas
      onMouseMove={e => {
        setMouse({
          x: (e.clientX - window.innerWidth / 2) / 2,
          y: (e.clientY - window.innerHeight / 2) / 2
        });
      }}
      camera={{ fov: 35, near: 0.1, far: 100, position: [0, 0, 5] }}
    >
      <directionalLight
        position={[10, 10, 10]}
        color={0x432342}
        intensity={1}
      />
      <Suspense fallback={null}>
        <SidiousSkull mouse={mouse} />
      </Suspense>
    </Canvas>
  );
}
