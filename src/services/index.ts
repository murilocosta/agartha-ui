import { BaseQueryApi } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { setError } from '../features/errorHandler/errorHandlerSlice';
import { RootState } from '../features/store';
import { AuthCredentials, AuthResponse, AuthSignUp } from '../models/auth';
import { buildErrorMessage } from '../models/error';
import { buildItemFilterQuery, ItemFilter, ItemRead } from '../models/item';
import { SurvivorRead, SurvivorWrite } from '../models/survivor';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:8080/api/',
  prepareHeaders: (headers, { getState }) => {
    const credentials = (getState() as RootState).auth?.credentials;

    if (credentials && credentials.access_token) {
      headers.set('Authorization', `Bearer ${credentials.access_token}`);
    }

    return headers;
  }
});

const appBaseQuery = async (
  args: string,
  baseQueryAPI: BaseQueryApi,
  extraOptions: any
) => {
  const response = await baseQuery(args, baseQueryAPI, extraOptions);
  if (response.error && response.error.data) {
    baseQueryAPI.dispatch(setError(response.error.data));
  } else if (response.error) {
    baseQueryAPI.dispatch(setError(buildErrorMessage('Could not send request to server')));
  }
  return response;
}

export const agarthaAPI = createApi({
  reducerPath: 'agarthaAPI',
  baseQuery: appBaseQuery,
  endpoints: (builder) => ({
    getItems: builder.query<ItemRead[], ItemFilter | null>({
      query: (filter: ItemFilter) => 'items' + buildItemFilterQuery(filter),
    }),

    registerSurvivor: builder.mutation<SurvivorWrite, Partial<AuthSignUp>>({
      query(body: AuthSignUp): any {
        return { url: 'register', method: 'POST', body };
      },
    }),

    loginSurvivor: builder.mutation<AuthResponse, Partial<AuthCredentials>>({
      query(body: AuthCredentials): any {
        return { url: 'login', method: 'POST', body };
      }
    }),

    fetchSurvivorProfile: builder.query<SurvivorRead, void>({
      query: () => 'survivors/profile',
    }),

    fetchSurvivorDetails: builder.query<SurvivorRead, number>({
      query: (survivorId: number) => `survivors/${survivorId}`,
    }),
  }),
});

export const {
  useGetItemsQuery,
  useRegisterSurvivorMutation,
  useLoginSurvivorMutation,
  useFetchSurvivorProfileQuery,
  useLazyFetchSurvivorDetailsQuery,
} = agarthaAPI;