import { useDispatch, useSelector } from 'react-redux';
import Autocomplete from '@mui/material/Autocomplete';
import { searchByValue } from '../../Redux/slices/filterSlice';
import { flightDataType } from '../../type';
import TextField from '@mui/material/TextField';
import { arrival } from '../../stringVariables';
import { departure } from '../../stringVariables';
import { useEffect, useState } from 'react';

export const FilterAutocomplete = ({ setInputData }: any) => {
  const dispatch = useDispatch();

  const data = useSelector(
    (state: flightDataType) => state.flyTicketFilter.data
  );

  const departureRender = [
    ...new Set(data.map((item: flightDataType) => item.from)),
  ];

  const arrivalRender = [
    ...new Set(data.map((item: flightDataType) => item.to)),
  ];

  // useEffect(() => {
  //   dispatch(searchByValue({ from: inputValue, to: '' }));
  //   dispatch(searchByValue({ from: '', to: secondInputValue }));
  // }, [inputValue, secondInputValue]);

  return (
    <>
      <Autocomplete
        sx={{ flex: 1 }}
        freeSolo
        onInputChange={(e: any, newValue: any) =>
          setInputData((state) => {
            return { ...state, from: newValue };
          })
        }
        options={departureRender}
        renderInput={(params) => <TextField {...params} label={departure} />}
      />
      <Autocomplete
        sx={{ flex: 1 }}
        freeSolo
        disableClearable
        onInputChange={(e: any, newValue: any) =>
          setInputData((state) => {
            return { ...state, to: newValue };
          })
        }
        options={arrivalRender}
        renderInput={(params) => (
          <TextField
            {...params}
            label={arrival}
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    </>
  );
};
