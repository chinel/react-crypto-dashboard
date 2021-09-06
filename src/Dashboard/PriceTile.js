import React from "react";
import styled, { css } from "styled-components";
import { CoinHeaderGridStyled } from "../Settings/CoinHeaderGrid";
import { fontSize3, fontSizeBig } from "../Shared/Styles";
import { SelectableTile } from "../Shared/Tile";

const JustifyRight = styled.div`
  justify-self: right;
`;

const TickerPrice = styled.div`
  ${fontSizeBig}
`;

const numberFormat = (number) => {
  return +(number + "").slice(0, 7);
};

const PriceTileStyled = styled(SelectableTile)`
  ${(props) =>
    props.compact &&
    css`
      ${fontSize3}
    `}
`;

const PriceTileDiv = ({ sym, data }) => {
  return (
    <PriceTileStyled>
      <CoinHeaderGridStyled>
        <div>{sym}</div>
        <JustifyRight>{numberFormat(data.CHANGEPCT24HOUR)}</JustifyRight>
      </CoinHeaderGridStyled>
      <TickerPrice>${numberFormat(data.PRICE)}</TickerPrice>
    </PriceTileStyled>
  );
};

const PriceTile = ({ price, index }) => {
  let sym = Object.keys(price)[0];
  let data = price[sym]["USD"];
  return <PriceTileDiv sym={sym} data={data}></PriceTileDiv>;
};

export default PriceTile;
