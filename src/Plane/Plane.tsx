import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { BufferGeometry, Mesh, ShaderMaterial, FrontSide } from "three";
import fragmentShader from "./fragmentShader.glsl?raw";
import vertexShader from "./vertexShader.glsl?raw";

export const Plane = () => {
  const mesh = useRef<Mesh<BufferGeometry, ShaderMaterial> | null>(null);
  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0,
      },
      u_scroll: {
        value: 0,
      },
    }),
    []
  );

  const scroll = useScroll();
  useFrame((state) => {
    const { clock } = state;
    if (mesh.current) {
      mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
      mesh.current.material.uniforms.u_scroll.value = scroll.range(0, 1 / 8);
      mesh.current.rotation.x = (scroll.range(0, 2 / 8) * 2 * Math.PI) / 5;
    }
  });

  return (
    <>
      <mesh
        ref={mesh}
        scale={4}
        position={[1, 0, 0]}
      >
        <planeGeometry args={[1, 1, 64, 64]} />
        <shaderMaterial
          side={FrontSide}
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
          uniforms={uniforms}
        />
      </mesh>
    </>
  );
};
