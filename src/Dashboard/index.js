import React from "react";
import Page from "../Shared/Page";
import CoinSpotlight from "./CoinSpotlight";
import PriceGrid from "./PriceGrid";

export default function Dashboard() {
  return (
    <Page name="dashboard">
      <PriceGrid />
      <CoinSpotlight />
    </Page>
  );
}
