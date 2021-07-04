import React from "react";
import styled, { css } from "styled-components";
import { AppContext } from "../App/AppProvider";

export const CoinGridStyled = styled.div`
  display: grid;
`;

const CoinGrid = () => {
  return (
    <AppContext.Consumer>
      {({ coinList }) => (
        <CoinGridStyled>{Object.keys(coinList).length}</CoinGridStyled>
      )}
    </AppContext.Consumer>
  );
};

export default CoinGrid;
