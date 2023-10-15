import { Typography } from '@mui/material';
import { YOUR_ORDERS } from '../../stringVariables';


export const ConfiHeader = () => {
  return (
    <Typography
      variant='h2'
      sx={{ textTransform: 'capitalize', textAlign: 'center', py: 3 }}
    >
      {YOUR_ORDERS}
    </Typography>
  );
};
