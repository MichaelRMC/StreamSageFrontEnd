import React, { useState } from "react";
import "./NavBar.css";
function NavBar() {
  const [query, setQuery] = useState("");

  function handleTextChange(e) {
    setQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <header>
        <nav>
          <div className="nav-header">
            <h1 className="nav-logo">StreamSage</h1>
            <div className="nav-searchbar">
              <input
                type="search"
                id="search"
                name="search"
                placeholder="Search"
                onChange={handleTextChange}
                value={query}
              />
              <button className="submit" type="submit" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
