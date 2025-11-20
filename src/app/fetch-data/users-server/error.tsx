"use client";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main
      style={{
        minHeight: "60vh",
        display: "grid",
        placeItems: "center",
        padding: "2rem",
      }}
    >
      <div
        style={{
          maxWidth: 560,
          width: "100%",
          border: "1px solid #e5e7eb",
          borderRadius: 8,
          padding: "1.5rem",
          textAlign: "center",
          boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
        }}
      >
        <h1 style={{ fontSize: "1.5rem", margin: 0 }}>Something went wrong</h1>
        <p style={{ color: "#6b7280", marginTop: "0.5rem" }}>
          An unexpected error occurred while loading this page.
        </p>
        {error?.message ? (
          <pre
            style={{
              marginTop: "1rem",
              padding: "0.75rem",
              background: "#f9fafb",
              color: "#111827",
              borderRadius: 6,
              overflowX: "auto",
              textAlign: "left",
              whiteSpace: "pre-wrap",
            }}
          >
            {error.message}
          </pre>
        ) : null}
        <button
          onClick={() => reset()}
          style={{
            marginTop: "1rem",
            padding: "0.5rem 0.9rem",
            borderRadius: 6,
            border: "1px solid #111827",
            background: "#111827",
            color: "white",
            cursor: "pointer",
          }}
        >
          Try again
        </button>
      </div>
    </main>
  );
}
