import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/Header'
import {Start} from '@aclue-de/microfrontend-startpage'
import { ThemeProvider } from '@material-ui/core';
import { theme } from './theme/theme';
// import './index.css'; // Alternativ zum SCSS zeigen
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Header />      
      <div style={{display: 'block', height: '65px', width: '100%'}}/>
      <div className="vertical">
        <Start />
      </div>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
