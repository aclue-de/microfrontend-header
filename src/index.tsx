import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/Header'
import {Start} from '@aclue-de/microfrontend-startpage'
import { ThemeProvider } from '@material-ui/core';
import { theme } from './theme/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Header />      
      <div style={{display: 'block', height: '65px', width: '100%'}}/>
      <Start />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
