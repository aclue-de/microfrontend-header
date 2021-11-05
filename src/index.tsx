import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/Header'
import {TestVertical} from '@aclue-de/microfrontend-test-vertical';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <TestVertical />
  </React.StrictMode>,
  document.getElementById('root')
);
