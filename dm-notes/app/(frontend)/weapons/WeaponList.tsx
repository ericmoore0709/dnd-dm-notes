import Link from "next/link";
import { Weapon } from "./Weapon";

export default function WeaponList({ weapons }: { weapons: Array<Weapon> }) {
    return (
        <div>
            {(!weapons || weapons?.length === 0) && <div>No weapons found.</div>}
            {(weapons?.length > 0) && (
                <ul className="my-4">
                    {weapons?.map(m => (
                        <li className="my-1 underline" key={m.id}><Link href={'weapons/' + m.id}>{m.name}</Link></li>
                    ))}
                </ul>
            )}
        </div>
    )
}
