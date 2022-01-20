import React, { useEffect } from 'react';
import { Formik, FormikProps, FormikValues } from 'formik';

import { Container, useToast } from '@chakra-ui/react';

import { LEAFLET_DEFAULTS } from '../constants/leafletDefaults';
import { AuthSignUp } from '../models/auth';
import authSignUpSchema from '../validators/survivorRegistrationSchema';
import SurvivorRegistrationContainer from './SurvivorRegistrationContainer';
import { useRegisterSurvivorMutation } from '../services';

const initialValues: AuthSignUp = {
  username: '',
  password: '',
  survivor: {
    name: '',
    age: 0,
    gender: '',
    position: {
      latitude: LEAFLET_DEFAULTS.position.lat,
      longitude: LEAFLET_DEFAULTS.position.lng,
      timezone: 'UTC'
    },
    inventory: [],
  }
};

function SurvivorRegistrationPage(): React.ReactElement {
  const [registerSurvivor, { isSuccess }] = useRegisterSurvivorMutation();
  const createToast = useToast();

  useEffect(() => {
    if (isSuccess) {
      createToast({
        title: 'Survivor Registered',
        description: "The survivor account was successfully created!",
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    }
  }, [isSuccess, createToast])


  return (
    <Container maxW='container.xl'>
      <Formik
        initialValues={initialValues}
        validationSchema={authSignUpSchema}
        onSubmit={(values, actions) => {
          actions.setSubmitting(true);
          values.survivor.inventory = values.survivor.inventory.filter((item) => !!item);
          registerSurvivor(values).finally(() => {
            actions.setSubmitting(false);
            actions.resetForm();
          });
        }}
      >
        {(formikProps: FormikProps<FormikValues>): React.ReactNode => (
          <SurvivorRegistrationContainer {...formikProps} />
        )}
      </Formik>
    </Container>
  );
}

export default SurvivorRegistrationPage;
