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
            <button onClick={() => setFormOpen(true)}>Create New Character</button>
            {formOpen && <CharacterForm formAction={saveNewCharacter} existingData={null} />}
            {(characters.length === 0) && <span>No characters found.</span>}
            {(characters.length > 0) && (<ul>
                {characters.map(c => (
                    <li key={c.id}><Link href={'characters/' + c.id}>{c.id}</Link></li>
                ))}
            </ul>)}
        </div>
    );
}