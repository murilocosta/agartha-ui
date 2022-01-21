import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, FormikHelpers, FormikProps, FormikValues } from 'formik';

import { Container, Divider, Heading, useToast } from '@chakra-ui/react';

import { Location } from '../models/location';
import { useFetchSurvivorProfileQuery, useUpdateLocationMutation } from '../services';
import { buildSuccessToast } from '../services/toastService';
import survivorPositionSchema from '../validators/survivorPositionSchema';
import SurvivorPositionUpdateForm from './SurvivorPositionUpdateForm';
import SurvivorPositionUpdateFormFallback from './SurvivorPositionUpdateFormFallback';

const initialValues: Location = {
  latitude: 0,
  longitude: 0,
  timezone: 'UTC',
};

function SurvivorPositionUpdatePage(): React.ReactElement {
  const { data, isLoading, isError } = useFetchSurvivorProfileQuery();
  const [updateLocation, { isSuccess }] = useUpdateLocationMutation();
  const navigate = useNavigate()
  const toast = useToast();

  const redirectToLogin = useCallback(() => {
    navigate('/login', { replace: false })
  }, [navigate]);

  useEffect(() => {
    if (isSuccess) {
      toast(buildSuccessToast(
        'New location saved',
        "Updated the survivor's location"
      ));
    }

    if (isError) {
      redirectToLogin();
    }
  }, [isSuccess, isError, toast, redirectToLogin]);

  return (
    <Container maxW='container.lg'>
      <Heading>{'Change Location'}</Heading>

      <Divider marginTop={5} marginBottom={5} />

      <Formik
        initialValues={data?.position || initialValues}
        validationSchema={survivorPositionSchema}
        onSubmit={(values: Location, actions: FormikHelpers<Location>) => {
          actions.setSubmitting(true);
          const payload = { survivor_id: data?.id, position: values };
          updateLocation(payload).finally(() => actions.setSubmitting(false));
        }}
      >
        {(formikProps: FormikProps<FormikValues>): React.ReactNode => isLoading ? (
          <SurvivorPositionUpdateFormFallback />
        ) : (
          <SurvivorPositionUpdateForm {...formikProps} />
        )}
      </Formik>
    </Container>
  );
}

export default SurvivorPositionUpdatePage;
