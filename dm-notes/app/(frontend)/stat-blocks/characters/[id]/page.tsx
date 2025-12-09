import { CharacterDetails } from "./CharacterDetails";

export default async function page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const response = await fetch(`${process.env.SITE_URL}/api/v1/stat-blocks/characters/${id}`);
    const { name } = (await response.json()).data;

    return <div className="text-center mt-4">
        <CharacterDetails character={{id, name}} />
    </div>
}