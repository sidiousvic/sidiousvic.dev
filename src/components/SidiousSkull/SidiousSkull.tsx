import React, { useEffect } from "react";
import { MeshToonMaterial, Color, OBJLoader } from "../../three.exports";
import { useFrame, useLoader, useUpdate } from "react-three-fiber";
import { SidiousSkullProps } from "./types";
import SidiousSkullModel from "../../assets/models/SidiousSkull.obj";

const SidiousSkull: React.FC<SidiousSkullProps> = props => {
  const eyeL = useUpdate((mesh: THREE.Mesh) => {
    mesh.position.set(-0.24, 0.19, 0.55);
  }, []);
  const eyeR = useUpdate((mesh: THREE.Mesh) => {
    mesh.position.set(0.24, 0.19, 0.55);
  }, []);

  useFrame(({ camera, scene }) => {
    camera.position.y = (props.mouse.y - camera.position.z) * 0.06;
    camera.position.x = (-props.mouse.x - camera.position.z) * 0.04;
    camera.lookAt(scene.position);
  });

  useFrame(({ clock }) => {
    if (eyeL.current && eyeR.current) {
      eyeL.current.position.y += Math.cos(clock.getElapsedTime() * 2) * 0.0005;
      eyeL.current.position.x += Math.sin(clock.getElapsedTime() * 2) * 0.0003;
      eyeR.current.position.y += Math.cos(clock.getElapsedTime() * 2) * 0.0005;
      eyeR.current.position.x -= Math.sin(clock.getElapsedTime() * 2) * 0.0003;
    }
  });

  const obj = useLoader(OBJLoader, SidiousSkullModel);
  useEffect(() => {
    obj.children.map(child => {
      if (child.type === "Mesh") {
        (child as THREE.Mesh).material = new MeshToonMaterial({
          color: new Color(0x000000)
        });
      }
    });
  }, []);

  return (
    <primitive object={obj}>
      {/* l eye */}
      <pointLight color={new Color(0xff0050)} intensity={2} distance={50}>
        <mesh ref={eyeL} visible>
          <sphereGeometry attach="geometry" args={[0.02, 20, 20]} />
          <meshToonMaterial attach="material" color={0xff0020} />
        </mesh>
      </pointLight>
      {/* r eye */}
      <pointLight color={new Color(0xff0050)} intensity={2} distance={50}>
        <mesh ref={eyeR} visible>
          <sphereGeometry attach="geometry" args={[0.02, 20, 20]} />
          <meshToonMaterial attach="material" color={0xff0020} />
        </mesh>
      </pointLight>
    </primitive>
  );
};

export default SidiousSkull;
