import { useSelector } from 'react-redux';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { arrival } from '../../stringVariables';
import { departure } from '../../stringVariables';
import { flightDataType } from '../../type';

export const FilterAutocomplete = ({ setInputData }: any) => {
  const data = useSelector((state: any) => state.flyTicketFilter.data);

  const departureRender = [
    ...new Set(data.map((item: flightDataType) => item.from)),
  ];

  const arrivalRender = [
    ...new Set(data.map((item: flightDataType) => item.to)),
  ];

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
        renderInput={(params) => (
          <TextField
            sx={{ textTransform: 'capitalize' }}
            {...params}
            label={departure}
          />
        )}
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
            sx={{ textTransform: 'capitalize' }}
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
