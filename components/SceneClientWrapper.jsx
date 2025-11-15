// components/SceneClientWrapper.jsx

"use client"; // 標記為客戶端組件

import dynamic from "next/dynamic";

// 執行 dynamic 導入
const DynamicThreeScene = dynamic(() => import("./MyThreeScene"), {
  // 現在我們可以在客戶端組件中使用 ssr: false 了
  ssr: false,
  loading: () => (
    <div style={{ height: "100vh" }}>Loading 3D experience...</div>
  ),
});

export default function SceneClientWrapper() {
  // 這個組件只負責渲染動態導入的 Canvas
  return <DynamicThreeScene />;
}
