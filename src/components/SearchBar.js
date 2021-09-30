import React, { useState, useEffect } from "react";

const SearchBar = ({searchTerm, setSearchTerm}) => {
  return (
    <div>
      <form>
        <fieldset>
          <label id="filter">Filter</label>
          <input
            id="filterInput"
            type="text"
            placeholder="filter"
            value={searchTerm}
            onChange={(event)=>{
              console.log(searchTerm)
              setSearchTerm(event.target.value)
            }}

          />
        </fieldset>
      </form>
    </div>
  );
};

export default SearchBar;
