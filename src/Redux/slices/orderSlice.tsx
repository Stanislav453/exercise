import { createSlice } from '@reduxjs/toolkit';

type orderTicketType = {
  from: string;
  to: string;
  price: string;
  departure: string;
  arrival: string;
  duration: string;
  seats: [];
};

interface CounterState {
  orderTicket: orderTicketType[];
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
};

export const orderSlice = createSlice({
  name: 'order-data',
  initialState,
  reducers: {
    addOrderTicketData: (state, action) => {
      return {
        // ...state,
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
  },
});

export const { addOrderTicketData } = orderSlice.actions;

export default orderSlice.reducer;
