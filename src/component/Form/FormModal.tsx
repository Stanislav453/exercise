import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { CLOSE, ERROR, FIELDS } from '../../stringVariables';

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

export const FormModal = ({ setModal, modal }: any) => {
  const handleOpen = () => setModal(true);
  const handleClose = () => setModal(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={modal}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography
            id='modal-modal-title'
            variant='h6'
            component='h2'
            color='error'
          >
            {ERROR}
          </Typography>
          <Typography sx={{ mt: 2 }}>{FIELDS}</Typography>
          <Button
            onClick={() => setModal((state: boolean) => !state)}
            type='button'
            variant='contained'
            sx={{ mt: 2 }}
          >
            {CLOSE}
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
