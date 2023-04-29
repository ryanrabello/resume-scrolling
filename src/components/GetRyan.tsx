import { useFrame } from "@react-three/fiber";
import { th } from "@xstyled/styled-components";
import { FC, useRef } from "react";
import { BufferGeometry, Material, Mesh } from "three";

export const GetRyan: FC = () => {
  const meshRef = useRef<Mesh<BufferGeometry, Material>>(null);

  // manage rotation
  useFrame((state) => {
    const mesh = meshRef.current;
    if (mesh) {
      const time = state.clock.getElapsedTime();
      const oscillatingTime = Math.sin(time / 2);
      const speed = 0.003;
      mesh.rotation.y = 0.4 * oscillatingTime;
      mesh.rotation.z += 0.5 * speed;
    }
  });
  return (
    <>
      <mesh ref={meshRef} scale={0.1} position={[0, -31, 0]}>
        <torusKnotGeometry args={[14, 0.25, 100, 9, 9, 7]} />
        <meshBasicMaterial color={`${th.color("primary")}`} />
      </mesh>
    </>
  );
};
