import { db } from "@/lib/db";

export async function GET() {
    try {
        const result = await db.query('SELECT * FROM monsters');
        return Response.json({error: false, data: result.rows, message: "Found."}, {status: 200});
    } catch (err) {
        console.error(err);
        return Response.json({error: true, message: 'Something went wrong.'}, {status: 500});
    }
}