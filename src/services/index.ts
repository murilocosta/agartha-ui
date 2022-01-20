import { BaseQueryApi } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { setError } from '../features/errorHandler/errorHandlerSlice';
import { AuthSignUp } from '../models/auth';
import { buildErrorMessage } from '../models/error';
import { buildItemFilterQuery, ItemFilter, ItemRead } from '../models/item';

const baseQuery = fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/' });

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

    registerSurvivor: builder.mutation<AuthSignUp, Partial<AuthSignUp>>({
      query(body: AuthSignUp): any {
        return { url: 'register', method: 'POST', body };
      },
    }),
  }),
});

export const { useGetItemsQuery, useRegisterSurvivorMutation } = agarthaAPI;
