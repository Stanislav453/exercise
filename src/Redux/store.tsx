import { configureStore } from '@reduxjs/toolkit';
import filterSliceReducer from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    flyTicketFilter: filterSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
