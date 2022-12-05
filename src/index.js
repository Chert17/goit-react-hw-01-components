import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { App } from 'components/App/App';
import './index.css';

const theme = {
  colors: {
    white: '#fff',
    accentColor: '#5ebafc',
    red: '#e5100c',
    green: '#0ba800',
    bgSectionColor: '#ddf7fa',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
