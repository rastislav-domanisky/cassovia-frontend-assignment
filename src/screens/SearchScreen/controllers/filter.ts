import { LocationListItemData } from './controller';

const filterLocationsByName = (
  list: Array<LocationListItemData>,
  value: string,
): Array<LocationListItemData> => {
  const filteredList: Array<LocationListItemData> = [];

  list.forEach((location) => {
    const { name } = location;
    if (name.toLocaleUpperCase().includes(value.toLocaleUpperCase())) {
      filteredList.push(location);
    }
  });

  return filteredList;
};

export { filterLocationsByName };
