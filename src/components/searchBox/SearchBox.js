import React from "react";
import "./SearchBox.css";

const SearchBox = ({ handleInputChange }) => {
  return (
    <div className="search_container">
      <input
        onChange={(e) => handleInputChange(e.target.value)}
        placeholder="Type Keywords"
        className="search_input"
      />
    </div>
  );
};

export default SearchBox;
