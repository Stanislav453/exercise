import React from 'react';
import { Stack, Button } from '@mui/material';
import {
  RESERVED_SEAT,
  VACANT_SEATS,
  YOUR_SELECT,
} from '../../stringVariables';

export const ExplainSeats = () => {
  return (
    <Stack direction='row' justifyContent='space-evenly' sx={{ py: 2 }}>
      <Button type='button' variant='contained' color='success'>
        {VACANT_SEATS}
      </Button>
      <Button type='button' variant='contained' color='error'>
        {YOUR_SELECT}
      </Button>
      <Button type='button' variant='contained' disabled={true}>
        {RESERVED_SEAT}
      </Button>
    </Stack>
  );
};
