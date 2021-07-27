import styled from 'styled-components';

export const LocationsListStyled = styled.div`
  box-sizing: border-box;
  width: 100%;
  flex: 1;
  padding: 25px 20px;
  overflow-y: auto;
  max-height: calc(100vh - 200px);
`;

export const LocationsListItemStyled = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 30px;
  margin: 2px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .location-item-name {
    color: #444444;
    font-family: Barlow;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    letter-spacing: -0.05em;
  }

  .location-item-temp {
    color: #666666;
    font-family: Barlow;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
  }

  &:hover,
  &:active,
  &:focus {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.1);
  }
`;
