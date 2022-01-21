import React from 'react';
import { Link } from 'react-router-dom';
import { Form, FormikProps, FormikValues } from 'formik';
import { LatLngLiteral } from 'leaflet';

import { Box, Button, ButtonGroup, Flex, Spacer, useBreakpointValue } from '@chakra-ui/react';

import { convertLocation } from '../../models/location';
import AppPageHeader from '../AppPageHeader';
import SurvivorRegistrationInventory from './SurvivorRegistrationInventory';
import SurvivorRegistrationForm from './SurvivorRegistrationForm';
import SurvivorRegistrationMap from './SurvivorRegistrationMap';


function SurvivorRegistrationContainer(props: FormikProps<FormikValues>): React.ReactElement<any> {
  const survivorSectionWidth = useBreakpointValue({ base: '100%', lg: '70%' });
  const survivorSectionFormWidth = useBreakpointValue({ base: '100%', lg: '50%' });
  const survivorSectionMapWidth = useBreakpointValue({ base: '100%', lg: '50%' });
  const survivorSectionInventoryWidth = useBreakpointValue({ base: '100%', lg: '30%' });

  const setPosition = (position: LatLngLiteral) => props.setFieldValue('survivor.position', convertLocation(position));

  return (
    <Form>
      <Flex direction={{ base: 'column', lg: 'row' }} gridGap={10}>
        <Box w={survivorSectionWidth}>
          <AppPageHeader title={'Survivor'} />

          <Flex direction={{ base: 'column', md: 'row' }} gridGap={5}>
            <Box w={survivorSectionFormWidth}>
              <SurvivorRegistrationForm {...props} />
            </Box>

            <Box w={survivorSectionMapWidth}>
              <SurvivorRegistrationMap setPosition={setPosition} />
            </Box>
          </Flex>
        </Box>

        <Box w={survivorSectionInventoryWidth}>
          <AppPageHeader title={'Inventory'} />
          <SurvivorRegistrationInventory {...props} />
        </Box>
      </Flex>

      <ButtonGroup w={'100%'} marginTop={15}>
        <Spacer />
        <Button as={Link} to='/'>{'Back'}</Button>
        <Button type='submit' isLoading={props.isSubmitting}>{'Register'}</Button>
      </ButtonGroup>
    </Form>
  );
}

export default SurvivorRegistrationContainer;
