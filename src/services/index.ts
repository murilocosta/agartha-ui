import { BaseQueryApi } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { setError } from '../features/errorHandler/errorHandlerSlice';
import { RootState } from '../features/store';
import { AuthCredentials, AuthResponse, AuthSignUp } from '../models/auth';
import { buildErrorMessage } from '../models/error';
import { ReportedInfection } from '../models/infection';
import { buildItemFilterQuery, ItemFilter, ItemRead } from '../models/item';
import { SurvivorLocationWrite } from '../models/location';
import { buildSurvivorFilterQuery, SurvivorFilter, SurvivorRead, SurvivorResponse } from '../models/survivor';

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
  if (response.error !== undefined && response.error.data !== undefined) {
    baseQueryAPI.dispatch(setError(response.error.data));
  } else if (response.error !== undefined) {
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

    registerSurvivor: builder.mutation<SurvivorResponse, Partial<AuthSignUp>>({
      query: (body: AuthSignUp): any => ({ url: 'register', method: 'POST', body }),
    }),

    loginSurvivor: builder.mutation<AuthResponse, Partial<AuthCredentials>>({
      query: (body: AuthCredentials): any => ({ url: 'login', method: 'POST', body }),
    }),

    fetchSurvivorProfile: builder.query<SurvivorRead, void>({
      query: () => 'survivors/profile',
    }),

    fetchSurvivorDetails: builder.query<SurvivorRead, number>({
      query: (survivorId: number) => `survivors/${survivorId}`,
    }),

    updateLocation: builder.mutation<SurvivorResponse, Partial<SurvivorLocationWrite>>({
      query: (payload: SurvivorLocationWrite): any => ({
        url: `survivors/${payload.survivor_id}`,
        method: 'PUT',
        body: payload.position,
      })
    }),

    fetchSurvivorList: builder.query<SurvivorRead[], SurvivorFilter>({
      query: (survivorFilter: SurvivorFilter) => 'survivors' + buildSurvivorFilterQuery(survivorFilter),
    }),

    flagInfected: builder.mutation<void, Partial<ReportedInfection>>({
      query: (body: ReportedInfection): any => ({
        url: 'survivors/report-infection',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useGetItemsQuery,
  useRegisterSurvivorMutation,
  useLoginSurvivorMutation,
  useFetchSurvivorProfileQuery,
  useFetchSurvivorDetailsQuery,
  useFetchSurvivorListQuery,
  useUpdateLocationMutation,
  useFlagInfectedMutation,
} = agarthaAPI;
