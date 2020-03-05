import React, { Suspense, MouseEvent } from "react";
import { Canvas } from "react-three-fiber";
import SidiousSkull from "./SidiousSkull";
import useZ from "../zustand/z";
import { useWindowSize } from "../hooks";
import { window } from "browser-monads";

const Scene: React.FC = () => {
  const setMouse = useZ(z => z.setMouse);
  const windowSize = useWindowSize(900);

  window.addEventListener("mousemove", (e: MouseEvent) => {
    setMouse({
      x: (e.clientX - windowSize.innerWidth / 2) / 2,
      y: (e.clientY - windowSize.innerHeight / 2) / 2
    });
  });

  return (
    <Canvas
      invalidateFrameloop
      camera={{ fov: 35, near: 0.1, far: 100, position: [0, 0, 4.5] }}
      pixelRatio={window.devicePixelRatio}
    >
      <Suspense fallback={null}>
        <SidiousSkull />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
