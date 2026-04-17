import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css'; // Wajib diimpor!
import App from './App.jsx'; // Tambahkan .jsx di sini

const theme = createTheme({
  /** Kamu bisa atur warna tema sekolah di sini nanti */
  primaryColor: 'blue',
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>
);