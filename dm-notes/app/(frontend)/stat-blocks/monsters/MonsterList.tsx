'use client'

import Link from "next/link";
import { Monster } from "./Monster";

export default function MonsterList({ monsters }: { monsters: Array<Monster> }) {
    return (
        <div>
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