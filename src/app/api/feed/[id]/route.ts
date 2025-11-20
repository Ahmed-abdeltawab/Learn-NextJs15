import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const headersList = await headers();
  const authHeader = headersList.get("Authorization") || "unknown";
  console.log("Auth Header:", authHeader);
  return NextResponse.json({
    message: "get photo with id:",
    id,
    authHeader,
  });
}
