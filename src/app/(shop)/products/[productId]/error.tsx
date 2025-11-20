"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  const handleReload = () => {
    startTransition(() => {
      router.refresh(); // Refresh the page from the server
      reset(); // Reset the error boundary state
    });
  };

  return (
    <div className="p-4 bg-red-100 text-red-800 rounded ">
      <h1>An error occurred</h1>
      <p>{error.message}</p>
      <button
        onClick={handleReload}
        className="mt-4 p-2 bg-blue-500 text-white rounded"
      >
        Try Again
      </button>
    </div>
  );
}
