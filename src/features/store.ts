import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { agarthaAPI } from '../services';
import errorHandlerReducer from './errorHandler/errorHandlerSlice';

const store = configureStore({
  reducer: {
    [agarthaAPI.reducerPath]: agarthaAPI.reducer,
    errorHandler: errorHandlerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(agarthaAPI.middleware),
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;