import React, { PropsWithChildren } from 'react';

import {
  Avatar,
  Badge,
  Box,
  Center,
  Divider,
  HStack,
  Text,
  VStack,
  useBreakpointValue,
  Stack,
} from '@chakra-ui/react';

import { useAppSelector } from '../../features/hooks';
import { selectProfile } from '../../features/survivor/survivorSlice';
import { TradeResourcesRead, TradeStatus } from '../../models/trade';

import TradeManagementInventoryList from './TradeManagementInventoryList';

export const SelectTradeContext = React.createContext<TradeResourcesRead | undefined>(undefined);

export enum InventoryPanelFilter {
  DISPLAY_HISTORY = 1,
  DISPLAY_INBOUND = 2,
  DISPLAY_OUTBOUND = 3,
}

export interface InventoryPanelProps {
  resourceList?: TradeResourcesRead[];
  filter: InventoryPanelFilter;
}

type InternalComponentProps = PropsWithChildren<InventoryPanelProps>;
type DividerOrientation = 'vertical' | 'horizontal';
type StackDirection = 'row' | 'column';

function TradeManagementInventoryPanel(props: InternalComponentProps): React.ReactElement<InternalComponentProps> {
  const tradeManagementPanelWidth = useBreakpointValue({ base: '100%' });
  const dynamicDividerHeight = useBreakpointValue({ base: 10, sm: 100 });
  const dynamicDividerOrientation = useBreakpointValue<DividerOrientation>({ base: 'horizontal', sm: 'vertical' });
  const dynamicStackDirection = useBreakpointValue<StackDirection>({ base: 'column', sm: 'row' });
  const profile = useAppSelector(selectProfile);

  const resourceFilter = (resource: TradeResourcesRead): boolean => {
    switch (props.filter) {
      case InventoryPanelFilter.DISPLAY_HISTORY:
        return resource.status === TradeStatus.TradeAccepted
          || resource.status === TradeStatus.TradeRejected
          || resource.status === TradeStatus.TradeCancelled;
      case InventoryPanelFilter.DISPLAY_INBOUND:
        return resource.status === TradeStatus.TradeOpen
          && resource.receiver.id === profile?.id;
      case InventoryPanelFilter.DISPLAY_OUTBOUND:
        return resource.status === TradeStatus.TradeOpen
          && resource.sender.id === profile?.id;
      default:
        return false;
    }
  }

  const getAvatarName = (trade: TradeResourcesRead): string => {
    if (props.filter === InventoryPanelFilter.DISPLAY_INBOUND) {
      return trade.sender.name;
    }

    if (
      [
        InventoryPanelFilter.DISPLAY_HISTORY,
        InventoryPanelFilter.DISPLAY_OUTBOUND
      ].includes(props.filter)
    ) {
      return trade.receiver.name;
    }

    return '';
  }

  const getPanelTitle = (trade: TradeResourcesRead): React.ReactElement => {
    switch (props.filter) {
      case InventoryPanelFilter.DISPLAY_HISTORY:
        switch (trade.status) {
          case TradeStatus.TradeAccepted:
            return <Text><strong>{trade.receiver.name}</strong>{' has accepted your trade request'}</Text>;

          case TradeStatus.TradeRejected:
            return <Text><strong>{trade.receiver.name}</strong>{' has rejected your trade request'}</Text>;

          case TradeStatus.TradeCancelled:
            return <Text>{'You have cancelled a trade with '}<strong>{trade.receiver.name}</strong></Text>;

          default:
            return <Text>{'You have traded with '}<strong>{trade.receiver.name}</strong></Text>;
        }

      case InventoryPanelFilter.DISPLAY_INBOUND:
        return <Text><strong>{trade.sender.name}</strong>{' offered you a trade'}</Text>;

      case InventoryPanelFilter.DISPLAY_OUTBOUND:
        return <Text>{'You offered a trade to '}<strong>{trade.receiver.name}</strong></Text>;

      default:
        return <></>;
    }
  }

  const getStatusBadge = (trade: TradeResourcesRead): React.ReactElement => {
    switch (trade.status) {
      case TradeStatus.TradeOpen:
        return <Badge colorScheme='blue'>{'Open'}</Badge>;
      case TradeStatus.TradeAccepted:
        return <Badge colorScheme='green'>{'Accepted'}</Badge>;
      case TradeStatus.TradeRejected:
        return <Badge colorScheme='red'>{'Rejected'}</Badge>;
      case TradeStatus.TradeCancelled:
        return <Badge colorScheme='blackAlpha'>{'Cancelled'}</Badge>;
      default:
        return <></>;
    }
  }

  return (
    <>
      {props.resourceList !== undefined ? (
        props.resourceList.filter(resourceFilter).map((trade: TradeResourcesRead) => (
          <VStack
            key={trade.id}
            alignItems={'center'}
            borderWidth={2}
            padding={3}
            marginBottom={5}
            gridGap={5}
          >
            <Box w={tradeManagementPanelWidth}>
              <HStack spacing={5}>
                <Box>
                  <Avatar name={getAvatarName(trade)} />
                </Box>

                <Box w={'80%'}>
                  {getPanelTitle(trade)}
                </Box>

                <Box w={20} textAlign={'right'}>
                  {getStatusBadge(trade)}
                </Box>
              </HStack>
            </Box>

            <Box w={tradeManagementPanelWidth} padding={5}>
              <Stack direction={dynamicStackDirection} gap={4}>
                <TradeManagementInventoryList
                  title={(trade.sender.id === profile?.id) ? 'Your items' : 'His/her items'}
                  items={trade.sender_items}
                />

                <Center height={dynamicDividerHeight}>
                  <Divider orientation={dynamicDividerOrientation} />
                </Center>

                <TradeManagementInventoryList
                  title={(trade.receiver.id === profile?.id) ? 'Your items' : 'His/her items'}
                  items={trade.receiver_items}
                />
              </Stack>
            </Box>

            {props.children ? (
              <Box w={tradeManagementPanelWidth}>
                <SelectTradeContext.Provider value={trade}>
                  {props.children}
                </SelectTradeContext.Provider>
              </Box>
            ) : <></>}

          </VStack>
        ))
      ) : (
        <></>
      )}
    </>
  );
}

export default TradeManagementInventoryPanel;
