import React from "react";
import styled, { css } from "styled-components";

const Logo = styled.div`
  font-size: 1.5em;
`;

const Bar = styled.div`
  display: grid;
  grid-template-columns: 180px auto 100px 100px;
`;

const ControlButtonElem = styled.div`
  cursor: pointer;
  ${(props) =>
    props.active &&
    css`
      color: blue;
    `}
`;

function ControlButton({ name, active }) {
  return <ControlButtonElem active={active}>{name}</ControlButtonElem>;
}

const Appbar = () => {
  return (
    <Bar>
      <Logo>CryptoDash</Logo>
      <div />
      <ControlButtonElem name="Dashboard" />
      <ControlButtonElem name="Settings" />
    </Bar>
  );
};

export default Appbar;
