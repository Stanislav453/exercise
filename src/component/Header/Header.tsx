import img from './img/header.webp';
import { Filter } from '../Filter/Filter';
import { Container } from '@mui/material';
export const Header = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        display: 'flex',
        alignItems: 'flex-end',
        width: '100%',
        height: 600,
        opacity: 1,
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <Filter />
    </Container>
  );
};
