'use client';
import { ChangeEvent, FormEvent, useState } from "react";
import { Character } from "./Character";

export default function CharacterForm({ formAction, existingData }: { formAction: Function, existingData: Character | null }) {
    const INITIAL_FORM_DATA = { id: '' };
    const [formData, setFormData] = useState(existingData || INITIAL_FORM_DATA);

    function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    function handleFormSubmit(e: FormEvent) {
        e.preventDefault();
        console.debug(formData);
        formAction(formData);
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <label htmlFor="id">ID</label>
                <input id="id" name="id" value={formData.id} onChange={handleInputChange} />
            </div>
            <button type="submit">Go!</button>
        </form>
    );
}