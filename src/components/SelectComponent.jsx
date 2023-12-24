import React from 'react';

export default function SelectComponent({ value, onChange, options }) {
    return (
        <React.Fragment>
            <select
                className='p-2 border rounded'
                value={value}
                onChange={onChange}
            >
                <option value="" disabled>Select Type</option>
                <option value=''>All Type</option>
                {options && options.map((type) => (
                    <option key={type} value={type}>
                        {type}
                    </option>
                ))}
            </select>
        </React.Fragment>
    );
}