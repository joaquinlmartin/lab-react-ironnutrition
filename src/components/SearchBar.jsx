import React from 'react';
import { useState } from 'react';

export default function SearchBar({ onFilter }) {
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
        onFilter(e.target.value);
    };

    return (
        <div>
            <h2>Search Bar</h2>
            <input type="search" name="name" value={input} onChange={handleChange}/>
        </div>
    );
}