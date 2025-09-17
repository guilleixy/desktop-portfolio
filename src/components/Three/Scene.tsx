"use client";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Eva01 from "./Eva01";
import { useRef } from "react";
import SaberLight from "./RedMouseLight";

export default function Scene() {
  const redLightRef = useRef<any>(null);
  return (
    <>
      <Canvas className="bg-transparent">
        <Suspense fallback={null}>
          <PerspectiveCamera
            position={[-0.5, 3.3, 0.5]}
            rotation={[0.5, 0, 0]}
            makeDefault
          />
          <Environment preset="city" />
          <SaberLight lightRef={redLightRef} />
          <Eva01 />
        </Suspense>
      </Canvas>
    </>
  );
}
