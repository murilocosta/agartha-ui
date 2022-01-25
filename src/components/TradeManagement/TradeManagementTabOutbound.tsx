import React, { useEffect } from 'react';

import { useToast } from '@chakra-ui/react';

import { TradeResourcesRead } from '../../models/trade';
import { useTradeCancelMutation } from '../../services';
import { buildSuccessToast } from '../../services/toastService';

import TradeManagementInventoryPanel, { InventoryPanelFilter } from './TradeManagementInventoryPanel';
import TradeManagementInventoryPanelFallback from './TradeManagementInventoryPanelFallback';
import TradeManagementTabOutboundButton from './TradeManagementTabOutboundButton';

export interface TradeTabOutboundProps {
  isLoading: boolean;
  resourceList?: TradeResourcesRead[];
}

function TradeManagementTabOutbound(props: TradeTabOutboundProps): React.ReactElement<TradeTabOutboundProps> {
  const [cancelTrade, { isSuccess: isCancelSuccess, isLoading }] = useTradeCancelMutation();
  const toast = useToast();

  useEffect(() => {
    if (isCancelSuccess) {
      toast(buildSuccessToast(
        'Trade Cancelled',
        'Your trade request was cancelled!'
      ));
    }
  }, [isCancelSuccess, toast])

  return (
    <>
      {props.isLoading ? (
        <TradeManagementInventoryPanelFallback />
      ) : (
        <TradeManagementInventoryPanel
          filter={InventoryPanelFilter.DISPLAY_OUTBOUND}
          resourceList={props.resourceList}
        >
          <TradeManagementTabOutboundButton
            isLoading={isLoading}
            onCancelTrade={(trade_id: number) => cancelTrade({ trade_id })}
          />
        </TradeManagementInventoryPanel>
      )}
    </>
  );
}

export default TradeManagementTabOutbound;
