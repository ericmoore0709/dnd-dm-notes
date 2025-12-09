import MonsterDetails from "./MonsterDetails";

export default async function page({ params }: { params: Promise<{ id: string }> }) {
    const {id} = await params;
    const response = await fetch(`${process.env.SITE_URL}/api/v1/stat-blocks/monsters/${id}`);
    const json = await response.json();
    const monster = json.data;

    return (
        <div className="text-center mt-4">
            <MonsterDetails monster={monster} />
        </div>
    )
}
