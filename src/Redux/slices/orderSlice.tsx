import { createSlice } from '@reduxjs/toolkit';
import { CounterState } from '../../type';

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
  seatsPrice: 0,
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

    addSeatsPrice: ( state, action ) => {
      state.seatsPrice = action.payload;
    }
  },
});

export const {
  addOrderTicketData,
  actualSeatsCount,
  actualSelectedSeats,
  addSeatsPrice,
} = orderSlice.actions;

export default orderSlice.reducer;
