import React, { useContext } from 'react';

import { Button } from '@chakra-ui/react';
import { MdThumbDown, MdThumbUp } from 'react-icons/md';

import { SelectTradeContext } from './TradeManagementInventoryPanel';

export interface TradeTabInboundButtonProps {
  isLoading: boolean;
  onAcceptTrade(trade_id: number): void;
  onRejectTrade(trade_id: number): void;
}

function TradeManagementTabInboundButton(props: TradeTabInboundButtonProps): React.ReactElement<TradeTabInboundButtonProps> {
  const selectedTrade = useContext(SelectTradeContext);

  return (
    <>
      <Button
        float={'right'}
        colorScheme={'green'}
        leftIcon={<MdThumbUp />}
        marginLeft={3}
        isLoading={props.isLoading}
        onClick={() => props.onAcceptTrade(selectedTrade?.id || 0)}
      >
        {'Accept'}
      </Button>

      <Button
        float={'right'}
        colorScheme={'red'}
        leftIcon={<MdThumbDown />}
        isLoading={props.isLoading}
        onClick={() => props.onRejectTrade(selectedTrade?.id || 0)}
      >
        {'Decline'}
      </Button>
    </>
  );
}

export default TradeManagementTabInboundButton;
