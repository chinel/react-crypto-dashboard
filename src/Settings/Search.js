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

//this debounce function delays will be used to delay the filter event by half a second
//this prevents us from firing an event anytime the user types in the search input
//It only fires the event after half a second
const handleFilter = _.debounce((inputValue, coinList, setFilteredCoins) => {
  //Get all the coin symbols
  let coinSymbols = Object.keys(coinList);
  //Get all the coin names, map symbol to name
  let coinNames = coinSymbols.map((sym) => coinList[sym].CoinName);
  let allStringsToSearch = coinSymbols.concat(coinNames);
}, 500);

const filterCoins = (e, setFilteredCoins, coinList) => {
  let inputValue = e.target.value;
  handleFilter(inputValue, coinList, setFilteredCoins);
};

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
