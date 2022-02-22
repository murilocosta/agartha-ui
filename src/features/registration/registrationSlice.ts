import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SurvivorSelectedItem, SurvivorSelectedItems } from '../../models/survivor';
import { RootState } from '../store';

export const MAX_PRICE_ALLOWED = 100;

interface RegistrationState {
  selectedItems: SurvivorSelectedItems;
}

const initialState: RegistrationState = {
  selectedItems: {}
}

export const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    setSelectedItem: (state: RegistrationState, action: PayloadAction<SurvivorSelectedItem>) => {
      const { id, price, quantity } = action.payload;
      state.selectedItems[id] = price * quantity;
    },

    resetSelectedItems: (state: RegistrationState, action: PayloadAction<void>) => {
      state.selectedItems = {};
    },
  },
});

export const { setSelectedItem, resetSelectedItems } = registrationSlice.actions;

export const selectCurrentPrice = (state: RootState): number => {
  return Object.values(state.registration.selectedItems).reduce((sum, c) => sum += c, 0)
};

export default registrationSlice.reducer;
