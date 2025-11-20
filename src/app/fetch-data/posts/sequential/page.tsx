import { Suspense } from "react";
import Author from "./Author";

// posts/sequential/page.tsx
export default async function PostsSequential() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  let posts = await res.json();
  posts = posts.filter((post: any) => post.id % 10 === 0);

  return (
    <div className="p-8 bg-gradient-to-br from-indigo-50 to-purple-50 min-h-screen">
      <div className="text-center mb-12 space-y-4 animate-fade-in-down">
        <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 hover:scale-105 transition-transform duration-300 cursor-pointer drop-shadow-sm">
          Sequential Data Fetching
        </h1>
        <p className="text-gray-600 text-lg font-medium animate-pulse">
          ✨ Hover over the cards to see magic happen! ✨
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post: any) => (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 flex flex-col hover:-translate-y-2 hover:scale-[1.02] group cursor-pointer"
          >
            <div className="p-6 flex-grow relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors duration-300">
                {post.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3 group-hover:text-gray-900 transition-colors duration-300">
                {post.body}
              </p>
            </div>
            <Suspense
              fallback={
                <div className="p-4 text-gray-400 italic">
                  Loading author...
                </div>
              }
            >
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 group-hover:bg-purple-50 transition-colors duration-300">
                <Author userId={post.userId} />
              </div>
            </Suspense>
          </div>
        ))}
      </div>
    </div>
  );
}
