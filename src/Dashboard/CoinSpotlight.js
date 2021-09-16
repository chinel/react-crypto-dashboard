import React from "react";
import { AppContext } from "../App/AppProvider";
import CoinImage from "../Shared/CoinImage";
import { Tile } from "../Shared/Tile";

const CoinSpotlight = () => {
  return (
    <AppContext.Consumer>
      {({ currentFavorite, coinList }) => (
        <Tile>
          <h2>{coinList[currentFavorite].CoinName}</h2>
          <CoinImage coin={coinList[currentFavorite]} />
        </Tile>
      )}
    </AppContext.Consumer>
  );
};

export default CoinSpotlight;
