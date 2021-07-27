import styled from 'styled-components';

export const SearchInputStyled = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  background: #f3f3f3;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 15px;

  .search-input-field {
    box-sizing: border-box;
    flex: 1;
    height: 100%;
    border: none;
    background: transparent;
    font-family: Barlow;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    letter-spacing: -0.05em;
    color: #000000;
    padding-right: 10px;
  }

  .search-input-field:focus {
    outline: none;
    border: none;
  }
`;
