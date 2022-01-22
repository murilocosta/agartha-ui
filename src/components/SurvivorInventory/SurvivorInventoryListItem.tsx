import { Center, Grid, GridItem, Icon } from '@chakra-ui/react';
import React from 'react';
import { getItemIcon } from '../../constants/itemIconList';
import { InventoryItemRead } from '../../models/inventory';

export interface InventoryListItemProps {
  resource: InventoryItemRead;
}

function SurvivorInventoryListItem(props: InventoryListItemProps): React.ReactElement<InventoryListItemProps> {
  return (
    <Grid
      templateColumns='repeat(4, 1fr)'
      gap={4}
      padding={5}
      paddingBottom={5}
      borderWidth={2}
      width={'90%'}
    >
      <GridItem w={'30%'}>
        <Center h={'100%'}>
          <Icon as={getItemIcon(props.resource.item.icon)} w={8} h={8} />
        </Center>
      </GridItem>

      <GridItem colSpan={2}>
        <p style={{ paddingBottom: 10 }}>
          <strong>{'Item'}:</strong> {props.resource.item.name}

        </p>

        <p>
          <strong>{'Price'}:</strong> {props.resource.item.price}
        </p>
      </GridItem>

      <GridItem>
        <p>
          <strong>{'Quantity'}:</strong> {props.resource.quantity}
        </p>
      </GridItem>
    </Grid>
  );
}

export default SurvivorInventoryListItem;
