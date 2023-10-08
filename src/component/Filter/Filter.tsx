import Stack from '@mui/material/Stack';
import { Container } from '@mui/material';
import { FilterAutocomplete } from './FilterAutocomplete';
import { FilterDaTePicker } from './FilterDaTePicker';
import { FilterButton } from './FilterButton';
import { FilterPersonCount } from './filterPersonCount';

export const Filter = () => {
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
        <FilterAutocomplete />
        <FilterDaTePicker />
        <FilterPersonCount />
        <FilterButton />
      </Stack>
    </Container>
  );
};
