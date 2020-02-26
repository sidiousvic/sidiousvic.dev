import React, { useEffect, MouseEvent } from "react";
// three
import { MeshToonMaterial, Color, OBJLoader } from "../three.x";
import useZ from "../zustand/z";
import { useFrame, useLoader, useUpdate } from "react-three-fiber";
import SidiousSkullModel from "../models/SidiousSkull.obj";

const SidiousSkull: React.FC = () => {
  // const eyeVelocity = useZ(z => z.eyeVelocity);
  // const setEyeVelocity = useZ(z => z.setEyeVelocity);
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

  // useFrame(({ clock }) => {
  //   if (eyeL.current && eyeR.current) {
  //     eyeL.current.position.y += Math.cos(clock.getElapsedTime() * 2) * 0.0005;
  //     eyeL.current.position.x += Math.sin(clock.getElapsedTime() * 2) * 0.0003;
  //     eyeR.current.position.y += Math.cos(clock.getElapsedTime() * 2) * 0.0005;
  //     eyeR.current.position.x -= Math.sin(clock.getElapsedTime() * 2) * 0.0003;
  //   }
  // }); // floatEyesGhostily

  // useFrame(() => {
  //   eyeL.current.position.z += eyeVelocity;
  //   eyeR.current.position.z += eyeVelocity;
  //   if (eyeL.current.position.z > 1) setEyeVelocity(-eyeVelocity);
  //   if (eyeL.current.position.z < 0.56) {
  //     eyeL.current.position.z = 0.55;
  //     eyeR.current.position.z = 0.55;
  //   }
  // }); // fireEyes

  const obj = useLoader(OBJLoader, SidiousSkullModel); // loadModel
  useEffect(() => {
    obj.children.map((child: THREE.Object3D): void => {
      (child as THREE.Mesh).material = new MeshToonMaterial({
        color: new Color(0x000000)
      });
    });
  }, [obj]); // injectMaterial

  return (
    <>
      <directionalLight
        position={[10, 10, 10]}
        color={new Color(0x432342)}
        intensity={4}
      />
      <group>
        <primitive
          onPointerOver={(e: MouseEvent): void => {
            const target = e.target as HTMLCanvasElement;
            target.style.cursor = "pointer";
          }}
          onPointerOut={(e: MouseEvent): void => {
            const target = e.target as HTMLCanvasElement;
            target.style.cursor = "default";
          }}
          object={obj}
          dispose={null}
        />
        {/* l eye */}
        <pointLight color={new Color(0xff0050)} intensity={1} />
        <group ref={eyeL}>
          <pointLight color={new Color(0xaa3feb)} intensity={1}>
            <mesh visible>
              <sphereBufferGeometry attach="geometry" args={[0.02, 20, 20]} />
              <meshToonMaterial attach="material" color={0xff0020} />
            </mesh>
          </pointLight>
        </group>

        {/* r eye */}
        <pointLight color={new Color(0xff0050)} intensity={1} />
        <group ref={eyeR}>
          <pointLight color={new Color(0xaa3feb)} intensity={1}>
            <mesh visible>
              <sphereBufferGeometry attach="geometry" args={[0.02, 20, 20]} />
              <meshToonMaterial attach="material" color={0xff0020} />
            </mesh>
          </pointLight>
        </group>
      </group>
    </>
  );
};

export default SidiousSkull;
