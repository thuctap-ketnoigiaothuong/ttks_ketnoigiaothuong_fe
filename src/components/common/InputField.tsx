import { ChangeEvent } from 'react';

export default function InputField({
    label,
    name,
    value,
    onChange,
    required,
    type = 'text',
    className = '',
    placeholder = '',
}: {
    label?: string;
    name: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    type?: string;
    className?: string;
    placeholder?: string;
}) {
    return (
        <div className={className}>
            {label && <label className="mb-2 block text-sm font-medium text-gray-700">{label}</label>}
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                placeholder={placeholder}
                className="w-full rounded-lg border border-gray-300 p-2 focus:ring focus:ring-blue-400 focus:outline-none"
            />
        </div>
    );
}
