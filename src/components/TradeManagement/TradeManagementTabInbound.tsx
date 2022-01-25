import { useToast } from '@chakra-ui/react';
import React, { useEffect } from 'react';

import { TradeResourcesRead } from '../../models/trade';
import { useTradeAcceptMutation, useTradeRejectMutation } from '../../services';
import { buildSuccessToast } from '../../services/toastService';

import TradeManagementInventoryPanel, { InventoryPanelFilter } from './TradeManagementInventoryPanel';
import TradeManagementInventoryPanelFallback from './TradeManagementInventoryPanelFallback';
import TradeManagementTabInboundButton from './TradeManagementTabInboundButton';

export interface TradeTabInboundProps {
  isLoading: boolean;
  resourceList?: TradeResourcesRead[];
}

function TradeManagementTabInbound(props: TradeTabInboundProps): React.ReactElement<TradeTabInboundProps> {
  const [acceptTrade, { isSuccess: isSuccessAccept, isLoading: isSuccessLoading }] = useTradeAcceptMutation();
  const [rejectTrade, { isSuccess: isSuccessReject, isLoading: isRejectLoading }] = useTradeRejectMutation();
  const toast = useToast();

  useEffect(() => {
    if (isSuccessAccept) {
      toast(buildSuccessToast(
        'Trade Accepted',
        'The survivor trade request was accepted!'
      ));
    }

    if (isSuccessReject) {
      toast(buildSuccessToast(
        'Trade Rejected',
        'The survivor trade request was rejected!'
      ));
    }
  }, [isSuccessAccept, isSuccessReject, toast])

  return (
    <>
      {props.isLoading ? (
        <TradeManagementInventoryPanelFallback />
      ) : (
        <TradeManagementInventoryPanel
          filter={InventoryPanelFilter.DISPLAY_INBOUND}
          resourceList={props.resourceList}
        >
          <TradeManagementTabInboundButton
            isLoading={isSuccessLoading || isRejectLoading}
            onAcceptTrade={(trade_id: number) => acceptTrade(trade_id)}
            onRejectTrade={(trade_id: number) => rejectTrade({ trade_id })}
          />
        </TradeManagementInventoryPanel>
      )}
    </>
  );
}

export default TradeManagementTabInbound;
