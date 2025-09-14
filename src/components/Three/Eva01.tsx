import React, { useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { MeshStandardMaterial, Mesh, Object3D } from "three";
import { useThree } from "@react-three/fiber";

export default function Eva01() {
  const { nodes } = useGLTF("assets/models/eva01-draco-v1.glb");
  //TODO: Esto no puede estar bien
  const metallicMaterial = useMemo(
    () =>
      new MeshStandardMaterial({
        color: 0x000000,
        metalness: 1,
        roughness: 0,
      }),
    []
  );
  return (
    <group rotation={[0, Math.PI / 2, 0]} scale={0.5}>
      {Object.values(nodes)
        .filter((node: any) => node.type === "Mesh")
        .map((mesh: any) => (
          <mesh
            key={mesh.uuid}
            geometry={mesh.geometry}
            material={metallicMaterial}
            castShadow
            {...(mesh.position && { position: mesh.position })}
            {...(mesh.rotation && { rotation: mesh.rotation })}
            {...(mesh.scale && { scale: mesh.scale })}
          ></mesh>
        ))}
    </group>
  );
}
