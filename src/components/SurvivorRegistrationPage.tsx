import React, { useEffect } from 'react';
import { Formik, FormikHelpers, FormikProps, FormikValues } from 'formik';

import { Container, useToast } from '@chakra-ui/react';

import { LEAFLET_DEFAULTS } from '../constants/leafletDefaults';
import { AuthSignUp } from '../models/auth';
import authSignUpSchema from '../validators/survivorRegistrationSchema';
import SurvivorRegistrationContainer from './SurvivorRegistrationContainer';
import { useRegisterSurvivorMutation } from '../services';
import { buildSuccessToast } from '../services/toastService';

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
  const toast = useToast();

  useEffect(() => {
    if (isSuccess) {
      toast(buildSuccessToast(
        'Survivor Registered',
        'The survivor account was successfully created!'
      ));
    }
  }, [isSuccess, toast])


  return (
    <Container maxW='container.xl'>
      <Formik
        initialValues={initialValues}
        validationSchema={authSignUpSchema}
        onSubmit={(values: AuthSignUp, actions: FormikHelpers<AuthSignUp>) => {
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
