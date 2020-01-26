import React, { useEffect, useRef } from "react";
// @ts-ignore( TS2307: Cannot find module '../../assets/models/sidiousSkull.obj'.)
import sidiousSkull from "../../assets/models/sidiousSkull.obj";
import { MeshToonMaterial, Color, OBJLoader } from "../../three.exports";
import { useFrame, useLoader } from "react-three-fiber";

const SidiousSkull = (props: any) => {
  const eyeL = useRef();
  const eyeR = useRef();

  useFrame(({ camera, scene }) => {
    camera.position.y = (props.mouse.y - camera.position.z) * 0.06;
    camera.position.x = (-props.mouse.x - camera.position.z) * 0.04;
    camera.lookAt(scene.position);

    //TODO: FIGURE OUT HOW TO AVOID RESET OF EYES WHEN MOVING
    // // @ts-ignore( TS2339: Property 'position' does not exist on type 'MutableRefObject<undefined>')
    // eyeL.current.position.y += Math.cos(clock.getElapsedTime() * 2) * 0.0005;
    // // @ts-ignore( TS2339: Property 'position' does not exist on type 'MutableRefObject<undefined>')
    // eyeL.current.position.x += Math.cos(clock.getElapsedTime() * 2) * 0.0003;
    // // @ts-ignore( TS2339: Property 'position' does not exist on type 'MutableRefObject<undefined>')
    // eyeR.current.position.y += Math.cos(clock.getElapsedTime() * 2) * 0.0005;
    // // @ts-ignore( TS2339: Property 'position' does not exist on type 'MutableRefObject<undefined>')
    // eyeR.current.position.x -= Math.cos(clock.getElapsedTime() * 2) * 0.0003;
  });

  const obj = useLoader(OBJLoader, sidiousSkull);
  useEffect(() => {
    obj.children.map(child => {
      if (child.type === "Mesh") {
        //@ts-ignore(TS2339: Property 'material' does not exist on type 'Object3D'.)
        child.material = new MeshToonMaterial({ color: new Color(0x000000) });
      }
    });
  }, []);

  return (
    <primitive onClick={() => {}} object={obj}>
      {/* l eye */}
      <pointLight color={new Color(0xff0020)}>
        <mesh
          ref={eyeL}
          visible
          position={[-0.24, 0.18, 0.55]}
          rotation={[0, 0, 0]}
        >
          <sphereGeometry attach="geometry" args={[0.02, 20, 20]} />
          <meshToonMaterial attach="material" color={0xff0044} />
        </mesh>
      </pointLight>
      {/* r eye */}
      <pointLight color={new Color(0xff0020)}>
        <mesh
          ref={eyeR}
          visible
          position={[0.24, 0.18, 0.55]}
          rotation={[0, 0, 0]}
        >
          <sphereGeometry attach="geometry" args={[0.02, 20, 20]} />
          <meshToonMaterial attach="material" color={0xff0044} />
        </mesh>
      </pointLight>
    </primitive>
  );
};

export default SidiousSkull;
