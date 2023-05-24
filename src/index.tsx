import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {Practice} from './components/Practice';
import App from './App';

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/Practice", element: <Practice /> }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);