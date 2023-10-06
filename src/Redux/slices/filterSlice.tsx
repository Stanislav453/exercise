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
    searchByName: (state, action) => {
      const filterData = state.filterData.filter((data) => {
        return data.from.toLowerCase().includes(action.payload.toLowerCase());
      });
      return {
        ...state,
        filterData: action.payload.length > 0 ? filterData : [...state.data],
      };
    },
    searchByTo: (state, action) => {
      const filterData = state.filterData.filter((data) => {
        return data.to.toLowerCase().includes(action.payload.toLowerCase());
      });
      return {
        ...state,
        filterData: action.payload.length > 0 ? filterData : [...state.data],
  
      };
    },
    searchByDeparture: (state, action) => {
      const filterData = state.filterData.filter((data) => {
        return data.departure
          .toLowerCase()
          .includes(action.payload.toLowerCase());
      });
      return {
        ...state,
        filterData: action.payload.length > 0 ? filterData : [...state.data],
      };
    },
    searchByArrival: (state, action) => {
      const filterData = state.filterData.filter((data) => {
        return data.arrival
          .toLowerCase()
          .includes(action.payload.toLowerCase());
      });
      return {
        ...state,
        filterData: action.payload.length > 0 ? filterData : [...state.data],
      };
    },
  },
});

export const { searchByName, searchByTo } = filterSlice.actions;

export default filterSlice.reducer;
