import MonsterList from "./MonsterList";

export default async function page() {
    const monsters = await (await (await fetch(`${process.env.SITE_URL}/api/v1/stat-blocks/monsters`)).json()).data;
    
    return (
        <div className="text-center m-5">
            <h1 className="text-2xl my-2">Monsters</h1>
            <MonsterList monsters={monsters} />
        </div>
    );
}