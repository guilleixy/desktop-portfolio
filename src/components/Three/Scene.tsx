"use client";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Eva01 from "./Eva01";

export default function Scene() {
  return (
    <>
      <Canvas className="bg-black">
        <Suspense fallback={null}>
          <PerspectiveCamera
            position={[-0.5, 3.3, 0.5]}
            rotation={[0.5, 0, 0]}
            makeDefault
          />
          <Environment preset="city" />

          <Eva01 />
        </Suspense>
      </Canvas>
    </>
  );
}
