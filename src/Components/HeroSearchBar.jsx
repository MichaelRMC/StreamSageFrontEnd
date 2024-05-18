import React from 'react'

function HeroSearchBar() {
  return (
    <div>
      <form>
        <input type="search" id='search' name='search' placeholder='Search' />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default HeroSearchBar