import { createSlice } from '@reduxjs/toolkit';
import data from '../../../flightsData.json';
import { flightDataType } from '../../type';

export interface filterState {
  data: flightDataType[];
  filterData: flightDataType[];
}

const initialState: filterState = {
  data: data,
  filterData: data,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    searchByValue: (state, action) => {
      const dataForFilter = [...state.data];
      const filterData = dataForFilter.filter((data) => {
        const filterDataFrom = data.from
          .toLowerCase()
          .includes(action.payload.from.toLowerCase());
        const filterDataTo = data.to
          .toLowerCase()
          .includes(action.payload.to.toLowerCase());
        const filterDataDeparture = data.departure.includes(
          action.payload.departure
        );
        const filterDataArrival = data.arrival.includes(action.payload.arrival);
        const filterDataSeats = data.seats.filter( (item) => item.available.lentgth >= action.payload.seats )
        // const filterDataSeatsTrue = data.seats.filter( (value) => (value === true).length >= action.payload.seats )
        // const filterDataSeats = filterDataSeatsTrue.length >= action.payload.seats
        return (
          filterDataFrom &&
          filterDataTo &&
          filterDataDeparture &&
          filterDataArrival &&
          filterDataSeats
          // filterDataSeats
        );
      });
      return {
        ...state,
        filterData: filterData,
      };
    },
  },
});

export const { searchByValue } = filterSlice.actions;

export default filterSlice.reducer;
