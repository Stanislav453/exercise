import { Stack } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { ARRIVAL, DEPARTURE } from '../../stringVariables';

export const FilterSelectState = ({ setInputData, inputData }: any) => {
  const dateDeparture = useSelector(
    (state) => state.flyTicketFilter.filterData
  );

  return (
    <Stack direction='row' spacing={2}>
      <FormControl fullWidth>
        <InputLabel sx={{ textTransform: 'capitalize' }}>
          {DEPARTURE}
        </InputLabel>
        <Select label={DEPARTURE}>
          {dateDeparture.map((item: string, key: number) => {
            return (
              <MenuItem
                key={key}
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
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel sx={{ textTransform: 'capitalize' }}>{ARRIVAL}</InputLabel>
        <Select label={ARRIVAL}>
          {dateDeparture.map((item: string) => {
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
        </Select>
      </FormControl>
    </Stack>
  );
};
