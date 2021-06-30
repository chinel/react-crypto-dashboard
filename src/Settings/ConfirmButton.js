import React from "react";
import styled from "styled-components";
import { AppContext } from "../App/AppProvider";

const ConfirmButtonStyed = styled.div`
  margin: 20px;
  color: green;
`;

export default function ConfirmButton() {
  return (
    <AppContext.Consumer>
      {({ confirmFavorites }) => (
        <ConfirmButtonStyed>Confirm Favorites</ConfirmButtonStyed>
      )}
    </AppContext.Consumer>
  );
}
