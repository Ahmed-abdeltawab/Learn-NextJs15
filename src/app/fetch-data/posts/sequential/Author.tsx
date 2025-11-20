// posts/sequential/Author.tsx
// import React, { Suspense } from "react";

type AuthorProps = {
  userId: number;
};

async function fetchUser(userId: number) {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // 1 second delay for demo
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  return res.json();
}

export default async function Author({ userId }: AuthorProps) {
  const user = await fetchUser(userId);
  console.log("[AUTHOR] Fetched user:", userId, user);
  return <p>Author: {user.name}</p>;
}

// Usage in PostsSequential component with Suspense
{
  /* <Suspense fallback={<div style={{ color: "gray" }}>Loading author...</div>}>
  <Author userId={post.userId} />
</Suspense>; */
}
