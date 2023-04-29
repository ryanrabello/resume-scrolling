import { FC, useMemo, useRef, useState } from "react";
import { th } from "@xstyled/styled-components";
import { OrbitControls, Text, useScroll } from "@react-three/drei";
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
  "Three.js",
];

const OFFSET = [-2, -2.5, 0];
const OFFSET_STEP = [2, 2, 0];
const ROWS = 3;

const positions: [number, number, number][] = [];

for (let i = 0; i < skills.length; i++) {
  const x = OFFSET[0] + (i % ROWS) * OFFSET_STEP[0];
  const y = OFFSET[1] + Math.floor(i / ROWS) * OFFSET_STEP[1] + x * 0.3;
  positions.push([x, y, 0]);
}

export const Skills: FC = () => {
  return (
    <>
      <group position={[0, -23, 0]}>
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

  const direction = useMemo(() => {
    const x = Math.random() * 2 - 1;
    const y = Math.random() * 2 - 1;
    const z = Math.random() * 2 - 1;
    return [x, y, z];
  }, []);

  useFrame((state) => {
    const mesh = meshRef.current;
    if (mesh) {
      const time = state.clock.getElapsedTime();
      const speed = hovered ? .005 : .003;
      mesh.rotation.x += direction[0] * speed;
      mesh.rotation.y += direction[1] * speed;
      mesh.rotation.z += direction[2] * speed;
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
        <icosahedronGeometry args={[1, 0]} />
        <meshToonMaterial
          color={`${th.color("primary")}`}
          wireframe={hovered}
        />
      </mesh>
      <Text
        position={position}
        fontSize={0.15}
        color={"" + th.color("primary")}
      >
        {text}
      </Text>
    </>
  );
};
