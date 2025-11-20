"use client";

import { useRouter } from "next/navigation";

export default function BlogPage() {
  const router = useRouter();
  const handleNavigation = () => {
    router.replace("/products");
  };
  return (
    <div>
      <h1>Blog Page</h1>
      <p>Welcome to the blog section of our shop!</p>
      <button onClick={handleNavigation} className="text-gray-600 underline">
        Go to Products
      </button>
    </div>
  );
}
