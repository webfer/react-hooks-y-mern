import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
import { FirstApp } from './FirstApp';

import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <FirstApp name="Fernando" title="Hola, soy Vegeta!" /> */}
    <CounterApp value={10} />
  </React.StrictMode>
);
