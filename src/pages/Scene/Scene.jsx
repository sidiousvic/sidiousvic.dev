import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import SidiousSkull from "../SidiousSkull/SidiousSkull.tsx";
import useZ from "../../zustand/z";

export default function Scene() {
  const setEyeVelocity = useZ(z => z.setEyeVelocity);
  const setMouse = useZ(z => z.setMouse);
  return (
    <Canvas
      onClick={() => setEyeVelocity(0.03)}
      onMouseMove={e => {
        setMouse({
          x: (e.clientX - window.innerWidth / 2) / 2,
          y: (e.clientY - window.innerHeight / 2) / 2
        });
      }}
      orthographic={false}
      camera={{ fov: 35, near: 0.1, far: 100, position: [0, 0, 5] }}
      pixelRatio={window.devicePixelRatio}
    >
      <directionalLight
        position={[10, 10, 10]}
        color={0x432342}
        intensity={4}
      />
      <Suspense fallback={null}>
        <SidiousSkull />
      </Suspense>
    </Canvas>
  );
}
