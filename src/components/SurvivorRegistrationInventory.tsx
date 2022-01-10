import React from 'react';

import {
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
  Spacer,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import SurvivorRegistrationInventoryFallback from './SurvivorRegistrationInventoryFallback';
import SurvivorRegistrationInventoryList from './SurvivorRegistrationInventoryList';

function SurvivorRegistrationInventory(): React.ReactElement {
  return (
    <>
      <FormControl paddingBottom={30}>
        <FormLabel htmlFor='filter'>{'Filter'}</FormLabel>
        <HStack spacing={5}>
          <Input id='filter' type='text' />
          <Spacer />
          <IconButton aria-label={'Filter items'} icon={<SearchIcon />} />
        </HStack>
      </FormControl>

      <React.Suspense fallback={<SurvivorRegistrationInventoryFallback />}>
        <SurvivorRegistrationInventoryList />
      </React.Suspense>
    </>
  );
}

export default SurvivorRegistrationInventory;
