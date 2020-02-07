import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
//@ts-ignore
import { Color } from "../../three.x";
import SidiousSkull from "../SidiousSkull/SidiousSkull";
import useZ from "../../zustand/z";

const Scene: React.FC = () => {
  const setEyeVelocity = useZ(z => z.setEyeVelocity);
  const setMouse = useZ(z => z.setMouse);
  return (
    <Canvas
      onClick={(): void => setEyeVelocity(0.03)}
      onMouseMove={(e): void => {
        setMouse({
          x: (e.clientX - window.innerWidth / 2) / 2,
          y: (e.clientY - window.innerHeight / 2) / 2
        });
      }}
      camera={{ fov: 35, near: 0.1, far: 100, position: [0, 0, 5] }}
      pixelRatio={window.devicePixelRatio}
    >
      <directionalLight
        position={[10, 10, 10]}
        color={new Color(0x432342)}
        intensity={4}
      />
      <Suspense fallback={null}>
        <SidiousSkull />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
