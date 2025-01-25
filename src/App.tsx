import { Suspense } from 'react';

import { GoogleOAuthProvider } from '@react-oauth/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';

import { GOOGLE_CLIENT_ID } from './constants/api/oauth';
import ScrollToTop from './layout/ScrollToTop';
import Router from './routes';

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <BrowserRouter>
          <Suspense>
            <ScrollToTop />
            <Router />
          </Suspense>
        </BrowserRouter>
        {/* The rest of your application */}
        <ReactQueryDevtools initialIsOpen={false} />
      </GoogleOAuthProvider>
    </QueryClientProvider>
  );
};

export default App;
