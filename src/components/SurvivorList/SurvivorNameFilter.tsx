import React from 'react';

import {
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
  Spacer
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

export interface NameFilterProps {
  onSelectFilter(nameFilter: string): void;
}

function SurvivorNameFilter(props: NameFilterProps): React.ReactElement<NameFilterProps> {
  const [nameFilter, setNameFilter] = React.useState('');

  return (
    <FormControl>
      <FormLabel htmlFor='filter'>{'Filter'}</FormLabel>

      <HStack spacing={1}>
        <Input
          id='filter'
          type='text'
          onChange={(event) => setNameFilter(event.target.value)}
        />

        <Spacer />

        <IconButton
          aria-label={'Filter'}
          icon={<SearchIcon />}
          onClick={() => props.onSelectFilter(nameFilter)}
        />
      </HStack>
    </FormControl>
  );
}

export default SurvivorNameFilter;
