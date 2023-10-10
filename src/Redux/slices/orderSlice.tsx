import { createSlice } from '@reduxjs/toolkit';
import { orderTicketType } from '../../type';

interface CounterState {
  orderTicket: orderTicketType[];
  seatsCount: number | null;
  selectedSeats: string[] | null;
}

export const initialState: CounterState = {
  orderTicket: [
    {
      from: '',
      to: '',
      price: '',
      departure: '',
      arrival: '',
      duration: '',
      seats: [],
    },
  ],
  seatsCount: 0,
  selectedSeats: [],
};

export const orderSlice = createSlice({
  name: 'order-data',
  initialState,
  reducers: {
    addOrderTicketData: (state, action) => {
      return {
        orderTicket: {
          ...state.orderTicket,
          from: action.payload.from,
          to: action.payload.to,
          price: action.payload.price,
          departure: action.payload.departure,
          arrival: action.payload.arrival,
          duration: action.payload.duration,
          seats: action.payload.seats,
        },
      };
    },

    actualSeatsCount: (state, action) => {
      state.seatsCount = action.payload;
    },

    actualSelectedSeats: (state, action) => {
      state.selectedSeats = action.payload;
    },
  },
});

export const { addOrderTicketData, actualSeatsCount, actualSelectedSeats } =
  orderSlice.actions;

export default orderSlice.reducer;
