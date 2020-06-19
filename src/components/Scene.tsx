import React, { Suspense, MouseEvent } from "react";
import { Canvas } from "react-three-fiber";
import SidiousSkull from "./SidiousSkull";
import useZ from "../zustand/z";
import { useWindowSize } from "../hooks";
import { window } from "browser-monads";

export default function Scene() {
  const setMouse = useZ(z => z.setMouse);
  const windowSize = useWindowSize(900);
  const about = useZ(z => z.about);

  window.addEventListener("mousemove", (e: MouseEvent) => {
    setMouse({
      x: (e.clientX - windowSize.innerWidth / 2) / 2,
      y: (e.clientY - windowSize.innerHeight / 2) / 2
    });
  });

  return (
    <Canvas
      style={{ transition: "ease-in-out 0.4s", opacity: about ? 0 : 1 }}
      invalidateFrameloop
      camera={{ fov: 35, near: 0.1, far: 100, position: [0, 0, 4.5] }}
      pixelRatio={window.devicePixelRatio}
    >
      <Suspense fallback={null}>
        <SidiousSkull />
      </Suspense>
    </Canvas>
  );
}
