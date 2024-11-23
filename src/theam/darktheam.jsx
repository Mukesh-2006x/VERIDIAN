// DarkTheme.jsx
import { createTheme } from '@mui/material/styles';

const DarkTheme = createTheme({
  palette: {
    mode: 'dark', // Ensures Material-UI knows this is a dark theme
    primary: {
      main: '#bb86fc',
    },
    secondary: {
      main: '#03dac6',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#aaaaaa',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export default DarkTheme;
