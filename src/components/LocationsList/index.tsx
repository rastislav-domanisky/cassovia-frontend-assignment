import React, { ReactElement } from 'react';
import { LocationListItemData } from 'screens/SearchScreen/controllers/controller';
import { Link } from 'react-router-dom';
import { LocationsListStyled, LocationsListItemStyled } from './styled';

type Props = {
  list: Array<LocationListItemData>;
};

const renderItem = (itemData: LocationListItemData): JSX.Element => (
  <Link to={`/city/${itemData.id}`} key={itemData.id}>
    <LocationsListItemStyled>
      <p className="location-item-name">{itemData.name}</p>
      <p className="location-item-temp">{itemData.temp}</p>
    </LocationsListItemStyled>
  </Link>
);

function LocationsList({ list }: Props): ReactElement {
  return (
    <LocationsListStyled>
      {list.map((item) => renderItem(item))}
    </LocationsListStyled>
  );
}

export default LocationsList;
