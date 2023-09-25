import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ChakraProvider} from "@chakra-ui/react"
import { Provider } from 'react-redux';
import myStore from './ReduxStore/myStore';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <ChakraProvider>
    <Provider store={myStore}>
    <App />
    </Provider>
  </ChakraProvider> 
);

