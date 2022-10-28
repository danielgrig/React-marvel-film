import React from 'react';

export const Search = (props) => {
    return (
        <input 
            value={props.search} 
            placeholder=" 🔍︎ Название фильма" 
            className="search" 
            onChange={e => { props.setSearch(e.target.value) }} 
        />
    )
}