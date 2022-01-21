import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";

export enum SortType {
  ASCENDENT = 'asc',
  DESCENDENT = 'desc',
}

export type ReduxResponseSuccess<T> = { data: T };

export type ReduxResponseError = { error: FetchBaseQueryError | SerializedError };

export type ReduxResponse<T> = ReduxResponseSuccess<T> | ReduxResponseError;

export function isResponseError<T>(response: ReduxResponse<T>): boolean {
  return 'error' in response;
}

export function getResponseError<T>(response: ReduxResponse<T>): FetchBaseQueryError | SerializedError | undefined {
  if ('error' in response) {
    return response.error;
  }

  return undefined;
}

export function getResponsePayload<T>(response: ReduxResponse<T>): T | undefined {
  if ('data' in response) {
    return response.data;
  }

  return undefined;
}
