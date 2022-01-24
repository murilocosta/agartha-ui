import React from "react";

import { useAppSelector } from "../../features/hooks";
import { selectProfile } from "../../features/survivor/survivorSlice";
import { useFetchSurvivorInventoryQuery } from "../../services";

import AppSection from "../AppSection";
import SurvivorInventoryListFallback from "./SurvivorInventoryListFallback";
import SurvivorInventoryList from "./SurvivorInventoryList";

function SurvivorInventoryPage(): React.ReactElement {
  const survivorProfile = useAppSelector(selectProfile);
  const { data, isLoading } = useFetchSurvivorInventoryQuery(survivorProfile?.id || 0);

  if (isLoading) {
    return <SurvivorInventoryListFallback />
  }

  return (
    <AppSection pageHeader={'Survivor Inventory'}>
      <SurvivorInventoryList inventory={data} />
    </AppSection>
  );
}

export default SurvivorInventoryPage;
