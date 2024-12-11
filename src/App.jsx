import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{
      colorScheme: 'dark',
      primaryColor: 'blue'
    }}>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}
