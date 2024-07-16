import React from 'react';
import {Search_Bar} from './assets/scss/SearchBar.scss';

function SearchBar() {
    return (
        <div className={Search_Bar}>
            <input
                type='text'
                placeholder='찾기' />
        </div>
    );
}

export default SearchBar;