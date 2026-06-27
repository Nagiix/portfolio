"use client";

import { useGLTF } from "@react-three/drei";

export default function Model() {
  const { scene } = useGLTF("/models/landing.glb");

  return (
    <primitive
      object={scene}
      scale={1}
      position={[0, 0, 0]}
    />
  );
}

useGLTF.preload("/models/landing.glb");