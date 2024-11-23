import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import LightTheme from '../src/theam/lighttheam';
import DarkTheme from '../src/theam/darktheam';
import Button from '@mui/material/Button';
import Routing from './router/router';

function App() {

  return (
  
    <Routing/>

  );
}

export default App
