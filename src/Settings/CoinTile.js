import React from "react";
import { AppContext } from "../App/AppProvider";
import { SelectableTile } from "../Shared/Tile";
import CoinHeaderGrid from "./CoinHeaderGrid";

const CoinTile = ({ coinKey }) => {
  return (
    <AppContext.Consumer>
      {({ coinList }) => {
        let coin = coinList[coinKey];
        const TileClass = SelectableTile;
        return (
          <TileClass>
            <CoinHeaderGrid name={coin.CoinName} symbol={coin.Symbol} />
          </TileClass>
        );
      }}
    </AppContext.Consumer>
  );
};

export default CoinTile;
