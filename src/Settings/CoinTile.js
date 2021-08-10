import React from "react";
import { AppContext } from "../App/AppProvider";
import CoinImage from "../Shared/CoinImage";
import { SelectableTile } from "../Shared/Tile";
import CoinHeaderGrid from "./CoinHeaderGrid";

const CoinTile = ({ coinKey, topSection }) => {
  return (
    <AppContext.Consumer>
      {({ coinList }) => {
        let coin = coinList[coinKey];
        const TileClass = SelectableTile;
        return (
          <TileClass>
            <CoinHeaderGrid name={coin.CoinName} symbol={coin.Symbol} />
            <CoinImage coin={coin} />
          </TileClass>
        );
      }}
    </AppContext.Consumer>
  );
};

export default CoinTile;
