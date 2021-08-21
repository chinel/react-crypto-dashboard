import React from "react";
import styled from "styled-components";
import { backgroundColor2, fontSize2 } from "../Shared/Styles";
import { AppContext } from "../App/AppProvider";

const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
`;

const SearchInput = styled.input`
  ${backgroundColor2}
  ${fontSize2}
  height: 25px;
  color: #1163c9;
  place-self: center left; // shorthand for align self center and justify self left
`;

const Search = () => {
  return (
    <AppContext.Consumer>
      {({ setFilteredCoins, coinList }) => (
        <SearchGrid>
          <h2>Search all coins</h2>
          <SearchInput
            onKeyUp={(e) => filterCoins(e, setFilteredCoins, coinList)}
          />
        </SearchGrid>
      )}
    </AppContext.Consumer>
  );
};

export default Search;
