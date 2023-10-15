
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { CLOSE, ERROR, MODAL_ORDER_ERROR_MESSAGE } from '../../stringVariables';

type modalSeatsType = {
  isSeatSelected: boolean;
  setIsSelected: () => void
};

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const ModalSeats = ({ setIsSelected, isSeatSelected }: modalSeatsType) => {
    
  const handleClose = () => setIsSelected((state:boolean) => !state);

  return (
      <Modal
        open={ isSeatSelected }
        onClose={handleClose}
      >
        <Box sx={style}>
          <Typography  variant='h4' color='error' sx={{ textTransform:'uppercase' }}>
            {ERROR}
          </Typography>
          <Typography  sx={{ mt: 2 }}>
            {MODAL_ORDER_ERROR_MESSAGE}
          </Typography>
          <Button onClick={ () => setIsSelected( (state: boolean) => !state ) } type='button' variant='contained' sx={{ mt:2 }} >{CLOSE}</Button>
        </Box>
      </Modal>
  )
};
