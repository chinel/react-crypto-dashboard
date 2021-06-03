import React from "react";
import styled from "styled-components";

const Bar = styled.div`
  display: grid;
  grid-template-columns: 180px 100px 100px;
`;

const Appbar = () => {
  return (
    <Bar>
      <div>CryptoDash</div>
      <div>Dashboard</div>
      <div>Settings</div>
    </Bar>
  );
};

export default Appbar;
