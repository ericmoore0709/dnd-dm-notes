import { db } from "@/lib/db";

export async function GET() {
    try {
        const result = await db.query('SELECT * FROM weapons');
        return Response.json({ error: false, message: 'Found.', data: result.rows }, { status: 200 });
    } catch (err) {
        console.error(err);
        return Response.json({ error: true, message: 'Something went wrong.' }, { status: 500 });
    }
}