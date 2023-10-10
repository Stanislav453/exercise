import { Container, Stack, Box, Typography, Button } from '@mui/material';
import { OrderTicketHead } from '../component/OrderTicketHead';
import { OrderSeats } from '../component/OrderSeats/OrderSeats';
import { HOME, MARK_YOUR_SEATS, NO_SEATS } from '../stringVariables';
import { SummaryOfSeats } from '../component/OrderSeats/SummaryOfSeats';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { orderTicketType } from '../type';
import { Link } from 'react-router-dom';

export const OrderTicket = () => {
  const order = useSelector(
    (state: orderTicketType) => state.orderTicketData.orderTicket
  );

  const freeSeats = useSelector(
    (state) => state.orderTicketData.orderTicket.seats
  );


  const isFreeSeats = freeSeats.some( item => item.available  )

  console.log(isFreeSeats)

  if (order) {
    return (
      <Container maxWidth='md'>
        <OrderTicketHead />
        {isFreeSeats ? (
          <Stack
            direction='row'
          >
            <Box>
              <Typography
                variant='h4'
                sx={{ textAlign: 'center', textTransform: 'capitalize' }}
              >
                {MARK_YOUR_SEATS}
              </Typography>
              <OrderSeats />
            </Box>
            <Box flex={1}>
              <SummaryOfSeats />
            </Box>
          </Stack>
        ) : (
          <Container>
            <Stack alignItems='center' mt={5} >
              <Typography variant='h5' color='error' >{NO_SEATS}</Typography>
              <Link to='/'>
                <Button type='button' variant='contained'>
                  {HOME}
                </Button>
              </Link>
            </Stack>
          </Container>
        )}
      </Container>
    );
  } else {
    return <div>nejde to</div>;
  }
};
