import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  //   const userId = req.nextUrl.searchParams.get("userId");
  // redirect("/api-demo");
  const headersList = await headers();

  const authHeader = headersList.get("Authorization") || "unknown";
  console.log("Auth Header:", authHeader);
  const cookiesList = await cookies();
  // i want to set a cookie here
  cookiesList.set("myCookie", "cookieValue123");
  const myCookie = cookiesList.get("myCookie")?.value || "no-cookie";

  console.log("My Cookie:", myCookie);
  return NextResponse.json({
    message: `This is the feed route for Shop Layout with userId:`,
    myCookie,
  });
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  return NextResponse.json({
    data,
    message: "POST request received in feed route for Shop Layout",
  });
}
