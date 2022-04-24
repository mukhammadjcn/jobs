import React from "react";
import Icons from "./Shared/Icons";

function Search({ fetchBySearch }) {
  return (
    <div className="home__main-search">
      <div className="home__main-search_box">
        <input
          type="text"
          onChange={(el) => fetchBySearch(el.target.value)}
          placeholder="Job title, keywords..."
        />
        <Icons name="search" />
      </div>
      <button className="home__main-search__btn btn">Search</button>
    </div>
  );
}

export default Search;
