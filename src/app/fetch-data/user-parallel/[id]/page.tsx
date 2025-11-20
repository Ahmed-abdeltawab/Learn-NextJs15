import { Suspense } from "react";

export const getUserPosts = async (userId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  return res.json();
};
export const getUserAlbums = async (userId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
  );
  return res.json();
};

const userParallelPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const { id } = await params;
  const postsData = getUserPosts(id);
  const albumsData = getUserAlbums(id);
  const [posts, albums] = await Promise.all([postsData, albumsData]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 animate-pulse">
        User Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Posts Column */}
        <Suspense
          fallback={
            <div className="text-center text-gray-400">Loading posts...</div>
          }
        >
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold border-b-2 border-blue-500 pb-2 mb-6 flex items-center">
              <span className="mr-2">📝</span> User Posts
            </h2>
            <div className="space-y-4">
              {/* @ts-ignore */}
              {posts.map((post: any, index: number) => (
                <div
                  key={post.id}
                  className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:-translate-y-1 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-xl font-bold text-blue-300 mb-2 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{post.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Suspense>

        {/* Albums Column */}
        <Suspense
          fallback={
            <div className="text-center text-gray-400">Loading albums...</div>
          }
        >
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold border-b-2 border-purple-500 pb-2 mb-6 flex items-center">
              <span className="mr-2">💿</span> User Albums
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* @ts-ignore */}
              {albums.map((album: any, index: number) => (
                <div
                  key={album.id}
                  className="relative overflow-hidden bg-gradient-to-br from-purple-900/40 to-pink-900/40 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-500 group"
                >
                  <div className="absolute inset-0 bg-purple-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">🎵</span>
                    </div>
                    <h3 className="font-medium text-purple-200 group-hover:text-white transition-colors truncate">
                      {album.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-2 uppercase tracking-wider">
                      Album #{album.id}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Suspense>
      </div>
    </div>
  );
};
export default userParallelPage;
