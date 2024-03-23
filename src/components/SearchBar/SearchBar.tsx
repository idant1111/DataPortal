import React from 'react';
import './SearchBar.css';
const SearchBar: React.FC = () => {
  return (
    <div className="search-box">
      <div className="search-shortcut">CTRL + F</div>
      <div className="search-seperator"> <br></br></div>
      <div className="search-text">
      <input className="search-input" type="text" placeholder="“Knowing yourself is the beginning of all wisdom.” — Aristotle" />
      </div>
      <button className="discover-button">Discover More</button>
    </div>
  );
}

export default SearchBar;
