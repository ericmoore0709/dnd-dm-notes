import { db } from "@/lib/db";

export async function GET(request: Request, ctx: RouteContext<'/api/v1/stat-blocks/characters/[id]'>) {
    try {
        const { id } = await ctx.params;
        const result = await db.query('SELECT * FROM characters WHERE id = $1', [id]);
        const character = result.rows[0];
        return Response.json({ data: character, message: 'Found.' }, { status: 200 });
    }
    catch (err) {
        console.log(err);
        return Response.json({ error: true, message: 'Server error.' }, { status: 500 });
    }
}