import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/Header'
import {Start} from '@aclue-de/microfrontend-startpage'
import { ThemeProvider, Theme, StyledEngineProvider } from '@mui/material';
import { theme } from './theme/theme';
import './index.css';

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Header />      
        <div style={{display: 'block', height: '65px', width: '100%'}}/>
        <div className="vertical">
          <Start />
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
