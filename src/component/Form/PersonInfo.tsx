import { Stack, Typography, Box } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { PassengerInfo } from './PassengerInfo';

export const PersonInfo = () => {
  const seatsPosition = useSelector(
    (state) => state.orderTicketData.selectedSeats
  );

  const seatsLength: number = seatsPosition.length;

  return (
    <Stack>
      <Typography
        variant='h4'
        sx={{
          textTransform: 'uppercase',
          fontWeight: 900,
          textAlign: 'center',
        }}
      >
        person info
      </Typography>
      <Typography
        variant='body1'
        sx={{
          textAlign: 'center',
        }}
      >
        person travel: {seatsLength}
      </Typography>
      <Box>{seatsPosition.map( (item,index) => {
       return <PassengerInfo item={item} index={index} />;
      } )}</Box>
    </Stack>
  );
};
