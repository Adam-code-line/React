"use client"; // 👈 必须添加此指令

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// 一个可复用的 3D 立方体组件
function Box(props) {
  // useRef 用于在渲染循环中访问网格（mesh）
  const meshRef = useRef();

  // useFrame 钩子将在每帧渲染时执行
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <mesh {...props} ref={meshRef}>
      {/* 几何体：一个 BoxBufferGeometry */}
      <boxGeometry args={[1, 1, 1]} />
      {/* 材质：一个 MeshStandardMaterial */}
      <meshStandardMaterial color={"red"} />
    </mesh>
  );
}

// 主场景组件，包含 Canvas
export default function MyThreeScene() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        {/* 环境光 */}
        <ambientLight intensity={0.5} />
        {/* 聚光灯 */}
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        {/* 立方体实例 */}
        <Box position={[0, 0, 0]} />
        {/* 轨道控制器，允许您使用鼠标拖动和缩放场景 */}
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}
