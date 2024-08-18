import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
// 重置样式
import 'normalize.css'
import './assets/css/index.less'

import App from '@/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render((
  <HashRouter>
    <App />
  </HashRouter>
));