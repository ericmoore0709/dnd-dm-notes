import { Character } from "../Character";

export function CharacterDetails({character}: {character: Character}) {
    const {name} = character;
    
    return (
        <div>
            Character Details: {name}
        </div>
    )
}