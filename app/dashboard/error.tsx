"use client";

import { useEffect } from "react";

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Error in Dashboard:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-red-50 font-sans dark:bg-red-900">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-3xl font-semibold text-red-600">
          Error: {error.message}
        </h1>
        <button
          onClick={reset}
          className="mt-4 rounded bg-red-500 px-4 py-2 text-white"
        >
          Try Again
        </button>
      </main>
    </div>
  );
}
