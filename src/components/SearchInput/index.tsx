import React, { ReactElement } from "react";
import { ReactComponent as PlaceIcon } from "assets/place.svg";
import { SearchInputStyled } from "./styled";

function SearchInput(): ReactElement {
  return (
    <SearchInputStyled>
      <input
        className="search-input-field"
        type="text"
        placeholder="Search city ..."
      />
      <PlaceIcon />
    </SearchInputStyled>
  );
}

export default SearchInput;
