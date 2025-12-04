import { db } from "@/lib/db";

export async function GET(request: Request) {
    const result = await db.query('SELECT * FROM characters');
    return Response.json({ data: result.rows, error: false });
}