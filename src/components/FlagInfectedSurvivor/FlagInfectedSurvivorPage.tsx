import React, { useEffect } from 'react';
import { Formik, FormikHelpers, FormikProps, FormikValues } from 'formik';

import { useToast } from '@chakra-ui/react';

import { ReportedInfection } from '../../models/infection';
import { useFlagInfectedMutation } from '../../services';
import { buildSuccessToast } from '../../services/toastService';
import flagInfectedSurvivorSchema from '../../validators/flagInfectedSurvivorSchema';

import AppSection from '../AppSection';
import FlagInfectedSurvivorForm from './FlagInfectedSurvivorForm';

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
    <AppSection pageHeader={'Report Survivor'}>
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
    </AppSection>
  );
}

export default FlagInfectedSurvivorPage;
