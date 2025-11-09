'use client';

import { useState } from "react";
import { Character } from "./Character";
import Link from "next/link";
import CharacterForm from "./CharacterForm";

export default function CharacterList() {
    const [characters, setCharacters] = useState<Array<Character>>([{ id: 'Sildar' }, { id: 'Gundren' }]);
    const [formOpen, setFormOpen] = useState<boolean>(false);

    function saveNewCharacter(data: Character) {
        setCharacters(prev => [...prev, data]);
        setFormOpen(false);
    }

    return (
        <div>
            {formOpen && <CharacterForm formAction={saveNewCharacter} existingData={null} />}
            <button className="border rounded p-1 cursor-pointer" onClick={() => setFormOpen(!formOpen)}>{formOpen ? 'Cancel' : 'Create New Character'}</button>
            {(characters.length === 0) && <span>No characters found.</span>}
            {(characters.length > 0) && (
                <ul className="my-4">
                    {characters.map(c => (
                        <li className="my-1 underline" key={c.id}><Link href={'characters/' + c.id}>{c.id}</Link></li>
                    ))}
                </ul>
            )}
        </div>
    );
}