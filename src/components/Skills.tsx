import { FC, useRef, useState } from "react";
import { th } from "@xstyled/styled-components";
import { Text, useScroll } from "@react-three/drei";
import { MeshProps, useFrame } from "@react-three/fiber";
import { BufferGeometry, Material, Mesh } from "three";

const skills = [
  "React",
  "React Native",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "GraphQL",
  "Apollo",
  "Next.js",
];

const OFFSET = [-2, -2.5, 0];
const OFFSET_STEP = [2, 2, 0];
const ROWS = 3;

const positions: [number, number, number][] = [];

for (let i = 0; i < skills.length; i++) {
  const x = OFFSET[0] + (i % ROWS) * OFFSET_STEP[0];
  const y = OFFSET[1] + Math.floor(i / ROWS) * OFFSET_STEP[1];
  positions.push([x, y, 0]);
}

export const Skills: FC = () => {
  return (
    <>
      <group position={[0, -25, 0]}>
        {positions.map((position, i) => (
          <Node key={i} position={position} text={skills[i]} />
        ))}
      </group>
    </>
  );
};

const Node: FC<{ position: MeshProps["position"]; text: string }> = ({
  position,
  text,
}) => {
  const [hovered, setHover] = useState(false);

  // Rotate
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
    <>
      <mesh
        ref={meshRef}
        scale={0.6}
        position={position}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <octahedronGeometry args={[1, 1]} />
        <meshToonMaterial
          color={`${th.color("primary")}`}
          wireframe={hovered}
        />
      </mesh>
      <Text position={position} fontSize={0.2} color={"" + th.color("primary")}>
        {text}
      </Text>
    </>
  );
};
