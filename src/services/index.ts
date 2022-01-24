import { BaseQueryApi } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { setCredentials } from '../features/auth/authSlice';
import { setError } from '../features/errorHandler/errorHandlerSlice';
import { RootState } from '../features/store';
import { setProfile } from '../features/survivor/survivorSlice';
import { AuthCredentials, AuthResponse, AuthSignUp } from '../models/auth';
import { buildErrorMessage, ErrorMessage } from '../models/error';
import { ReportedInfection } from '../models/infection';
import { InventoryRead } from '../models/inventory';
import { buildItemFilterQuery, ItemFilter, ItemRead } from '../models/item';
import { SurvivorLocationWrite } from '../models/location';
import {
  buildSurvivorFilterQuery,
  SurvivorFilter,
  SurvivorRead,
  SurvivorResponse
} from '../models/survivor';
import { TradeRead, TradeWrite } from '../models/trade';

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

  if (response.error?.data !== undefined) {
    if ((response.error.data as ErrorMessage).errorType.match(/^AG(B|V)/)) {
      baseQueryAPI.dispatch(setError(response.error.data));
    }

    if (response.error.status === 401) {
      baseQueryAPI.dispatch(setCredentials(undefined));
      baseQueryAPI.dispatch(setProfile(undefined));
    }

    return response;
  }

  if (response.error !== undefined) {
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

    fetchSurvivorInventory: builder.query<InventoryRead, number>({
      queryFn: (
        survivorId: number,
        api: BaseQueryApi,
        extraOptions,
        baseQuery
      ): any => {
        if (!!survivorId) {
          return baseQuery(`survivors/${survivorId}/items`);
        }

        return { error: { status: 'FETCH_ERROR', error: 'Could not fetch inventory' } };
      }
    }),

    tradeItems: builder.mutation<TradeRead, Partial<TradeWrite>>({
      query: (body: TradeWrite): any => ({
        url: '/trades',
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
  useFetchSurvivorInventoryQuery,
  useTradeItemsMutation,
} = agarthaAPI;
