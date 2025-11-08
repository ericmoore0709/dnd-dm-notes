'use client';

import { useState } from "react";
import { Character } from "./Character";
import Link from "next/link";

export default function CharacterList() {
    const [characters, setCharacters] = useState<Array<Character>>([{ id: 'Sildar' }, { id: 'Gundren' }]);

    return (
        <div>
            {(characters.length === 0) && <span>No characters found.</span>}
            {(characters.length > 0) && (<ul>
                {characters.map(c => (
                    <li key={c.id}><Link href={'characters/' + c.id}>{c.id}</Link></li>
                ))}
            </ul>)}
        </div>
    );
}