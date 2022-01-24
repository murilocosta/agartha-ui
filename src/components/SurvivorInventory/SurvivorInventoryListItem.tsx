import React from 'react';

import { Center, Grid, GridItem, Icon, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, useBreakpointValue } from '@chakra-ui/react';

import { getItemIcon } from '../../constants/itemIconList';
import { InventoryItemRead } from '../../models/inventory';

export interface InventoryListItemProps {
  resource: InventoryItemRead;
  fullScreen?: boolean;
  selectInventoryItem?(resource: InventoryItemRead, quantity: number): void;
}

function SurvivorInventoryListItem(props: InventoryListItemProps): React.ReactElement<InventoryListItemProps> {
  const selectInventoryItemFn = props.selectInventoryItem || null;

  const survivorInventoryBoxWidth = useBreakpointValue(
    props.fullScreen
      ? ({ base: '100%' })
      : ({ base: '100%', md: '70%', lg: '60%' })
  );

  return (
    <Grid
      templateColumns={selectInventoryItemFn ? 'repeat(5, 1fr)' : 'repeat(4, 1fr)'}
      gap={4}
      padding={5}
      paddingBottom={5}
      borderWidth={2}
      width={survivorInventoryBoxWidth}
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

      {selectInventoryItemFn ? (
        <GridItem>
          <NumberInput
            min={0}
            max={props.resource.quantity}
            onChange={(_, valueAsNumber: number) => selectInventoryItemFn(props.resource, valueAsNumber)}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </GridItem>
      ) : (<></>)}
    </Grid>
  );
}

export default SurvivorInventoryListItem;


