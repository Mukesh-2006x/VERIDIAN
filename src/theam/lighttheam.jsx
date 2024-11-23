// LightTheme.jsx
import { createTheme } from '@mui/material/styles';

const LightTheme = createTheme({
  palette: {
    mode: 'light', 
    primary: {
      main: '#009065',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
    text: {
      primary: '##091B29',
      secondary: '#51585E',
    },
  },
  typography: {
    fontFamily: 'IBM Plex'
  },
});

export default LightTheme;
