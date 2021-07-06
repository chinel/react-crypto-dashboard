import React from "react";
import styled, { css } from "styled-components";
import { AppContext } from "../App/AppProvider";
import { Tile } from "../Shared/Tile";

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

const CoinGrid = () => {
  return (
    <AppContext.Consumer>
      {({ coinList }) => (
        <CoinGridStyled>
          {Object.keys(coinList).map((coinKey, index) => (
            <Tile key={index}>{coinKey}</Tile>
          ))}
        </CoinGridStyled>
      )}
    </AppContext.Consumer>
  );
};

export default CoinGrid;
