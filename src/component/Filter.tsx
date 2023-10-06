import { useDispatch, useSelector } from 'react-redux';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';
import { arrival, departure, select } from '../stringVariables';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { flightDataType } from '../type';
import { searchByName, searchByTo } from '../Redux/slices/filterSlice';

export const Filter = () => {
  const data = useSelector(
    (state: flightDataType) => state.flyTicketFilter.data
  );
  const dispatch = useDispatch();

  const departureRender = [
    ...new Set(data.map((item: flightDataType) => item.from)),
  ];
  const arrivalRender = [
    ...new Set(data.map((item: flightDataType) => item.to)),
  ];

  return (
    <Container
      sx={{ background: '#fff', p: '1rem !important', borderRadius: 1, mb: 10 }}
      maxWidth='lg'
    >
      <Stack
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={2}
        sx={{ width: '100%' }}
      >
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
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer
            sx={{ flexDirection: 'row', alignItems: 'center', gap: 2, p: 0 }}
            components={['DateTimePicker', 'DateTimePicker']}
          >
            <DateTimePicker label='Controlled picker' />
            <DateTimePicker
              label='Controlled picker'
              sx={{ margin: '0 !important' }}
              // value={value}
              // onChange={(newValue) => setValue(newValue)}
            />
          </DemoContainer>
        </LocalizationProvider>
        <Button variant='contained' endIcon={<SearchIcon />}>
          {select}
        </Button>
      </Stack>
    </Container>
  );
};
