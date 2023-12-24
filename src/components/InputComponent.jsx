import React from 'react';

export default function InputComponent({ value, onChange, placeholder }) {
    return (
        <React.Fragment>
            <input
                className='p-2 border rounded'
                type='text'
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </React.Fragment>
    );
}