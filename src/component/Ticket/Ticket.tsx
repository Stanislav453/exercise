import { useSelector } from 'react-redux';
import Container from '@mui/material/Container';
import { flightDataType } from '../../type';
import { Button, Stack, Typography } from '@mui/material';
import { our_flights } from '../../stringVariables';
import img from './img/fly-img.webp';
import Box from '@mui/material/Box';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export const Ticket = () => {
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
        <Typography variant='h4' color={'error'} >No flights available</Typography>
      ) : (
        filteredData.map((item: flightDataType, key: number) => {
          const { from, to, departure, arrival, duration, price } = item;
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
                  <Typography variant='subtitle1'>
                    Departure: {departure}
                  </Typography>
                  <Typography variant='subtitle1'>{`Arival: ${arrival}`}</Typography>
                  <Typography variant='subtitle1'>{`Duration: ${duration}`}</Typography>
                </Box>
                <Box pr={1}>
                  <Typography
                    variant='h6'
                    sx={{ textAlign: 'center' }}
                  >{`$${price}`}</Typography>
                  <Button variant='contained' color='success'>
                    select
                  </Button>
                </Box>
              </Stack>
            </Box>
          );
        })
      )}
    </Container>
  );
};
