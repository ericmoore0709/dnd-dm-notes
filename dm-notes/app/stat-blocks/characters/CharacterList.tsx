'use client';

import { useState } from "react";
import { Character } from "./Character";
import Link from "next/link";
import CharacterForm from "./CharacterForm";

export default function CharacterList({characters} : {characters: Array<Character>}) {
    const [formOpen, setFormOpen] = useState<boolean>(false);

    function saveNewCharacter(data: Character) {
        // TODO: Persist character data to API
        console.log(data);
        setFormOpen(false);
    }

    return (
        <div>
            {formOpen && <CharacterForm formAction={saveNewCharacter} existingData={null} />}
            <button className="border rounded p-1 cursor-pointer" onClick={() => setFormOpen(!formOpen)}>{formOpen ? 'Cancel' : 'Create New Character'}</button>
            {(!characters || characters?.length === 0) && <div>No characters found.</div>}
            {(characters?.length > 0) && (
                <ul className="my-4">
                    {characters?.map(c => (
                        <li className="my-1 underline" key={c.id}><Link href={'characters/' + c.id}>{c.name}</Link></li>
                    ))}
                </ul>
            )}
        </div>
    );
}