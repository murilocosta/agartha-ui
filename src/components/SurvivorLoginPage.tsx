import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, FormikHelpers, FormikProps, FormikValues } from 'formik';

import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  useToast
} from '@chakra-ui/react';

import { AuthCredentials } from '../models/auth';
import { useAppDispatch } from '../features/hooks';
import { setCredentials } from '../features/auth/authSlice';
import { useLoginSurvivorMutation } from '../services';
import { buildErrorToast } from '../services/toastService';
import survivorLoginSchema from '../validators/survivorLoginSchema';
import SurvivorLoginForm from './SurvivorLoginForm';

const initialValues: AuthCredentials = {
  username: '',
  password: '',
}

function SurvivorLoginPage(): React.ReactElement {
  const [loginSurvivor, { isSuccess, isError, data }] = useLoginSurvivorMutation();
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const closeAndRedirect = useCallback(() => {
    onClose();
    navigate('/', { replace: true });
  }, [onClose, navigate]);

  useEffect(() => {
    if (isError) {
      toast(buildErrorToast(
        'Login has failed',
        'Incorrect system user name or password'
      ));
    }

    if (isSuccess) {
      dispatch(setCredentials(data));
      closeAndRedirect();
    }
  }, [isError, isSuccess, toast, dispatch, data, closeAndRedirect]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={closeAndRedirect}
    >
      <ModalOverlay />

      <ModalContent>
        <Formik
          initialValues={initialValues}
          validationSchema={survivorLoginSchema}
          onSubmit={(values: AuthCredentials, actions: FormikHelpers<AuthCredentials>) => {
            actions.setSubmitting(true);
            loginSurvivor(values).finally(() => actions.setSubmitting(false));
          }}
        >
          {(formikProps: FormikProps<FormikValues>): React.ReactNode => (
            <SurvivorLoginForm {...formikProps} />
          )}
        </Formik>
      </ModalContent>
    </Modal>
  );
}

export default SurvivorLoginPage;
