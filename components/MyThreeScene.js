// components/MyThreeScene.js

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
// 確保導入了所有需要的組件：OrbitControls, Stage, Text, useGLTF
import { OrbitControls, Stage, Text, useGLTF } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

// ----------------------------------------------------
// 導入 gltfjsx 生成的模型組件
import { Model } from "./Scene.jsx";
// ----------------------------------------------------

// 預加載模型：這有助於緩存和減少載入錯誤
useGLTF.preload("/scene.gltf");

export default function MyThreeScene() {
  return (
    // 建議給 Canvas 一個明確的尺寸，例如佔用整個視口高度
    <div style={{ height: "100vh", width: "100vw", backgroundColor: "black" }}>
      <Canvas
        shadows
        // 調整相機位置，稍微拉遠一點，並設置 FOV
        camera={{ position: [0, 0, 10], fov: 40 }}
      >
        {/* 燈光優化：確保場景有足夠的主光源，讓模型可見 */}
        <ambientLight intensity={1.0} />
        <directionalLight
          position={[10, 10, 5]} // 來自右上方的主光
          intensity={1.5}
          castShadow
        />

        {/* Suspense 確保在模型載入時顯示 fallback */}
        <Suspense
          // 設置 Text 組件作為載入提示
          fallback={
            <Text position={[0, 0, 0]} color="white">
              Loading...
            </Text>
          }
        >
          {/* Stage 組件提供了預設環境和柔和的燈光 */}
          <Stage environment="city" intensity={0}>
            {/* 調整模型比例：將 scale 設置得更小，例如 0.05，確保它在視野內 */}
            <Model
              scale={0.05}
              position={[0, 0, 0]}
              rotation={[0, Math.PI / 4, 0]} // 初始稍微旋轉一下，讓側面可見
            />
          </Stage>
        </Suspense>

        {/* 🌟 添加後期處理效果 🌟 */}
        <EffectComposer>
          <Bloom
            luminanceThreshold={0.5} // 閾值，決定哪些亮度會產生輝光
            intensity={1.5} // 輝光強度
            luminanceSmoothing={0.9}
            height={300}
          />
        </EffectComposer>

        {/* 允許使用者控制視野，這是調試和查看模型的關鍵 */}
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      </Canvas>
    </div>
  );
}
