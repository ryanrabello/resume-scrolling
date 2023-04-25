import { useScroll } from "@react-three/drei";
import { MeshProps, ThreeElements, useFrame } from "@react-three/fiber";
import { th } from "@xstyled/styled-components";
import { FC, useRef } from "react";
import { BufferGeometry, Material, Mesh } from "three";

const RANGE = [-15, -17.5];
const OFFSET = 0.2;

export function ResumeTimeline() {
  return (
    <>
      <Node position={[-OFFSET, -15, 0]} />
      <Node position={[OFFSET, (RANGE[0] + RANGE[1]) / 2, 0]} />
      <Node position={[-OFFSET, -17.5, 0]} />
    </>
  );
}

const Node: FC<{ position: MeshProps["position"] }> = ({ position }) => {
  const meshRef = useRef<Mesh<BufferGeometry, Material>>(null);

  const scroll = useScroll();
  useFrame((state) => {
    const mesh = meshRef.current;
    if (mesh) {
      const time = state.clock.getElapsedTime();
      mesh.rotation.x = time / 20;
      mesh.rotation.y = time / 10 + scroll.range(2 / 8, 5 / 8);
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={0.2}>
      <icosahedronGeometry args={[1, 0]} />
      <meshBasicMaterial color={th.color("primary")} wireframe />
    </mesh>
  );
};
