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
    readOnly,
}: {
    label?: string;
    name: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    type?: string;
    className?: string;
    placeholder?: string;
    readOnly?: boolean;
}) {
    return (
        <div className={className}>
            {label && (
                <label htmlFor={name} className="mb-2 block text-sm font-medium text-gray-700">
                    {label}
                </label>
            )}
            <input
                id={name}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                placeholder={placeholder}
                readOnly={readOnly}
                className="w-full rounded-lg border border-gray-300 p-2 focus:ring focus:ring-blue-400 focus:outline-none"
            />
        </div>
    );
}
