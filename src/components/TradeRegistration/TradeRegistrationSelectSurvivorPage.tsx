import React from "react";

import AppSection from "../AppSection";
import TradeRegistrationSurvivorList from "./TradeRegistrationSurvivorList";

function TradeRegistrationSelectSurvivorPage(): React.ReactElement {
  return (
    <AppSection pageHeader={'Trade - Select Survivor'}>
      <TradeRegistrationSurvivorList />
    </AppSection>
  );
}

export default TradeRegistrationSelectSurvivorPage;
