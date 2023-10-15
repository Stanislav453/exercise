import { createSlice } from '@reduxjs/toolkit';

export interface confirmationState {
  confiData: string[];
}

const initialState: confirmationState = {
  confiData: []
};

export const confirmationSlice = createSlice({
  name: 'confirmation',
  initialState,
  reducers: {
    addConfiData: (state,action) => {
        state.confiData = action.payload
    }

  },
});

export const { addConfiData } = confirmationSlice.actions;

export default confirmationSlice.reducer;
