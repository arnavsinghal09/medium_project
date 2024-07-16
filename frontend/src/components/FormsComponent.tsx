import  { ChangeEvent } from "react"

interface Props {
    label: string;
    placeholder?: string;
    type: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function FormsComponent({ label, placeholder, type, onChange }: Props) {
    return (
        <>
            <label className="block mb-2 text-md font-medium text-gray-900">
                {label}
            </label>
            <input
                type={type}
                className="bg-gray-50 mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full block p-2.5"
                placeholder={placeholder}
                onChange={onChange}
                required
            />
        </>
    );
}