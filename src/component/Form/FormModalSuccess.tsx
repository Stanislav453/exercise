import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {
  CLOSE,
  NEXT,
  SUCCESS,
  SUCCESS_MODAL_MESSAGE,
} from '../../stringVariables';
import { Link } from 'react-router-dom';

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

export const FormModalSuccess = ({ setSuccess, success }: any) => {
  const handleOpen = () => setSuccess(true);
  const handleClose = () => setSuccess(false);

  return (
    <div>
      <Button onClick={handleOpen}></Button>
      <Modal
        open={success}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography
            id='modal-modal-title'
            variant='h4'
            component='h2'
            color='#0da32d'
            textTransform='capitalize'
          >
            {SUCCESS}
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            {SUCCESS_MODAL_MESSAGE}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
              mt: 2,
            }}
          >
            <Button
              onClick={() => setSuccess((state: boolean) => !state)}
              type='button'
              variant='contained'
            >
              {CLOSE}
            </Button>
            <Button
              variant='contained'
              color='success'
              sx={{ a: { color: '#fff', textDecoration: 'none' } }}
            >
              <Link to='/confirmation'>{NEXT}</Link>
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
