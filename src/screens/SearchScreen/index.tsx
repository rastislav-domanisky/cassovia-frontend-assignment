import React, { ReactElement } from "react";
import SearchInput from "components/SearchInput";
import { SearchScreenStyled, SearchCardStyled } from "./styled";

function SearchScreen(): ReactElement {
  return (
    <SearchScreenStyled>
      <SearchCardStyled>
        <p className="search-card-title">Location</p>
        <div className="search-results-wrapper">
          <SearchInput />
        </div>
      </SearchCardStyled>
    </SearchScreenStyled>
  );
}

export default SearchScreen;
