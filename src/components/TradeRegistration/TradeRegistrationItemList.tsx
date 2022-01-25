import React, { useState } from "react";

import { Grid, GridItem, Text } from "@chakra-ui/react";

import { useAppSelector } from "../../features/hooks";
import { selectTradeSurvivors } from "../../features/trade/tradeSlice";
import { InventoryItemRead } from "../../models/inventory";
import { useFetchSurvivorInventoryQuery } from "../../services";

import SurvivorInventoryList from "../SurvivorInventory/SurvivorInventoryList";
import SurvivorInventoryListFallback from "../SurvivorInventory/SurvivorInventoryListFallback";

export interface SelectedResourceMap {
  [resource_id: string]: number;
}

export interface ItemListProps {
  senderResources: SelectedResourceMap;
  receiverResources: SelectedResourceMap;
  setSenderResources(resource: SelectedResourceMap): void;
  setReceiverResources(resource: SelectedResourceMap): void;
}

function TradeRegistrationItemList(props: ItemListProps): React.ReactElement<ItemListProps> {
  const selectedSurvivors = useAppSelector(selectTradeSurvivors);
  const { data: senderData, isLoading: senderIsLoading } = useFetchSurvivorInventoryQuery(selectedSurvivors.senderId || 0);
  const { data: receiverData, isLoading: receiverIsLoading } = useFetchSurvivorInventoryQuery(selectedSurvivors.receiverId || 0);

  const [senderPrice, setSenderPrice] = useState({});
  const [receiverPrice, setReceiverPrice] = useState({});

  const selectInventoryItemSender = (resource: InventoryItemRead, quantity: number): void => {
    setSenderPrice({ ...senderPrice, [resource.resource_id]: resource.item.price * quantity });
    props.setSenderResources({ ...props.senderResources, [resource.resource_id]: quantity });
  }

  const selectInventoryItemReceiver = (resource: InventoryItemRead, quantity: number): void => {
    setReceiverPrice({ ...receiverPrice, [resource.resource_id]: resource.item.price * quantity });
    props.setReceiverResources({ ...props.receiverResources, [resource.resource_id]: quantity });
  }

  const getResourcesPrice = (resources: SelectedResourceMap) =>
    Object.keys(resources).reduce((total: number, current: string) =>
      total + resources[current], 0
    );

  return (
    <Grid templateColumns='repeat(2, 1fr)' gap={5}>
      <GridItem w='100%' gap={3}>
        <Text fontSize='lg'>
          {'Your inventory '}
          <span style={{ fontSize: 32 }}>
            {getResourcesPrice(senderPrice)}
          </span>
        </Text>
        <br />

        {senderIsLoading === true ? (
          <SurvivorInventoryListFallback />
        ) : (
          <SurvivorInventoryList
            inventory={senderData}
            fullScreen={true}
            selectInventoryItem={selectInventoryItemSender}
          />
        )}
      </GridItem>

      <GridItem w='100%' gap={3}>
        <Text fontSize='lg'>
          {'Their inventory '}
          <span style={{ fontSize: 32 }}>
            {getResourcesPrice(receiverPrice)}
          </span>
        </Text>
        <br />

        {receiverIsLoading === true ? (
          <SurvivorInventoryListFallback />
        ) : (
          <SurvivorInventoryList
            inventory={receiverData}
            fullScreen={true}
            selectInventoryItem={selectInventoryItemReceiver}
          />
        )}
      </GridItem>
    </Grid>
  );
}

export default TradeRegistrationItemList;
