import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react';
import React from 'react';

export interface FlagInfectedModalProps {
  isOpen: boolean;
  onClose(): void;
  onConfirm(): void;
}

function FlagInfectedSurvivorModal(props: FlagInfectedModalProps): React.ReactElement<FlagInfectedModalProps> {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>{'Report Confirmation'}</ModalHeader>

        <ModalCloseButton />

        <ModalBody>
          <Text>
            {'When reporting a survivor as infected'}
            {'he/she loses his/her access to the inventory'}
            {'and cannot trade anymore.'}
          </Text>

          <Text>
            {'Are you sure about reporting this survivor?'}
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button variant='ghost' mr={3} onClick={props.onClose}>
            {'Cancel'}
          </Button>

          <Button onClick={props.onConfirm}>
            {'Confirm'}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default FlagInfectedSurvivorModal;
