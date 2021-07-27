import React, { ReactElement } from 'react';
import { ReactComponent as PlaceIcon } from 'assets/place.svg';
import { SearchInputStyled } from './styled';

type Props = {
  value: string;
  handleChange: (value: string) => void;
};

function SearchInput({ value, handleChange }: Props): ReactElement {
  return (
    <SearchInputStyled>
      <input
        className="search-input-field"
        type="text"
        placeholder="Search city ..."
        value={value}
        onChange={(event) => {
          handleChange(event.target.value);
        }}
      />
      <PlaceIcon />
    </SearchInputStyled>
  );
}

export default SearchInput;
