import { auth } from "@clerk/nextjs/server";

export async function GET() {
  const { getToken } = await auth();
  const token = await getToken();

  const res = await fetch("https://bun.aotearoa.cc/user/bookmarks", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  return Response.json({
    res: data.res,
  });
}

export async function POST(req: Request) {
  const { getToken } = await auth();
  const token = await getToken();

  const body = await req.json();

  const res = await fetch("https://bun.aotearoa.cc/user/url", {
    method: "POST",
    body: JSON.stringify({
      url: body.url,
    }),
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  console.log(await res.json());

  return Response.json({
    res: true,
  });
}
