
import { OrderTicketHead } from '../component/OrderTicketHead';
import { Container, Stack } from '@mui/material';
import { ConfiHeader } from '../component/Confirmation/ConfiHeader';
import { ConfiBody } from '../component/Confirmation/ConfiBody';

export const Confirmation = () => {


  return (
    <Container
      maxWidth='md'
      sx={{ my: 5, py: 4, boxShadow: ' 0px 0px 3px #000' }}
    >
      <Stack>
        <ConfiHeader />
        <OrderTicketHead />
        <ConfiBody />
      </Stack>
    </Container>
  );
}
