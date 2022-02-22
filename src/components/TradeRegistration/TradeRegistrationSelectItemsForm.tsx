import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Box, Button } from "@chakra-ui/react";

import { TradeResourceWrite, TradeSelectedItems } from "../../models/trade";

import TradeRegistrationItemList, { SelectedResourceMap } from "./TradeRegistrationItemList";

export interface ItemFormProps {
  selectTradeItems(selectedItems: TradeSelectedItems): void;
}

function TradeRegistrationSelectItemsForm(props: ItemFormProps): React.ReactElement<ItemFormProps> {
  const [senderResources, setSenderResources] = useState({});
  const [receiverResources, setReceiverResources] = useState({});
  const navigate = useNavigate();

  const tradeSetup = () => {
    const selectedItemsReducer = (resourceMap: SelectedResourceMap) => Object.keys(resourceMap)
      .map((resource_id: string): TradeResourceWrite => ({
        resource_id: parseInt(resource_id),
        quantity: resourceMap[resource_id],
      }))

    const selectedItems: TradeSelectedItems = {
      senderItems: selectedItemsReducer(senderResources),
      receiverItems: selectedItemsReducer(receiverResources),
    };

    props.selectTradeItems(selectedItems);
  }

  return (
    <>
      <TradeRegistrationItemList
        senderResources={senderResources}
        receiverResources={receiverResources}
        setSenderResources={setSenderResources}
        setReceiverResources={setReceiverResources}
      />

      <Box marginTop={5} marginBottom={20}>
        <Button float={'right'} onClick={tradeSetup}>
          {'Send Offer'}
        </Button>

        <Button variant={'ghost'} float={'right'} onClick={() => navigate(-1)}>
          {'Back'}
        </Button>
      </Box>
    </>
  );
}

export default TradeRegistrationSelectItemsForm;
