import React from 'react';
import { Form, FormikProps, FormikValues } from 'formik';

import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
  Spacer,
  useBreakpointValue
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import FlagInfectedSurvivorList from './FlagInfectedSurvivorList';

function FlagInfectedSurvivorForm(props: FormikProps<FormikValues>): React.ReactElement {
  const flagSurvivorBoxWidth = useBreakpointValue({ base: '100%', md: '70%', lg: '60%' });
  const [nameFilter, setNameFilter] = React.useState('');
  const [confirmedNameFilter, setConfirmedNameFilter] = React.useState('');

  return (
    <Form>
      <Flex direction={{ base: 'column' }} alignItems={'center'} gridGap={5}>
        <Box w={flagSurvivorBoxWidth}>
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
                onClick={() => setConfirmedNameFilter(nameFilter)}
              />
            </HStack>
          </FormControl>
        </Box>

        <Box w={flagSurvivorBoxWidth}>
          <FlagInfectedSurvivorList nameFilter={confirmedNameFilter} {...props} />
        </Box>
      </Flex>
    </Form>
  );
}

export default FlagInfectedSurvivorForm;
