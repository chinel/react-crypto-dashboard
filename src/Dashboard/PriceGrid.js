import React from "react";
import styled from "styled-components";
import { AppContext } from "../App/AppProvider";

const PriceGridStyled = styled.div`
  display: grid;
`;

const PriceGrid = () => {
  return (
    <AppContext.Consumer>
      {({ prices }) => (
        <PriceGridStyled>
          {prices.map((prices) => (
            <div>Price</div>
          ))}
        </PriceGridStyled>
      )}
    </AppContext.Consumer>
  );
};

export default PriceGrid;
