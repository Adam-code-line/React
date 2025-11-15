// app/page.tsx

// 只需要導入新的包裝組件
import SceneClientWrapper from "../components/SceneClientWrapper";

// 您的主頁面組件 (仍然是伺服器組件)
export default function HomePage() {
  return (
    <main>
      {/* 渲染邊界組件 */}
      <SceneClientWrapper />
    </main>
  );
}
