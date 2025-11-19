import React, {useState} from "react";
import "./HeroSearchBar.css";

function HeroSearchBar () {
  const [ query, setQuery ] = useState( "" );

  function handleTextChange ( e ) {
    setQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }
  
  return (
    <div className="hero-search-bar-container">
      <form>
        <input type="search" id="search" name="search" placeholder="Search" onChange={handleTextChange} value={query}/>
        <br />
        <button className="submit" type="submit"
        onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default HeroSearchBar;
