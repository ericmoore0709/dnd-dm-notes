'use client'

import Link from "next/link";
import { Monster } from "./Monster";
import { useState } from "react";
import MonsterForm from "./MonsterForm";

export default function MonsterList({ monsters }: { monsters: Array<Monster> }) {
    const [formOpen, setFormOpen] = useState<boolean>(false);

    async function postMonster(data: Monster) {
        const response = await fetch('/api/v1/stat-blocks/monsters', { method: 'POST', body: JSON.stringify(data) });
        if (response.ok) {
            const newMonster = (await response.json()).data;
            monsters.push(newMonster);
        }
        else {
            console.log((await response.json()));
        }
    }

    async function saveNewMonster(data: Monster) {
        console.log(data);
        await postMonster(data);
        setFormOpen(false);
    }

    return (
        <div>
            {formOpen && <MonsterForm formAction={saveNewMonster} existingData={null} />}
            <button className="border rounded p-1 cursor-pointer" onClick={() => setFormOpen(!formOpen)}>{formOpen ? 'Cancel' : 'Create New Monster'}</button>
            {(!monsters || monsters?.length === 0) && <div>No monsters found.</div>}
            {(monsters?.length > 0) && (
                <ul className="my-4">
                    {monsters?.map(m => (
                        <li className="my-1 underline" key={m.id}><Link href={'monsters/' + m.id}>{m.name}</Link></li>
                    ))}
                </ul>
            )}
        </div>
    )
}