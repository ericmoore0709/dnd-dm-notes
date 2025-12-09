import { Monster } from "../Monster";

export default function MonsterDetails({ monster }: { monster: Monster }) {
    return (
        <div>
            Monster details: {monster.name}
        </div>
    )
}
