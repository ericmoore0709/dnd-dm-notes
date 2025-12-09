import { db } from "@/lib/db";

export async function GET() {
    const result = await db.query('SELECT * FROM characters');
    return Response.json({ data: result.rows, error: false });
}

export async function POST(request: Request) {
    let data;

    try {
        data = await request.json() || null;
    } catch (e400) {
        console.log(e400);
        return Response.json({message: "Request body required.", error: true}, {status: 400});
    }
    const {name} = data;
    if (!name) return Response.json({message: "'name' is required.", error: true}, {status: 400});

    const result = await db.query('INSERT INTO characters (name) VALUES ($1) RETURNING id, name', [name]);
    return Response.json({data: result.rows[0], error: false});
}