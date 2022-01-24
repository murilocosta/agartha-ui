import React from 'react';

import { VStack } from '@chakra-ui/react';

import { InventoryItemRead, InventoryRead } from '../../models/inventory';

import SurvivorInventoryListItem from './SurvivorInventoryListItem';

export interface InventoryListProps {
  inventory?: InventoryRead;
  fullScreen?: boolean;
  selectInventoryItem?(resource: InventoryItemRead, quantity: number): void;
}

function SurvivorInventoryList(props: InventoryListProps): React.ReactElement<InventoryListProps> {
  return (
    <VStack gap={4}>
      {props.inventory !== null && props.inventory !== undefined ? (
        props.inventory.items.map((item: InventoryItemRead) => (
          <SurvivorInventoryListItem
            key={item.resource_id}
            resource={item}
            fullScreen={props.fullScreen}
            selectInventoryItem={props.selectInventoryItem}
          />
        ))
      ) : (
        <></>
      )}
    </VStack>
  );
}

export default SurvivorInventoryList;