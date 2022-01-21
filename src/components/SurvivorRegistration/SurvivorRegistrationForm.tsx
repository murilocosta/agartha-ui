import React from 'react';
import { getIn, Field, FormikProps, FormikValues } from 'formik';

import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

import { GENDER_LIST } from '../../constants/genderList';
import { buildLocationString } from '../../models/location';
import { SurvivorGender } from '../../models/survivor';

function SurvivorRegistrationForm(props: FormikProps<FormikValues>): React.ReactElement {
  const [showPassword, setShowPassword] = React.useState(false)

  return (
    <>
      <FormControl>
        <FormLabel htmlFor='username'>{'System User Name'}</FormLabel>
        <Field
          id='username'
          name='username'
          type='text'
          as={Input}
          isInvalid={props.errors.username && props.touched.username}
        />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor='password'>{'Password'}</FormLabel>
        <InputGroup>
          <Field
            id='password'
            name='password'
            type={showPassword ? 'text' : 'password'}
            as={Input}
            isInvalid={props.errors.password && props.touched.password}
          />
          <InputRightElement>
            <Button size='sm' variant='ghost' onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <ViewIcon /> : <ViewOffIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl>
        <FormLabel htmlFor='name'>{'Survivor Name'}</FormLabel>
        <Field
          id='name'
          name='survivor.name'
          type='text'
          as={Input}
          isInvalid={getIn(props.errors, 'survivor.name') && getIn(props.touched, 'survivor.name')}
        />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor='age'>{'Age'}</FormLabel>

        <NumberInput
          id='age'
          min={0}
          max={120}
          isInvalid={getIn(props.errors, 'survivor.age') && getIn(props.touched, 'survivor.age')}
          value={getIn(props.values, 'survivor.age') || 0}
          onChange={(_, valueAsNumber: number) => props.setFieldValue('survivor.age', valueAsNumber)}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>

      <FormControl>
        <FormLabel htmlFor='gender'>{'Gender'}</FormLabel>
        <Field
          id='gender'
          name='survivor.gender'
          placeholder={'Select a gender'}
          as={Select}
          isInvalid={getIn(props.errors, 'survivor.gender') && getIn(props.touched, 'survivor.gender')}
        >
          {GENDER_LIST.map((gender: SurvivorGender, index: number) =>
            <option key={index} value={gender}>{gender}</option>
          )}
        </Field>
      </FormControl>

      <FormControl>
        <FormLabel htmlFor='location'>{'Location'}</FormLabel>
        <Input
          id='location'
          type='text'
          readOnly={true}
          value={buildLocationString(props.values?.survivor?.position)}
        />
        <FormHelperText>{'Select your location on the map'}</FormHelperText>
      </FormControl>
    </>
  );
}

export default SurvivorRegistrationForm;
