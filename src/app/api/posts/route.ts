import { NextRequest } from "next/server";

// this page will be cached forever until you redeploy | rebuild
// export const dynamic = "force-static";
// ISR - Incremental Static Regeneration : revalidate after specific time
export const revalidate = 5; // in seconds | after 5 seconds the cache will be invalidated


export async function GET() {
  console.log("## Serving from cache...", new Date().toISOString());
  return Response.json({
    message: "Cached Response fsdf",
    timestamp: new Date().toISOString(),
  });
}

// export async function GET(req: NextRequest) {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();
//   return Response.json({ data });
// }
