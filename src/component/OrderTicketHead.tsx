import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Stack, Typography, Box } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import {
  ARRIVAL,
  DEPARTURE,
  DURATION,
  FREE_SEATS,
  PRICE,
} from '../stringVariables';

export const OrderTicketHead = () => {
  const order = useSelector((state) => state.orderTicketData.orderTicket);

  const { from, to, price, departure, arrival, duration } = order;

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
        <Typography variant='subtitle1' sx={{ textTransform:'capitalize' }}>{` ${DEPARTURE}: ${departure} `}</Typography>
        <Typography variant='subtitle1' sx={{ textTransform:'capitalize' }}>{` ${ARRIVAL}: ${arrival} `}</Typography>
        <Typography variant='subtitle1' sx={{ textTransform:'capitalize' }}>{` ${DURATION}: ${duration} `}</Typography>
      </Box>
      <Box>
        <Typography variant='subtitle1' sx={{ textTransform:'capitalize' }}>{` ${PRICE}: $${price} `}</Typography>
      </Box>
    </Stack>
  );
};
