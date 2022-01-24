import React, { useState } from 'react';
import { getIn, FormikProps, FormikValues } from 'formik';

import {
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';

import SurvivorRegistrationInventoryList from './SurvivorRegistrationInventoryList';
import SurvivorInventoryNameFilter from '../SurvivorInventory/SurvivorInventoryNameFilter';

function SurvivorRegistrationInventory(props: FormikProps<FormikValues>): React.ReactElement {
  const [nameFilter, setNameFilter] = useState('');

  return (
    <>
      <SurvivorInventoryNameFilter onSelectFilter={setNameFilter} />

      <FormControl isInvalid={getIn(props.errors, 'survivor.inventory') && getIn(props.touched, 'survivor.inventory')}>
        <SurvivorRegistrationInventoryList nameFilter={nameFilter} {...props} />
        <FormErrorMessage>{'Must select at least one item'}</FormErrorMessage>
      </FormControl>
    </>
  );
}

export default SurvivorRegistrationInventory;
