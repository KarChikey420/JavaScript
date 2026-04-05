import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    const body = await req.json();

    console.log("Received user data:", body);

    return Response.json({
        message:"User data received successfully"
    })

}