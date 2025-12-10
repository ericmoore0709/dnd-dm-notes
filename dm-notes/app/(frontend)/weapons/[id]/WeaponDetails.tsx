import { Weapon } from '../Weapon';

export default function WeaponDetails({ weapon }: { weapon: Weapon }) {
    return (
        <div>
            Weapon details: {weapon.name} - {weapon.damage_dice}
        </div>
    )
}
