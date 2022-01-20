import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SurvivorRead } from '../../models/survivor';

import { RootState } from '../store';

interface SurvivorState {
  profile?: SurvivorRead;
}

const initialState: SurvivorState = {
  profile: undefined,
}

export const survivorSlice = createSlice({
  name: 'survivor',
  initialState,
  reducers: {
    setProfile: (state: SurvivorState, action: PayloadAction<SurvivorRead | undefined>) => {
      state.profile = action.payload;
    },
  },
});

export const { setProfile } = survivorSlice.actions;

export const selectProfile = (state: RootState): SurvivorRead | undefined => state.survivor.profile;

export default survivorSlice.reducer;
