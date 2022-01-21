import React from 'react';
import { Form, FormikProps, FormikValues } from 'formik';
import { LatLngLiteral } from 'leaflet';

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  useBreakpointValue
} from '@chakra-ui/react';

import {
  convertPosition,
  buildLocationString,
  Location,
  convertLocation
} from '../models/location';
import SurvivorPositionUpdateMap from './SurvivorPositionUpdateMap';

function SurvivorPositionUpdateForm(props: FormikProps<FormikValues>): React.ReactElement {
  const survivorPositionBoxWidth = useBreakpointValue({ base: '100%', md: '70%', lg: '60%' });
  const location = props.values as Location;

  return (
    <Form>
      <Flex direction={{ base: 'column' }} alignItems={'center'} gridGap={5}>
        <Box w={survivorPositionBoxWidth}>
          <FormControl>
            <FormLabel htmlFor='location'>{'Location'}</FormLabel>
            <Input
              id='location'
              type='text'
              readOnly={true}
              value={buildLocationString(location)}
            />
            <FormHelperText>{'Select your location on the map'}</FormHelperText>
          </FormControl>
        </Box>

        <Box w={survivorPositionBoxWidth}>
          <SurvivorPositionUpdateMap
            position={convertPosition(location)}
            setPosition={(position: LatLngLiteral) => props.setValues(convertLocation(position))}
          />
        </Box>

        <Box w={survivorPositionBoxWidth}>
          <Button type={'submit'} float={'right'}>
            {'Confirm'}
          </Button>
        </Box>
      </Flex>
    </Form>
  );
}

export default SurvivorPositionUpdateForm;
