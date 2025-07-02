import React from 'react';
import './HeroSearchBar.css';

function HeroSearchBar() {
  return (
    <div className='hero-search-bar-container'>
      <form>
        <input type="search" id='search' name='search' placeholder='Search' />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default HeroSearchBar