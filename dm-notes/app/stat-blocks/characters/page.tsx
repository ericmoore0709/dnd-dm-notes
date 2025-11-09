import CharacterList from "./CharacterList";

export default function page() {
    return (
        <div className="text-center m-5">
            <h1 className="text-2xl my-2">Characters List</h1>
            <CharacterList />
        </div>
    );
}