import React, { useState } from 'react';
import { getIn, FormikProps, FormikValues } from 'formik';

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  IconButton,
  Input,
  Spacer,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import SurvivorRegistrationInventoryList from './SurvivorRegistrationInventoryList';

function SurvivorRegistrationInventory(props: FormikProps<FormikValues>): React.ReactElement {
  const [nameFilter, setNameFilter] = useState('');
  const [confirmedNameFilter, setConfirmedNameFilter] = useState('');

  return (
    <>
      <FormControl paddingBottom={30}>
        <FormLabel htmlFor='filter'>{'Filter'}</FormLabel>
        <HStack spacing={1}>
          <Input id='filter' type='text' onChange={(event) => setNameFilter(event.target.value)} />
          <Spacer />
          <IconButton
            aria-label={'Filter items'}
            icon={<SearchIcon />}
            onClick={() => setConfirmedNameFilter(nameFilter)}
          />
        </HStack>
      </FormControl>

      <FormControl isInvalid={getIn(props.errors, 'survivor.inventory') && getIn(props.touched, 'survivor.inventory')}>
        <SurvivorRegistrationInventoryList nameFilter={confirmedNameFilter} {...props} />
        <FormErrorMessage>{'Must select at least one item'}</FormErrorMessage>
      </FormControl>
    </>
  );
}

export default SurvivorRegistrationInventory;
