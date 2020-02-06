import React, { useEffect } from "react";
//@ts-ignore
import { MeshToonMaterial, Color, OBJLoader } from "../../three.exports";
import useZ from "../../zustand/z";
import { useFrame, useLoader, useUpdate } from "react-three-fiber";
import SidiousSkullModel from "../../assets/models/SidiousSkull.obj";

const SidiousSkull: React.FC = () => {
  const eyeVelocity = useZ(z => z.eyeVelocity);
  const setEyeVelocity = useZ(z => z.setEyeVelocity);
  const mouse = useZ(z => z.mouse);

  const eyeL = useUpdate((mesh: THREE.Mesh) => {
    mesh.position.set(-0.24, 0.19, 0.6);
  }, []); // mountLeftEye
  const eyeR = useUpdate((mesh: THREE.Mesh) => {
    mesh.position.set(0.24, 0.19, 0.6);
  }, []); // mountRighteye

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

  useFrame(() => {
    eyeL.current.position.z += eyeVelocity;
    eyeR.current.position.z += eyeVelocity;
    if (eyeL.current.position.z > 1) setEyeVelocity(-eyeVelocity);
    if (eyeL.current.position.z < 0.56) {
      eyeL.current.position.z = 0.55;
      eyeR.current.position.z = 0.55;
    }
  }); // fireEyes

  const obj = useLoader(OBJLoader, SidiousSkullModel); // loadModel
  useEffect(() => {
    (obj as THREE.Mesh).children.map((child: THREE.Object3D): void => {
      if (child.type === "Mesh") {
        (child as THREE.Mesh).material = new MeshToonMaterial({
          color: new Color(0x000000)
        });
      }
    });
  }, [obj]); // injectMaterial

  return (
    <primitive object={obj}>
      {/* l eye */}
      <pointLight color={new Color(0xff0050)} intensity={1}>
        <group ref={eyeL}>
          <pointLight color={new Color(0xaa3feb)} intensity={1}>
            <mesh visible>
              <sphereGeometry attach="geometry" args={[0.02, 20, 20]} />
              <meshToonMaterial attach="material" color={0xff0030} />
            </mesh>
          </pointLight>
        </group>
      </pointLight>

      {/* r eye */}
      <pointLight color={new Color(0xff0050)} intensity={1}>
        <group ref={eyeR}>
          <pointLight color={new Color(0xaa3feb)} intensity={1}>
            <mesh visible>
              <sphereGeometry attach="geometry" args={[0.02, 20, 20]} />
              <meshToonMaterial attach="material" color={0xff0030} />
            </mesh>
          </pointLight>
        </group>
      </pointLight>
    </primitive>
  );
};

export default SidiousSkull;
