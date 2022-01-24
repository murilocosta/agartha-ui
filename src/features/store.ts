import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { agarthaAPI } from '../services';
import errorHandlerReducer from './errorHandler/errorHandlerSlice';
import authReducer from './auth/authSlice';
import survivorReducer from './survivor/survivorSlice';
import tradeReducer from './trade/tradeSlice';

const store = configureStore({
  reducer: {
    [agarthaAPI.reducerPath]: agarthaAPI.reducer,
    errorHandler: errorHandlerReducer,
    auth: authReducer,
    survivor: survivorReducer,
    trade: tradeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(agarthaAPI.middleware),
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;