import React, { useEffect } from "react";

import { Mesh, MeshToonMaterial } from "three";
import { useFrame, useLoader } from "react-three-fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import sidiousSkull from "../../assets/models/sidiousSkull.obj";

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
      if (child instanceof Mesh)
        child.material = new MeshToonMaterial({ color: 0x000000 });
    });
  }, []);

  return (
    <primitive onClick={() => {}} object={obj}>
      {/* l eye */}
      <pointLight intensity={1} color={0xff0020}>
        <mesh visible position={[-0.24, 0.19, 0.55]} rotation={[0, 0, 0]}>
          <sphereGeometry attach="geometry" args={[0.02, 20, 20]} />
          <meshToonMaterial attach="material" color={0xff0044} />
        </mesh>
      </pointLight>
      {/* r eye */}
      <pointLight color={0xff0020}>
        <mesh visible position={[0.24, 0.19, 0.55]} rotation={[0, 0, 0]}>
          <sphereGeometry attach="geometry" args={[0.02, 20, 20]} />
          <meshToonMaterial attach="material" color={0xff0044} />
        </mesh>
      </pointLight>
    </primitive>
  );
};

export default SidiousSkull;
