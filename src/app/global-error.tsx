"use client";
// global-error.tsx run for any uncaught error in the application
// run in the prduction build only (not in development mode)

export default function GlobalError() {
  return (
    <html>
      <body className="flex items-center justify-center min-h-screen">
        <div className="p-4 bg-red-100 text-red-800 rounded ">
          <h1 className="font-bold ">Something went wrong</h1>
          <p className="text-red-600">Please try again later.</p>
        </div>
      </body>
    </html>
  );
}
