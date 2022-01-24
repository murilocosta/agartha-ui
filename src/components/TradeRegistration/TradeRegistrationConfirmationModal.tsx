import React from 'react';

import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text
} from '@chakra-ui/react';
import { MdCheck } from 'react-icons/md';

import { useAppSelector } from '../../features/hooks';
import { selectTradeWrite } from '../../features/trade/tradeSlice';
import { TradeWrite } from '../../models/trade';

interface TradeConfirmationProps {
  isOpen: boolean;
  onClose(): void;
  onTradeConfirm(trade: TradeWrite): void;
}

function TradeRegistrationConfirmationModal(props: TradeConfirmationProps): React.ReactElement<TradeConfirmationProps> {
  const trade = useAppSelector(selectTradeWrite);

  return (
    <Modal closeOnOverlayClick={false} isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>{'Trade Item Confirmation'}</ModalHeader>
        
        <ModalCloseButton />

        <ModalBody pb={6}>
          <Text>
            {'You requested to trade with another survivor, are you sure you want to continue?'}
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button variant='ghost' mr={3} onClick={props.onClose}>
            {'Cancel'}
          </Button>

          <Button leftIcon={<MdCheck />} onClick={() => props.onTradeConfirm(trade)}>
            {'Confirm'}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default TradeRegistrationConfirmationModal;
