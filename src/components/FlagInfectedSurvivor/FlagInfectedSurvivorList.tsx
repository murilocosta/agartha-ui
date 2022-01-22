import React from 'react';
import { FormikProps, FormikValues } from 'formik';

import { useDisclosure, VStack } from '@chakra-ui/react';
import { MdFlag } from 'react-icons/md';

import { useAppSelector } from '../../features/hooks';
import { selectProfile } from '../../features/survivor/survivorSlice';
import { useFetchSurvivorListQuery } from '../../services';

import FlagInfectedSurvivorListFallback from './FlagInfectedSurvivorListFallback';

import FlagInfectedSurvivorModal from './FlagInfectedSurvivorModal';
import SurvivorList from '../SurvivorList/SurvivorList';
import { SurvivorRead } from '../../models/survivor';

export interface InfectedSurvivorListProps extends FormikProps<FormikValues> {
  nameFilter?: string;
}

function FlagInfectedSurvivorList(props: InfectedSurvivorListProps): React.ReactElement<InfectedSurvivorListProps> {
  const { data, isLoading, isFetching } = useFetchSurvivorListQuery({ name: props.nameFilter });
  const { isOpen, onClose, onOpen } = useDisclosure();
  const survivorProfile = useAppSelector(selectProfile);

  const onSelectSurvivor = ({ id }: SurvivorRead) => {
    props.setFieldValue('reported_id', id);
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
      <SurvivorList
        buttonConfig={{
          buttonIcon: <MdFlag />,
          buttonColor: 'red',
          buttonText: 'Report'
        }}
        survivorList={data}
        onSelectSurvivor={onSelectSurvivor}
      />

      <FlagInfectedSurvivorModal
        isOpen={isOpen}
        onConfirm={onConfirmSurvivor}
        onClose={onClose}
      />
    </VStack>
  );
}

export default FlagInfectedSurvivorList;
