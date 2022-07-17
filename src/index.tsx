import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import GlobalContextProvider from './contexts/Global.context';
import { queryClient } from './config/reactQuery.config'
import './config/axios.config'
import App from './App';
import './styles/index.scss'



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <GlobalContextProvider>
          <App />
        </GlobalContextProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

