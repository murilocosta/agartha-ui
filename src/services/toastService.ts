import { UseToastOptions } from "@chakra-ui/react"

export enum ToastStatus {
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error'
};

export function buildSuccessToast(title: string, description: string): UseToastOptions {
  return {
    title,
    description,
    status: ToastStatus.SUCCESS,
    duration: 3000,
    isClosable: true,
  }
}

export function buildErrorToast(title: string, description: string): UseToastOptions {
  return {
    title,
    description,
    status: ToastStatus.ERROR,
    duration: 3000,
    isClosable: true,
  }
}
