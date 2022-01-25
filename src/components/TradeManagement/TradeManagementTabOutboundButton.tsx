import React, { useContext } from 'react';

import { Button } from '@chakra-ui/react';
import { MdCancel } from 'react-icons/md';

import { SelectTradeContext } from './TradeManagementInventoryPanel';

export interface TradeTabOutboundButtonProps {
  isLoading: boolean;
  onCancelTrade(trade_id: number): void;
}

function TradeManagementTabOutboundButton(props: TradeTabOutboundButtonProps): React.ReactElement<TradeTabOutboundButtonProps> {
  const selectedTrade = useContext(SelectTradeContext);

  return (
    <>
      <Button
        float={'right'}
        colorScheme={'red'}
        leftIcon={<MdCancel />}
        isLoading={props.isLoading}
        onClick={() => props.onCancelTrade(selectedTrade?.id || 0)}
      >
        {'Cancel'}
      </Button>
    </>
  );
}

export default TradeManagementTabOutboundButton;
