import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Stack, Typography, Box } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export const OrderTicketHead = () => {
  const order = useSelector((state) => state.orderTicketData.orderTicket);

  const { from, to, price, departure, arrival, duration, seats } = order;

  return (
    <Stack
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{
        padding: '2rem 1rem',
        backgroundColor: 'info.main',
        color: 'info.contrastText',
      }}
    >
      <Typography variant='h4'>
        {from} <ArrowRightAltIcon /> {to}
      </Typography>
      <Box>
        <Typography variant='subtitle1'> departure: {departure} </Typography>
        <Typography variant='subtitle1'> arrival: {arrival} </Typography>
        <Typography variant='subtitle1'> duration: {duration} </Typography>
      </Box>
      <Box>
        <Typography variant='subtitle1'> price: ${price} </Typography>
        <Typography variant='subtitle1'>
          Vacant seats: {seats.length}
        </Typography>
      </Box>
    </Stack>
  );
};
