export interface ErrorDetail {
  name: string;
  reason: string;
}

export interface ErrorMessage {
  errorType: string;
  detail: string;
  status: number;
  errors?: ErrorDetail[];
}

export function buildErrorMessage(customMessage: string): ErrorMessage {
  return { errorType: 'AGF-000', detail: customMessage || 'Unknown Error', status: 500 };
}
