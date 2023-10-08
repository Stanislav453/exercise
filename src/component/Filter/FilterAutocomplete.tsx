import { useDispatch, useSelector } from 'react-redux';
import Autocomplete from '@mui/material/Autocomplete';
import { searchByName, searchByTo } from '../../Redux/slices/filterSlice';
import { flightDataType } from '../../type';
import TextField from '@mui/material/TextField';
import { arrival } from '../../stringVariables';
import { departure } from '../../stringVariables';

export const FilterAutocomplete = () => {
  const data = useSelector(
    (state: flightDataType) => state.flyTicketFilter.data
  );

  const departureRender = [
    ...new Set(data.map((item: flightDataType) => item.from)),
  ];

  const arrivalRender = [
    ...new Set(data.map((item: flightDataType) => item.to)),
  ];

  const dispatch = useDispatch();

  return (
    <>
      <Autocomplete
        sx={{ flex: 1 }}
        freeSolo
        onInputChange={(e: any, newValue: string | null) =>
          dispatch(searchByName(newValue))
        }
        options={departureRender}
        renderInput={(params) => <TextField {...params} label={departure} />}
      />
      <Autocomplete
        sx={{ flex: 1 }}
        freeSolo
        disableClearable
        onInputChange={(e: any, newValue: string | null) =>
          dispatch(searchByTo(newValue))
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
