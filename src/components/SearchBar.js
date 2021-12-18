import React, { useState } from 'react';
import '../styles/SearchBar.css';

export default function SearchBar({ setSearch, setLastValue }) {
  const [value, setValue] = useState('');

  const searchEvent = (e) => {
    setValue(e.target.value);
    setTimeout(() => {
      setSearch(e.target.value);
      setLastValue(0);
    }, 500);
  };

  return (
    <div className="search-bar">
      <input
        value={value}
        onChange={searchEvent}
        className="search"
        type="text"
        placeholder="Burcar"
      />
    </div>
  );
}
