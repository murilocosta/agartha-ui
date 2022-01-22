import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Formik,
  FormikHelpers,
  FormikProps,
  FormikValues
} from 'formik';

import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure
} from '@chakra-ui/react';

import { useAppDispatch } from '../../features/hooks';
import { setCredentials } from '../../features/auth/authSlice';
import { AuthCredentials } from '../../models/auth';
import { useLoginSurvivorMutation } from '../../services';
import survivorLoginSchema from '../../validators/survivorLoginSchema';

import SurvivorLoginForm from './SurvivorLoginForm';

const initialValues: AuthCredentials = {
  username: '',
  password: '',
}

function SurvivorLoginPage(): React.ReactElement {
  const [loginSurvivor, { isSuccess, data }] = useLoginSurvivorMutation();
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const closeAndRedirectToHome = useCallback(() => {
    onClose();
    navigate('/', { replace: true });
  }, [onClose, navigate]);

  const closeAndRedirectToLastURL = useCallback(() => {
    onClose();
    navigate(-1);
  }, [onClose, navigate]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(setCredentials(data));
      closeAndRedirectToLastURL();
    }
  }, [
    isSuccess,
    dispatch,
    data,
    closeAndRedirectToLastURL]
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={closeAndRedirectToHome}
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
