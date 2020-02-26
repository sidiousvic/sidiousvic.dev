import React, { Suspense, MouseEvent } from "react";
import { Canvas } from "react-three-fiber";
import SidiousSkull from "./SidiousSkull";
import useZ from "../zustand/z";
import { useWindowSize } from "../hooks";
import { window } from "browser-monads";

const Scene: React.FC = () => {
  const setEyeVelocity = useZ(z => z.setEyeVelocity);
  const setMouse = useZ(z => z.setMouse);
  const title = useZ(z => z.title);
  const setTitle = useZ(z => z.setTitle);
  const windowSize = useWindowSize(900);

  const toggleTitle = (): void => {
    if (title === "VIC SIDIOUS") setTitle("JUST DO SH*T.");
    if (title === "JUST DO SH*T.") setTitle("VIC SIDIOUS");
  };

  window.addEventListener("mousemove", (e: MouseEvent) => {
    setMouse({
      x: (e.clientX - windowSize.innerWidth / 2) / 2,
      y: (e.clientY - windowSize.innerHeight / 2) / 2
    });
  });

  return (
    <Canvas
      onClick={(): void => {
        toggleTitle();
        setEyeVelocity(0.03);
      }}
      camera={{ fov: 35, near: 0.1, far: 100, position: [0, 0, 7] }}
      pixelRatio={window.devicePixelRatio}
    >
      <Suspense fallback={null}>
        <SidiousSkull />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
