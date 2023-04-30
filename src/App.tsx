import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import PageProvider from './context/PageContext';

const App: React.FC = () => (
  <BrowserRouter>
    <PageProvider>
      <>
        <Routes />
      </>
    </PageProvider>
  </BrowserRouter>
);

export default App;
