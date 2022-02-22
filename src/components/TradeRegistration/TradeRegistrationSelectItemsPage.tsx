import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Progress, useDisclosure, useToast } from "@chakra-ui/react";

import { useAppDispatch } from "../../features/hooks";
import { setSelectedItems } from "../../features/trade/tradeSlice";
import { TradeSelectedItems } from "../../models/trade";
import { useTradeItemsMutation } from "../../services";
import { buildSuccessToast } from "../../services/toastService";

import AppSection from "../AppSection";
import TradeRegistrationConfirmationModal from "./TradeRegistrationConfirmationModal";
import TradeRegistrationSelectItemsForm from "./TradeRegistrationSelectItemsForm";

function TradeRegistrationSelectItemsPage(): React.ReactElement {
  const [tradeItems, { isSuccess, isLoading }] = useTradeItemsMutation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const selectTradeItems = (selectedItems: TradeSelectedItems) => {
    dispatch(setSelectedItems(selectedItems));
    onOpen();
  };

  useEffect(() => {
    if (isSuccess) {
      toast(buildSuccessToast(
        'Trade Requested',
        'The trade with another survivor was successfuly requested!'
      ));
      onClose();
      navigate('/trades');
    }
  }, [isSuccess, toast, onClose, navigate])


  return (
    <AppSection pageHeader={'Trade - Select Items'}>
      {isLoading ? <Progress size='sm' isIndeterminate /> : null}

      <TradeRegistrationConfirmationModal
        isOpen={isOpen}
        onClose={onClose}
        onTradeConfirm={tradeItems}
      />

      <TradeRegistrationSelectItemsForm selectTradeItems={selectTradeItems} />
    </AppSection>
  );
}

export default TradeRegistrationSelectItemsPage;
