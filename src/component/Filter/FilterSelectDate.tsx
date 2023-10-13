import * as React from 'react';
import { Stack } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { ARRIVAL, DEPARTURE } from '../../stringVariables';

export const FilterSelectState = ({ setInputData, inputData }: any) => {
  const [age, setAge] = React.useState('');

  const dateDeparture = useSelector(
    (state) => state.flyTicketFilter.filterData
  );

  return (
    <Stack direction='row' spacing={2}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>{DEPARTURE}</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          //   value={age}
          label={DEPARTURE}
        >
          {dateDeparture.map((item, key) => {
            return (
              <MenuItem
                value={item}
                onClick={() => {
                  setInputData((state) => {
                    return { ...state, departure: item.departure };
                  });
                }}
              >
                {item.departure}
              </MenuItem>
            );
          })}
          {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>{ARRIVAL}</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          // value={person}
          label={ARRIVAL}
        >
          {dateDeparture.map((item, key) => {
            return (
              <MenuItem
                value={item}
                onClick={() => {
                  setInputData((state) => {
                    return { ...state, arrival: item.arrival };
                  });
                }}
              >
                {item.arrival}
              </MenuItem>
            );
          })}
          {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
    </Stack>
  );
};
