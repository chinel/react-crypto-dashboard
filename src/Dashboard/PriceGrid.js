import React from "react";
import styled from "styled-components";
import { AppContext } from "../App/AppProvider";
import PriceTile from "./PriceTile";

const PriceGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  margin-top: 40px;
`;

const PriceGrid = () => {
  return (
    <AppContext.Consumer>
      {({ prices }) => {
        console.log(prices);
        return (
          <PriceGridStyled>
            {prices.map((price, index) => (
              <PriceTile
                key={`priceTile-${index}`}
                price={price}
                index={index}
              />
            ))}
          </PriceGridStyled>
        );
      }}
    </AppContext.Consumer>
  );
};

export default PriceGrid;
