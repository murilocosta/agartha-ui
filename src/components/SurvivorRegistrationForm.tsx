import React from 'react';

import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select
} from '@chakra-ui/react';

import { GENDER_LIST } from '../constants/genderList';
import { SurvivorGender } from '../models/survivor';

function SurvivorRegistrationForm(): React.ReactElement {
  return (
    <>
      <FormControl>
        <FormLabel htmlFor='name'>{'Name'}</FormLabel>
        <Input id='name' type='text' />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor='age'>{'Age'}</FormLabel>
        <NumberInput id='age' min={0} max={120}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>

      <FormControl>
        <FormLabel htmlFor='gender'>{'Gender'}</FormLabel>
        <Select id='gender' placeholder={'Select a gender'}>
          {GENDER_LIST.map((gender: SurvivorGender, index: number) =>
            <option key={index} value={gender}>{gender}</option>
          )}
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel htmlFor='location'>{'Location'}</FormLabel>
        <Input id='location' type='text' readOnly={true} placeholder={'Unknown location'} />
        <FormHelperText>{'Select your location on the map'}</FormHelperText>
      </FormControl>
    </>
  );
}

export default SurvivorRegistrationForm;
