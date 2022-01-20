import React from 'react';
import {
  Field,
  Form,
  FormikProps,
  FormikValues
} from 'formik';

import {
  Button,
  FormControl,
  FormLabel,
  Input,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalHeader
} from '@chakra-ui/react';

function SurvivorLoginForm(props: FormikProps<FormikValues>): React.ReactElement {
  return (
    <Form>
      <ModalHeader>{'Login into your account'}</ModalHeader>

      <ModalCloseButton />

      <ModalBody paddingBottom={6}>
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

        <FormControl marginTop={4}>
          <FormLabel htmlFor='password'>{'Password'}</FormLabel>
          <Field
            id='password'
            name='password'
            type='password'
            as={Input}
            isInvalid={props.errors.password && props.touched.password}
          />
        </FormControl>
      </ModalBody>

      <ModalFooter>
        <Button type='submit' isLoading={props.isSubmitting}>{'Submit'}</Button>
      </ModalFooter>
    </Form>
  );
}

export default SurvivorLoginForm;
