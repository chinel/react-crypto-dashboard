import React from "react";
import styled, { css } from "styled-components";
import { AppContext } from "../App/AppProvider";
import { SelectableTile } from "../Shared/Tile";
import CoinTile from "./CoinTile";

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-gap: 15px;
  margin-top: 40px;
`;

function getLowerSectionCoins() {}

const getCoinsToDisplay = (coinList, topSection, favorites, filterCoins) => {
  return topSection ? favorites : getLowerSectionCoins(filterCoins);
};

const CoinGrid = ({ topSection }) => {
  return (
    <AppContext.Consumer>
      {({ coinList, favorites, filterCoins }) => (
        <CoinGridStyled>
          {getCoinsToDisplay(coinList, topSection, favorites, filterCoins).map(
            (coinKey, index) => (
              <CoinTile topSection={topSection} key={index} coinKey={coinKey} />
            )
          )}
        </CoinGridStyled>
      )}
    </AppContext.Consumer>
  );
};

export default CoinGrid;
