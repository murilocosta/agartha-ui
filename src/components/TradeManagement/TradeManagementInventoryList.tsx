import React from 'react';

import {
  Box,
  Center,
  Grid,
  GridItem,
  Icon,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';

import { getItemIcon } from '../../constants/itemIconList';
import { TradeHistoryItemRead } from '../../models/trade';

export interface TradeInventoryProps {
  title: string;
  items: TradeHistoryItemRead[];
}

function TradeManagementInventoryList(props: TradeInventoryProps): React.ReactElement<TradeInventoryProps> {
  const inventoryListWidth = useBreakpointValue({ base: '100%' });

  return (
    <VStack columnGap={4} w={inventoryListWidth}>
      <Box textAlign={'left'} w={inventoryListWidth}>
        <Text fontWeight={500}>{props.title}</Text>
      </Box>

      {props.items.map((item: TradeHistoryItemRead, index: number) => (
        <Grid
          key={index}
          w={inventoryListWidth}
          templateColumns={'repeat(6, 1fr)'}
          alignItems={'center'}
          justifyItems={'left'}
          gap={4}
        >
          <GridItem w={inventoryListWidth}>
            <Center h={'100%'}>
              <Icon as={getItemIcon(item.item_icon)} w={8} h={8} />
            </Center>
          </GridItem>

          <GridItem colSpan={4}>
            <Text>{item.item_name}</Text>
          </GridItem>

          <GridItem>
            <Text>{`x${item.item_quantity}`}</Text>
          </GridItem>
        </Grid>
      ))}
    </VStack>
  );
}

export default TradeManagementInventoryList;
