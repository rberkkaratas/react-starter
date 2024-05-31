import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./utils/i18n"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback="loading">
    <App />
  </Suspense>
);

