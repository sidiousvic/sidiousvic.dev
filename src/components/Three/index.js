import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";

function Cube(props) {
  const ref = useRef();
  useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01));
  return (
    <mesh
      {...props}
      ref={ref}
      onClick={e => console.log("click")}
      onPointerOver={e => console.log("hover")}
      onPointerOut={e => console.log("unhover")}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color="hotpink" />
    </mesh>
  );
}

export default function() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Cube />
    </Canvas>
  );
}
