import React from "react";
import { AppContext } from "../App/AppProvider";
import CoinImage from "../Shared/CoinImage";
import { SelectableTile, DeletetableTile, DisabledTile } from "../Shared/Tile";
import CoinHeaderGrid from "./CoinHeaderGrid";

const clickCoinHandler = (topSection, coinKey, addCoin, removeCoin) => {
  return topSection
    ? () => {
        removeCoin(coinKey);
      }
    : () => {
        addCoin(coinKey);
      };
};

const CoinTile = ({ coinKey, topSection }) => {
  return (
    <AppContext.Consumer>
      {({ coinList, addCoin, removeCoin }) => {
        let coin = coinList[coinKey];
        let TileClass = SelectableTile;
        if (topSection) {
          TileClass = DeletetableTile;
        }
        return (
          <TileClass
            onClick={clickCoinHandler(topSection, coinKey, addCoin, removeCoin)}
          >
            <CoinHeaderGrid
              topSection={topSection}
              name={coin.CoinName}
              symbol={coin.Symbol}
            />
            <CoinImage coin={coin} />
          </TileClass>
        );
      }}
    </AppContext.Consumer>
  );
};

export default CoinTile;
