import { db } from "@/lib/db";

export async function GET(request: Request, ctx: RouteContext<'/api/v1/weapons/[id]'>) {
    const { id } = await ctx.params;

    try {
        const result = await db.query(`SELECT * FROM weapons WHERE id = $1`, [id]);
        return Response.json({ error: false, message: 'Found.', data: result.rows[0] }, { status: 200 });
    } catch (err) {
        console.error(err);
        return Response.json({ error: true, message: 'Something went wrong.' }, { status: 500 });
    }
}