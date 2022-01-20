import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, FormikHelpers, FormikProps, FormikValues } from 'formik';

import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  useToast
} from '@chakra-ui/react';

import { AuthCredentials, AuthResponse } from '../models/auth';
import { getResponsePayload, isResponseError, ReduxResponse } from '../models/shared';
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
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  const navigate = useNavigate();
  const toast = useToast();
  const [loginSurvivor] = useLoginSurvivorMutation();
  const dispatch = useAppDispatch();

  const closeAndRedirect = () => {
    onClose();
    navigate('/', { replace: true });
  }

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
            loginSurvivor(values)
              .then((response: ReduxResponse<AuthResponse>) => {
                actions.setSubmitting(false);

                if (isResponseError(response)) {
                  toast(buildErrorToast(
                    'Login has failed',
                    'Incorrect system user name or password'
                  ))
                } else {
                  actions.resetForm();
                  dispatch(setCredentials(getResponsePayload(response)));
                  closeAndRedirect();
                }
              });
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
