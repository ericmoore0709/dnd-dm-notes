import { db } from "@/lib/db";

export async function GET() {
    try {
        const result = await db.query('SELECT * FROM monsters');
        return Response.json({ error: false, data: result.rows, message: "Found." }, { status: 200 });
    } catch (err) {
        console.error(err);
        return Response.json({ error: true, message: 'Something went wrong.' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    let data;
    try {
        data = await request.json();
    } catch (e400) {
        console.log(e400);
        return Response.json({ error: true, message: 'request body is required' }, { status: 400 });
    }
    try {
        const { name } = data;
        if (!name) return Response.json({error: true, message: '\'name\' is required.'}, {status: 400});

        const result = await db.query('INSERT INTO monsters (name) VALUES ($1) RETURNING id, name', [name]);
        return Response.json({error: false, message: 'Monster added.', data: result.rows[0]}, {status: 201}); 

    } catch (err) {
        console.error(err);
        return Response.json({ error: true, message: 'Something went wrong.' }, { status: 500 });
    }
}