import React, { Suspense, useState } from "react";
import { Canvas } from "react-three-fiber";
import SidiousSkull from "../SidiousSkull/SidiousSkull.jsx";

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
      pixelRatio={window.devicePixelRatio}
    >
      <directionalLight
        position={[10, 10, 10]}
        color={0x543453}
        intensity={2}
      />
      <Suspense fallback={null}>
        <SidiousSkull mouse={mouse} />
      </Suspense>
    </Canvas>
  );
}
