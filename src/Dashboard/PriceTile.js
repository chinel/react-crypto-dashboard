import React from "react";
import styled, { css } from "styled-components";
import { fontSize3 } from "../Shared/Styles";
import { SelectableTile } from "../Shared/Tile";

const PriceTileStyled = styled(SelectableTile)`
  ${(props) =>
    props.compact &&
    css`
      ${fontSize3}
    `}
`;

const PriceTile = ({ price, index }) => {
  let sym = Object.keys(price)[0];
  let data = price[sym]["USD"];
  return (
    <PriceTileStyled compact={index >= 5}>
      {sym} {data.PRICE}
    </PriceTileStyled>
  );
};

export default PriceTile;
