import React from 'react';
import { useState } from 'react';

export default function SearchBar({ filterFood }) {
    const [input, setInput] = useState('');

    const handleBar = (e) => {
        setInput(e.target.value);
        filterFood(e.target.value);
    };

    return (
        <div>
            <h2>Search Bar</h2>
            <input type="search" name="name" value={input} onChange={handleBar}/>
        </div>
    );
}