import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fb7b00',
      light: '##f59134',
      dark: '#a05005',
      contrastText: '#fff',
    },
    secondary: {
      main: '##161616',
    },
    success: {
      main: '#2e7d32',
      contrastText: '#fff',
    },
    error: {
      main: '#e40d0d',
      contrastText: '#fff',
    },
    info: {
      main: '#29b6f6',
      dark: '#0288d1',
      contrastText: '#fff',
    },
    text: {
      primary: '##161616',
      secondary: '#fb7b00',
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
