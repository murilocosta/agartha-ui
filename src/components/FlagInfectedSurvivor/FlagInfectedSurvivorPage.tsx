import React, { useEffect } from 'react';
import { Formik, FormikHelpers, FormikProps, FormikValues } from 'formik';

import { Container, useToast } from '@chakra-ui/react';

import { ReportedInfection } from '../../models/infection';
import { useFlagInfectedMutation } from '../../services';
import flagInfectedSurvivorSchema from '../../validators/flagInfectedSurvivorSchema';

import AppPageHeader from '../AppPageHeader';
import AppErrorBox from '../AppError/AppErrorBox';
import FlagInfectedSurvivorForm from './FlagInfectedSurvivorForm';
import { buildSuccessToast } from '../../services/toastService';

const initialValues: ReportedInfection = {
  reported_id: 0,
  reportee_id: 0,
  annotation: '',
};

function FlagInfectedSurvivorPage(): React.ReactElement {
  const [flagInfected, { isSuccess }] = useFlagInfectedMutation();
  const toast = useToast();

  useEffect(() => {
    if (isSuccess) {
      toast(buildSuccessToast(
        'Survivor Flagged',
        'The survivor was flagged successfuly!'
      ));
    }
  }, [isSuccess, toast])

  return (
    <Container maxW='container.lg' marginBottom={5}>
      <AppErrorBox />
      <br />

      <AppPageHeader title={'Report survivor'} />

      <Formik
        initialValues={initialValues}
        validationSchema={flagInfectedSurvivorSchema}
        onSubmit={(values: ReportedInfection, actions: FormikHelpers<ReportedInfection>) => {
          actions.setSubmitting(true);
          flagInfected(values).finally(() => actions.setSubmitting(false));
        }}
      >
        {(formikProps: FormikProps<FormikValues>): React.ReactNode => (
          <FlagInfectedSurvivorForm {...formikProps} />
        )}
      </Formik>
    </Container>
  );
}

export default FlagInfectedSurvivorPage;
