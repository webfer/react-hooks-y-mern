import React from 'react';
import { createRoot } from 'react-dom/client';
// import PrimeraApp from './components/PrimeraApp';
import CounterApp from './components/CounterApp';

import './index.css';

const divRoot = document.getElementById('app');
const root = createRoot(divRoot);

root.render(<CounterApp value={10} />);
