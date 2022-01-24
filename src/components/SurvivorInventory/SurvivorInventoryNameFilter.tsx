import { SearchIcon } from "@chakra-ui/icons";
import { FormControl, FormLabel, HStack, IconButton, Input, Spacer } from "@chakra-ui/react";
import React, { useState } from "react";

export interface InventoryNameFilterProps {
  onSelectFilter(nameFilter: string): void;
}

function SurvivorInventoryNameFilter(props: InventoryNameFilterProps): React.ReactElement<InventoryNameFilterProps> {
  const [nameFilter, setNameFilter] = useState('');

  return (
    <FormControl paddingBottom={30}>
      <FormLabel htmlFor='filter'>
        {'Filter'}
      </FormLabel>

      <HStack spacing={1}>
        <Input id='filter' type='text' onChange={(event) => setNameFilter(event.target.value)} />

        <Spacer />

        <IconButton
          aria-label={'Filter items'}
          icon={<SearchIcon />}
          onClick={() => props.onSelectFilter(nameFilter)}
        />
      </HStack>
    </FormControl>
  );
}

export default SurvivorInventoryNameFilter;
