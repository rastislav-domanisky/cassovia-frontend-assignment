import React, { ReactElement, useState, useEffect } from 'react';
import SearchInput from 'components/SearchInput';
import LocationsList from 'components/LocationsList';
import LoadingIndicator from 'components/LoadingIndicator';
import { SearchScreenStyled, SearchCardStyled } from './styled';
import {
  LocationListItemData,
  getLocationsData,
} from './controllers/controller';
import { filterLocationsByName } from './controllers/filter';

function SearchScreen(): ReactElement {
  type SearchScreenState = {
    isLoaded: boolean;
    searchValue: string;
    locations: Array<LocationListItemData>;
  };

  const [state, setState] = useState<SearchScreenState>({
    isLoaded: false,
    searchValue: '',
    locations: [],
  });

  useEffect(() => {
    const updateLocations = async () => {
      const result = await getLocationsData();
      setState((current) => ({
        ...current,
        isLoaded: true,
        locations: result.data,
      }));
    };

    updateLocations();
  }, []);

  const handleSearch = (value: string) => {
    setState((current) => ({
      ...current,
      searchValue: value,
    }));
  };

  return (
    <SearchScreenStyled>
      <div className="graphic" />
      <SearchCardStyled>
        <p className="search-card-title">Location</p>
        <div className="search-results-wrapper">
          <SearchInput value={state.searchValue} handleChange={handleSearch} />
          {state.isLoaded ? (
            <LocationsList
              list={filterLocationsByName(state.locations, state.searchValue)}
            />
          ) : (
            <div className="search-loading-wrapper">
              <LoadingIndicator />
            </div>
          )}
        </div>
      </SearchCardStyled>
    </SearchScreenStyled>
  );
}

export default SearchScreen;
