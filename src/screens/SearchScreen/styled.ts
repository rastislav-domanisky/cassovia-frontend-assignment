import styled from 'styled-components';

export const SearchScreenStyled = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  .graphic {
    box-sizing: border-box;
    background: red;
    width: 100%;
    flex: 1;
    z-index: -10;
    background: url('/graphic.svg');
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const SearchCardStyled = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 90vh;
  background: #ffffff;
  box-shadow: 0px -16px 40px rgba(0, 0, 0, 0.2);
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  display: flex;
  flex-direction: column;

  .search-card-title {
    box-sizing: border-box;
    color: #999999;
    width: 100%;
    text-align: center;
    padding: 28px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    font-family: Barlow;
  }

  .search-results-wrapper {
    box-sizing: border-box;
    width: 100%;
    flex: 1;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
  }

  .search-loading-wrapper {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
