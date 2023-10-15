import { useSelector, useDispatch } from 'react-redux';
import Container from '@mui/material/Container';
import { flightDataType } from '../../type';
import { Button, Stack, Typography } from '@mui/material';
import {
  ARRIVAL,
  DEPARTURE,
  DURATION,
  FILTER_ERROR,
  SEATS,
  SELECTS,
  our_flights,
} from '../../stringVariables';
import img from './img/fly-img.webp';
import Box from '@mui/material/Box';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { addOrderTicketData } from '../../Redux/slices/orderSlice';
import { Link } from 'react-router-dom';
export const Ticket = () => {
  const dispatch = useDispatch();

  const filteredData = useSelector(
    (state: flightDataType) => state.flyTicketFilter.filterData
  );

  return (
    <Container maxWidth={'md'} sx={{ pt: 5 }}>
      <Typography
        variant='h3'
        sx={{ fontWeight: 900, textTransform: 'uppercase' }}
        gutterBottom
      >
        {our_flights}
      </Typography>
      {filteredData.length === 0 ? (
        <Typography variant='h4' color={'error'}>
          {FILTER_ERROR}
        </Typography>
      ) : (
        filteredData.map((item: flightDataType, key: number) => {
          const { from, to, departure, arrival, duration, price, seats } = item;
          return (
            <Box component='div' key={key} sx={{ pt: 2 }}>
              <Stack
                direction={'row'}
                spacing={2}
                alignItems='center'
                justifyContent={'space-between'}
                sx={{ boxShadow: '1px 1px 3px #000' }}
              >
                <Box
                  sx={{
                    width: '150px',
                    height: '150px',
                    backgroundImage: `url(${img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></Box>
                <Typography variant='h4'>
                  {from} <ArrowRightAltIcon /> {to}
                </Typography>
                <Box>
                  <Typography
                    variant='subtitle1'
                    sx={{ textTransform: 'capitalize' }}
                  >
                    {`${DEPARTURE}: ${departure}`}
                  </Typography>
                  <Typography
                    variant='subtitle1'
                    sx={{ textTransform: 'capitalize' }}
                  >{`${ARRIVAL}: ${arrival}`}</Typography>
                  <Typography
                    variant='subtitle1'
                    sx={{ textTransform: 'capitalize' }}
                  >{`${DURATION}: ${duration}`}</Typography>
                </Box>
                <Box pr={1}>
                  <Typography
                    variant='h6'
                    sx={{ textAlign: 'center' }}
                  >{`$${price}`}</Typography>
                  <Link to='/order-ticket'>
                    <Button
                      type='button'
                      onClick={() =>
                        dispatch(
                          addOrderTicketData({
                            from,
                            to,
                            departure,
                            arrival,
                            duration,
                            price,
                            seats,
                          })
                        )
                      }
                      variant='contained'
                      color='success'
                    >
                      {SELECTS}
                    </Button>
                  </Link>
                  <Typography variant='h6' sx={{ textTransform:'capitalize' }}>
                   {` ${SEATS} ${seats.length} /
                    ${seats.filter((item) => item.available).length}`}
                  </Typography>
                </Box>
              </Stack>
            </Box>
          );
        })
      )}
    </Container>
  );
};
