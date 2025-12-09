'use client';
import { ChangeEvent, FormEvent, useState } from "react";
import { Monster } from "./Monster";

export default function MonsterForm({ formAction, existingData }: { formAction: (data: {name: string}) => void, existingData: Monster | null }) {
    const INITIAL_FORM_DATA = { name: '' };
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
                <label className="mr-2" htmlFor="name">Name</label>
                <input className="border rounded cursor-text" id="name" name="name" value={formData.name} onChange={handleInputChange} />
            </div>
            <button className="mt-2 border rounded p-1 cursor-pointer" type="submit">Go!</button>
        </form>
    );
}