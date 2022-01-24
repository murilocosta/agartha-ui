import React, { useEffect } from 'react';
import { Formik, FormikHelpers, FormikProps, FormikValues } from 'formik';

import { useToast } from '@chakra-ui/react';

import { Location } from '../../models/location';
import { useUpdateLocationMutation } from '../../services';
import { buildSuccessToast } from '../../services/toastService';
import survivorPositionSchema from '../../validators/survivorPositionSchema';

import AppSection from '../AppSection';
import SurvivorPositionUpdateForm from './SurvivorPositionUpdateForm';
import SurvivorPositionUpdateFormFallback from './SurvivorPositionUpdateFormFallback';

import { useAppSelector } from '../../features/hooks';
import { selectProfile } from '../../features/survivor/survivorSlice';

const initialValues: Location = {
  latitude: 0,
  longitude: 0,
  timezone: 'UTC',
};

function SurvivorPositionUpdatePage(): React.ReactElement {
  const [updateLocation, { isSuccess }] = useUpdateLocationMutation();
  const survivorProfile = useAppSelector(selectProfile);
  const toast = useToast();

  useEffect(() => {
    if (isSuccess) {
      toast(buildSuccessToast(
        'New location saved',
        "Updated the survivor's location"
      ));
    }
  }, [isSuccess, toast]);

  return (
    <AppSection pageHeader={'Change Location'}>
      {survivorProfile !== undefined ? (
        <Formik
          initialValues={survivorProfile?.position || initialValues}
          validationSchema={survivorPositionSchema}
          onSubmit={(values: Location, actions: FormikHelpers<Location>) => {
            actions.setSubmitting(true);
            const payload = { survivor_id: survivorProfile?.id, position: values };
            updateLocation(payload).finally(() => actions.setSubmitting(false));
          }}
        >
          {(formikProps: FormikProps<FormikValues>): React.ReactNode => (
            <SurvivorPositionUpdateForm {...formikProps} />
          )}
        </Formik>
      ) : (
        <SurvivorPositionUpdateFormFallback />
      )}
    </AppSection>
  );
}

export default SurvivorPositionUpdatePage;
