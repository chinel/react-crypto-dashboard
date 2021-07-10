import React from "react";
import { AppContext } from "../App/AppProvider";
import { SelectableTile } from "../Shared/Tile";

const CoinTile = ({ coinKey }) => {
  return (
    <AppContext.Consumer>
      {({ coinList }) => {
        let coin = coinList[coinKey];
        const TileClass = SelectableTile;
        return <TileClass>{coin.CoinName}</TileClass>;
      }}
    </AppContext.Consumer>
  );
};

export default CoinTile;
