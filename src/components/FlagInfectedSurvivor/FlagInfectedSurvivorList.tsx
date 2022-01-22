import React from 'react';
import { FormikProps, FormikValues } from 'formik';

import { useDisclosure, VStack } from '@chakra-ui/react';

import { SurvivorRead } from '../../models/survivor';
import { useFetchSurvivorListQuery } from '../../services';

import FlagInfectedSurvivorListFallback from './FlagInfectedSurvivorListFallback';
import FlagInfectedSurvivorListItem from './FlagInfectedSurvivorListItem';
import FlagInfectedSurvivorModal from './FlagInfectedSurvivorModal';
import { useAppSelector } from '../../features/hooks';
import { selectProfile } from '../../features/survivor/survivorSlice';

export interface SurvivorListProps extends FormikProps<FormikValues> {
  nameFilter?: string;
}

function FlagInfectedSurvivorList(props: SurvivorListProps): React.ReactElement<SurvivorListProps> {
  const { data, isLoading, isFetching } = useFetchSurvivorListQuery({ name: props.nameFilter });
  const { isOpen, onClose, onOpen } = useDisclosure();
  const survivorProfile = useAppSelector(selectProfile);

  const onSelectSurvivor = (reported_id: number) => {
    props.setFieldValue('reported_id', reported_id);
    props.setFieldValue('reportee_id', survivorProfile?.id);
    onOpen();
  };

  const onConfirmSurvivor = () => {
    onClose();
    props.submitForm();
  }

  if (isLoading || isFetching) {
    return <FlagInfectedSurvivorListFallback />;
  }

  return (
    <VStack spacing={4}>
      {data && data.length > 0 ? (
        data.map((survivor: SurvivorRead) => (
          <FlagInfectedSurvivorListItem key={survivor.id} survivor={survivor} onSelect={onSelectSurvivor} />
        ))
      ) : <></>}

      <FlagInfectedSurvivorModal
        isOpen={isOpen}
        onConfirm={onConfirmSurvivor}
        onClose={onClose}
      />
    </VStack>
  );
}

export default FlagInfectedSurvivorList;
