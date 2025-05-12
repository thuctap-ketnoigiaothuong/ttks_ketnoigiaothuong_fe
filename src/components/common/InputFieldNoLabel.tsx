import { ChangeEvent } from 'react';

export default function InputFieldNoLabel({
    name,
    value,
    onChange,
    required,
    type = 'text',
    className = '',
    placeholder = '',
    readOnly,
}: {
    name: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    type?: string;
    className?: string;
    placeholder?: string
    readOnly?: boolean
}) {
    return (
        <div className={className}>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                readOnly={readOnly}
                placeholder={placeholder}
                className="w-full rounded-lg border border-gray-300 p-2 focus:ring focus:ring-blue-400 focus:outline-none"
            />
        </div>
    );
}
