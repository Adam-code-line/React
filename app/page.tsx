import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Welcome to My App</h1>
        <p>This is the home page.</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          <Link href="/dashboard">Go to Dashboard</Link>
        </button>
      </main>
    </div>
  );
}
