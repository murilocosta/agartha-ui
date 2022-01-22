import React from "react";

import { VStack } from "@chakra-ui/react";

import { useAppSelector } from "../../features/hooks";
import { selectProfile } from "../../features/survivor/survivorSlice";
import { InventoryItemRead } from "../../models/inventory";
import { useFetchSurvivorInventoryQuery } from "../../services";

import AppSection from "../AppSection";
import SurvivorInventoryListFallback from "./SurvivorInventoryListFallback";
import SurvivorInventoryListItem from "./SurvivorInventoryListItem";

function SurvivorInventoryPage(): React.ReactElement {
  const survivorProfile = useAppSelector(selectProfile);
  const { data, isLoading } = useFetchSurvivorInventoryQuery(survivorProfile?.id || 0);

  if (isLoading) {
    return <SurvivorInventoryListFallback />
  }

  return (
    <AppSection pageHeader={'Survivor Inventory'}>
      <VStack gap={4}>
        {data !== null && data !== undefined ? (
          data.items.map((item: InventoryItemRead) => (
            <SurvivorInventoryListItem key={item.resource_id} resource={item} />
          ))
        ) : (
          <></>
        )}
      </VStack>
    </AppSection>
  );
}

export default SurvivorInventoryPage;
