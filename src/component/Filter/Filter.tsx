import Stack from '@mui/material/Stack';
import { Container, Box } from '@mui/material';
import { FilterAutocomplete } from './FilterAutocomplete';
import { FilterButton } from './FilterButton';
import { useEffect, useState } from 'react';
import { FilterSelectState } from './FilterSelectDate';
import { FilterPersonCount } from './FilterPersonCount';
import { searchByValue } from '../../Redux/slices/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();

  const [inputData, setInputData] = useState({
    from: '',
    to: '',
    departure: '',
    arrival: '',
    person: 0,
  });

  useEffect(() => {
    dispatch(
      searchByValue({
        from: inputData.from,
        to: inputData.to,
        departure: inputData.departure,
        arrival: inputData.arrival,
        seats: inputData.person,
      })
    );
  }, [
    inputData.from,
    inputData.to,
    inputData.departure,
    inputData.arrival,
    inputData.person

  ]);

  // const someData = useSelector((state) => state.flyTicketFilter.fi );

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
        <Box flex={4} sx={{ display: 'flex', gap: 2 }}>
          <FilterAutocomplete setInputData={setInputData} />
        </Box>
        {/* <FilterDaTePicker /> */}
        <Box flex={2}>
          <FilterSelectState setInputData={setInputData} />
        </Box>
        <Box flex={1}>
          <FilterPersonCount
            setInputData={setInputData}
            inputData={inputData}
          />
        </Box>
        <FilterButton inputData={inputData} />
      </Stack>
    </Container>
  );
};
