import React from 'react';

import { TradeResourcesRead } from '../../models/trade';

import TradeManagementInventoryPanel, { InventoryPanelFilter } from './TradeManagementInventoryPanel';
import TradeManagementInventoryPanelFallback from './TradeManagementInventoryPanelFallback';

export interface TradeTabHistoryProps {
  isLoading: boolean;
  resourceList?: TradeResourcesRead[];
}

function TradeManagementTabHistory(props: TradeTabHistoryProps): React.ReactElement<TradeTabHistoryProps> {
  return (
    <>
      {props.isLoading ? (
        <TradeManagementInventoryPanelFallback />
      ) : (
        <TradeManagementInventoryPanel
          filter={InventoryPanelFilter.DISPLAY_HISTORY}
          resourceList={props.resourceList}
        />
      )}
    </>
  );
}

export default TradeManagementTabHistory;
