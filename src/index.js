import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import slides from './mocks/slides';
import './css/style.scss';

ReactDOM.render(
  <App images={slides}/>,
  document.getElementById('root')
);
