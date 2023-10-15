import { Typography, Box, Button } from '@mui/material';
import {
  BACK,
  FIRST_NAME,
  FLY_INFORMATION,
  PHONE_NUMBER,
  SEAT,
  SECOND_NAME,
  SUBMIT,
  TOTAL_PRICE,
} from '../../stringVariables';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Link } from 'react-router-dom';

export const ConfiBody = () => {
  const seatsPosition = useSelector(
    (state) => state.orderTicketData.selectedSeats
  );

  const confiData = useSelector((state) => state.confirmationData.confiData);

  const totalPrice = useSelector((state) => state.orderTicketData.seatsPrice);

  const seatsCount = useSelector((state) => state.orderTicketData.seatsCount);

  return (
    <Box>
      <Typography
        variant='h4'
        sx={{ textTransform: 'capitalize', textAlign: 'center', py: 3 }}
      >
        {FLY_INFORMATION}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 5 }}>
        {confiData.info.map((item: any, key: number) => {
          const { firstName, secondName, number } = item;
          return (
            <Box
              sx={{
                p: 2,
                boxShadow: '0px 0px 3px #000',
                borderRadius: '.5rem',
              }}
            >
              <Typography
                variant='h5'
                sx={{ textTransform: 'capitalize', fontWeight: 900 }}
              >{`${SEAT}: ${seatsPosition[key]}`}</Typography>
              <Typography
                variant='body1'
                sx={{ textTransform: 'capitalize' }}
              >{`${FIRST_NAME}: ${firstName}`}</Typography>
              <Typography
                variant='body1'
                sx={{ textTransform: 'capitalize' }}
              >{`${SECOND_NAME}: ${secondName}`}</Typography>
              <Typography
                variant='body1'
                sx={{ textTransform: 'capitalize' }}
              >{`${PHONE_NUMBER}: ${number}`}</Typography>
            </Box>
          );
        })}
      </Box>

      <Box mt={5}>
        <Typography
          variant='h4'
          sx={{ textAlign: 'center', textTransform: 'capitalize' }}
        >{` ${TOTAL_PRICE} ${totalPrice}$ `}</Typography>
        <Typography
          variant='h4'
          sx={{ textAlign: 'center', textTransform: 'capitalize' }}
        >{` ${SEAT}: ${seatsCount} `}</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
          mt: 2,
        }}
      >
        <Button
          type='button'
          variant='contained'
          color='success'
          sx={{ a: { color: '#fff', textDecoration: 'none' } }}
        >
          <Link to='/success'>{SUBMIT}</Link>
        </Button>
        <Button
          type='button'
          variant='contained'
          color='error'
          sx={{ a: { color: '#fff', textDecoration: 'none' } }}
        >
          <Link to='/person-info-ticket'> {BACK}</Link>
        </Button>
      </Box>
    </Box>
  );
};
