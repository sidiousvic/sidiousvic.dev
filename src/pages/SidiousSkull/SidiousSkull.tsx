import React, { useEffect } from "react";
import { MeshToonMaterial, Color, OBJLoader } from "../../three.exports";
import { useFrame, useLoader, useUpdate } from "react-three-fiber";
import { SidiousSkullProps } from "./types";
import SidiousSkullModel from "../../assets/models/SidiousSkull.obj";

const SidiousSkull: React.FC<SidiousSkullProps> = props => {
  const { mouse, eyeVelocity, setEyeVelocity } = props;

  // mount eyes
  const eyeL = useUpdate((mesh: THREE.Mesh) => {
    mesh.position.set(-0.24, 0.19, 0.55);
  }, []);
  const eyeR = useUpdate((mesh: THREE.Mesh) => {
    mesh.position.set(0.24, 0.19, 0.55);
  }, []);

  useFrame(({ camera, scene }) => {
    camera.position.y = (mouse.y - camera.position.z) * 0.06;
    camera.position.x = (-mouse.x - camera.position.z) * 0.04;
    camera.lookAt(scene.position);
  }); // moveCameraWithMouse

  useFrame(({ clock }) => {
    if (eyeL.current && eyeR.current) {
      eyeL.current.position.y += Math.cos(clock.getElapsedTime() * 2) * 0.0005;
      eyeL.current.position.x += Math.sin(clock.getElapsedTime() * 2) * 0.0003;
      eyeR.current.position.y += Math.cos(clock.getElapsedTime() * 2) * 0.0005;
      eyeR.current.position.x -= Math.sin(clock.getElapsedTime() * 2) * 0.0003;
    }
  }); // floatEyesGhostily

  useFrame(({}) => {
    eyeL.current.position.z += eyeVelocity;
    eyeR.current.position.z += eyeVelocity;
    if (eyeL.current.position.z > 1) {
      setEyeVelocity(-eyeVelocity);
    }
    if (eyeL.current.position.z < 0.55) {
      eyeL.current.position.z = 0.55;
      eyeR.current.position.z = 0.55;
    }
  }); // fireEyes

  const obj = useLoader(OBJLoader, SidiousSkullModel); // load model
  useEffect(() => {
    obj.children.map(child => {
      if (child.type === "Mesh") {
        (child as THREE.Mesh).material = new MeshToonMaterial({
          color: new Color(0x000000)
        });
      }
    });
  }, []); // inject material

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
