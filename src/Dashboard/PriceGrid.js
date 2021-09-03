import React from "react";
import styled from "styled-components";
import { AppContext } from "../App/AppProvider";
import PriceTile from "./PriceTile";

const PriceGridStyled = styled.div`
  display: grid;
`;

const PriceGrid = () => {
  return (
    <AppContext.Consumer>
      {({ prices }) => (
        <PriceGridStyled>
          {prices.map((price) => (
            <PriceTile price={price} />
          ))}
        </PriceGridStyled>
      )}
    </AppContext.Consumer>
  );
};

export default PriceGrid;
