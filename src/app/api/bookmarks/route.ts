import { urls } from "@/db/schema";
import { db } from "@/lib/db";

export async function GET() {
  const bookmarks = await db.select().from(urls);

  return Response.json({
    bookmarks: bookmarks,
  });
}
