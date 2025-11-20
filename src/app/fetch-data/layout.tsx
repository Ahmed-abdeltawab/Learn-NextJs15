import React from "react";

export default async function FetchDataLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-xl font-bold mb-6">Menu</h2>
        <nav>
          <ul className="space-y-4">
            <li>
              <a href="/fetch-data" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/fetch-data/users" className="hover:text-gray-300">
                Users
              </a>
            </li>
            <li>
              <a href="/fetch-data/posts" className="hover:text-gray-300">
                Posts
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-gray-50">{children}</main>
    </div>
  );
}
