import { auth } from "@clerk/nextjs/server";

export async function GET() {
  const { getToken } = await auth();
  const token = await getToken();

  const res = await fetch("http://localhost:8787/user/bookmarks", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  console.log(await res.json());
  return Response.json({
    success: true,
  });
}
