import React from "react";

import "./searchBox.styles.css";

export const SearchBox = ({ placeholder, handler }) => {
  return (
    <input
      className="search-box"
      type="search"
      placeholder={placeholder}
      onChange={handler}
    />
  );
};
