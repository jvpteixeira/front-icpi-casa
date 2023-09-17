import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './layout';
import Routes from './routes';
import { LoadingContext } from './contexts/LoadingContext';
import { ScreenClassProvider } from 'react-grid-system';
import './assets/fonts/Sedan SC.ttf';
import './assets/index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Layout>
      <LoadingContext>
        <ScreenClassProvider>
          <Routes />
        </ScreenClassProvider>
      </LoadingContext>
    </Layout>
  </React.StrictMode>
);
