import { Suspense } from 'react';

import { BrowserRouter } from 'react-router-dom';

import Router from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <Suspense>
        <Router />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
