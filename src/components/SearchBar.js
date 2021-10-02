import React, { useState, useEffect } from "react";


const SearchBar = ({ searchTerm, setSearchTerm }) => {
  
  return (
    <div className="new-post-component-main-container">
      <form>
        <fieldset>
          <label id="filter">Filter</label>
          <input
            id="filterInput"
            type="text"
            placeholder="filter"
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </fieldset>
        {/* <button id="filter">Submit</button> */}
      </form>
    </div>
  );
};

export default SearchBar;
