import React from 'react';
import { Formik, FormikProps, FormikValues } from 'formik';

import { Container } from '@chakra-ui/react';

import survivorRegistrationSchema from '../validators/survivorRegistrationSchema';
import SurvivorRegistrationContainer from './SurvivorRegistrationContainer';

function SurvivorRegistrationPage(): React.ReactElement {
  return (
    <Container maxW='container.xl'>
      <Formik
        initialValues={{}}
        validationSchema={survivorRegistrationSchema}
        onSubmit={(values, actions) => {
          console.log('Submitted', { values });
          actions.setSubmitting(false);
        }}
      >
        {(formikProps: FormikProps<FormikValues>): React.ReactNode => (
          <SurvivorRegistrationContainer formEvents={formikProps} />
        )}
      </Formik>
    </Container>
  );
}

export default SurvivorRegistrationPage;
