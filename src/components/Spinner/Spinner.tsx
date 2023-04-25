import { th } from "@xstyled/styled-components";
import { Box, Float, useScroll } from "@react-three/drei";
import { Group, Object3D, OctahedronGeometry } from "three";
import { FC, useRef } from "react";
import { MeshProps, ThreeElements, useFrame } from "@react-three/fiber";
import { degToRad } from "three/src/math/MathUtils";
import { UserIcon3D } from "./UserIcon3D";

type Position = MeshProps["position"];

const R = 2;

export const Spinner: FC<{ position: Position }> = ({ position }) => {
  const ref = useRef<Group | null>(null);
  const user = useRef<Group | null>(null);

  const scroll = useScroll();
  useFrame((state) => {
    const { clock } = state;
    if (ref.current && user.current) {
      // TODO: Figure out why starting range isn't correct
      ref.current.rotation.z =
        scroll.range(0, 3 / 8) * 1.5 * Math.PI + clock.getElapsedTime() / 3;
      user.current.rotation.y = scroll.range(0, 3 / 8) * 1.5 * Math.PI;
    }
  });

  const x = Math.cos(degToRad(120)) * R;
  const y = Math.sin(degToRad(120)) * R;
  return (
    <>
      <group ref={ref} position={position}>
        <Node position={[R, 0, 0]} />
        <Node position={[x, y, 0]} />
        <Node position={[x, -y, 0]} />
      </group>

      <UserIcon3D ref={user} position={position} scale={0.7} />
    </>
  );
};

const Node: FC<{ position: Position }> = ({ position }) => (
  <Float
    speed={2}
    rotationIntensity={3}
    floatIntensity={0}
    floatingRange={[0, 0]}
  >
    <mesh scale={0.4} position={position}>
      <octahedronGeometry args={[1, 1]} />
      <meshBasicMaterial color={th.color("primary")} wireframe />
      {/* <OrbitControls /> */}
    </mesh>
  </Float>
);
