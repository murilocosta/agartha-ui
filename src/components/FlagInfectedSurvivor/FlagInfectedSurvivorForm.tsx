import React from 'react';
import { Form, FormikProps, FormikValues } from 'formik';

import { Box, Flex, useBreakpointValue } from '@chakra-ui/react';

import FlagInfectedSurvivorList from './FlagInfectedSurvivorList';
import SurvivorNameFilter from '../SurvivorList/SurvivorNameFilter';

function FlagInfectedSurvivorForm(props: FormikProps<FormikValues>): React.ReactElement {
  const flagSurvivorBoxWidth = useBreakpointValue({ base: '100%', md: '70%', lg: '60%' });
  const [nameFilter, setNameFilter] = React.useState('');

  return (
    <Form>
      <Flex direction={{ base: 'column' }} alignItems={'center'} gridGap={5}>
        <Box w={flagSurvivorBoxWidth}>
          <SurvivorNameFilter onSelectFilter={setNameFilter} />
        </Box>

        <Box w={flagSurvivorBoxWidth}>
          <FlagInfectedSurvivorList nameFilter={nameFilter} {...props} />
        </Box>
      </Flex>
    </Form>
  );
}

export default FlagInfectedSurvivorForm;
