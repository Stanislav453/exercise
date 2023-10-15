import { Container, Box, Typography, Button } from '@mui/material';
import { END_MESSAGE, HOME } from '../stringVariables';
import { Link } from 'react-router-dom';

export const Message = () => {
  return (
    <Container
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyItems: 'center',
          gap: 2,
          p: 5,
          boxShadow: '0 0 3px #000',
        }}
      >
        <Typography
          variant='h4'
          sx={{ textTransform: 'capitalize', fontWeight: 900 }}
        >
          {END_MESSAGE}
        </Typography>
        <Button
          variant='contained'
          sx={{ a: { color: '#fff', textDecoration: 'none' } }}
        >
          <Link to={'/'}>{HOME}</Link>
        </Button>
      </Box>
    </Container>
  );
};
