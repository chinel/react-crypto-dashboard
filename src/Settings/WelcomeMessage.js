import React from "react";
import { AppContext } from "../App/AppProvider";

const WelcomeMessage = ({ firstVisit }) => {
  return (
    <AppContext.Consumer>
      {({ firstVisit }) =>
        firstVisit ? (
          <div>
            Welcome to CryptoDash, please select your favorite coins to begin.{" "}
          </div>
        ) : null
      }
    </AppContext.Consumer>
  );
};

export default WelcomeMessage;
