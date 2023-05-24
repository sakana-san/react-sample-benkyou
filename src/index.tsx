import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {Hello} from './components/Hello';
import App from './App';

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/Hello", element: <Hello /> }
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