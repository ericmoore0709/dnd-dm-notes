import CharacterList from "./CharacterList";

export default async function page() {
    const response = await fetch(`${process.env.SITE_URL}/api/v1/stat-blocks/characters`);
    const data = (await response.json()).data;

    return (
        <div className="text-center m-5">
            <h1 className="text-2xl my-2">Characters List</h1>
            <CharacterList characters={data} />
        </div>
    );
}