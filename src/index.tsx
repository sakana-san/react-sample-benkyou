import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import {Layout} from './Layout';
import {Practice} from './components/Practice';
import { Radio } from './components/Radio';


const router = createBrowserRouter([
  { path: "/", 
    element: <Layout /> ,
    children: [
      {index: true, element: <App />},
      {path: "Practice", element: <Practice /> }
    ]
  }
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