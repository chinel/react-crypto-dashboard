import React from "react";
import { AppContext } from "../App/AppProvider";

const PriceGrid = () =>{
return(
    <AppContext.Consumer>
        {
            ({prices}) => (
                 
            )
        }
    </AppContext.Consumer>
)
}

export default PriceGrid;