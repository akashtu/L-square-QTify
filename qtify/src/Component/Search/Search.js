import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <div className="flex">
      <input
        type="text"
        className="input"
        placeholder="Search a album of your choice"
      />
      <button className="button1">
        <i class="fa-solid fa-magnifying-glass fa-xl"></i>
      </button>
    </div>
  );
};

export default Search;
