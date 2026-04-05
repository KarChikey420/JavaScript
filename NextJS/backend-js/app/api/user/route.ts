import { NextRequest } from "next/server";

export function GET() {
  return Response.json({
    email: "user@example.com",
    name: "Kartikey",
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const message = `Signup request received for ${body.username}`;

  console.log("Received signup data:", body);
  console.log(message);

  return Response.json({
    message,
  });
}
