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
        <form className="w-75 mx-auto my-2 py-2" onSubmit={handleFormSubmit}>
            <div className="flex justify-center">
                <label className="mr-2" htmlFor="id">ID</label>
                <input className="border rounded cursor-text" id="id" name="id" value={formData.id} onChange={handleInputChange} />
            </div>
            <button className="mt-2 border rounded p-1 cursor-pointer" type="submit">Go!</button>
        </form>
    );
}