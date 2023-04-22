/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 scene.gltf --transform
Author: Alexander (https://sketchfab.com/pravdin)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/user-3d-icon-fb62ede37af14b43887b4ea079f491b7
Title: User (3D Icon)
*/

import React, { forwardRef, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { Group } from "three";

export const UserIcon3D = forwardRef<Group, GroupProps>(function UserIcon3D(
  props,
  ref
) {
  const { nodes } = useGLTF("/user_3d_icon/scene-transformed.glb");
  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} rotation={[-Math.PI / 2, 0, 0]}>
        <meshToonMaterial />
      </mesh>
    </group>
  );
});

useGLTF.preload("/user_3d_icon/scene-transformed.glb");