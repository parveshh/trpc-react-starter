import { Card } from './components/card';
import { Header } from './components/header';
import { Main } from './components/main';
import { Cdk } from './icons/cdk';
import { ReactIcon } from './icons/react';
import { TRPCIcon } from './icons/trpc';
import './index.css';
import { Layout } from './layout/layout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { SignInPage } from './pages/signin.tsx';
import { SignUp } from './pages/signup.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { useState } from 'react';
import { trpc } from './server/trpc.ts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/sign-in',
    element: <SignInPage />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '*',
    element: <div>404</div>,
  },
]);

function App() {
  return (
    <div className='App'>
      <Layout>
        <Header>
          <h1 className='text-4xl mb-10 text-cyan-600 text-center'>
            tRPC + React + CDK + AWS starter template <br />
            <span className='text-xl text-gray-500'>
              with TypeScript, TailwindCSS, and Jest
            </span>
          </h1>
        </Header>
        <Main>
          <div className='flex flex-wrap gap-10 mt-20 place-content-center '>
            <Card
              icon={<TRPCIcon />}
              borderClass='border-green-600'
              title='tRPC'
            >
              <p className='text-sm mt-3'>
                <a className='text-blue-600' href='https://trpc.io'>
                  tRPC
                </a>{' '}
                is a TypeScript-first framework for building fully-typed backend
                APIs with safety and ease of use in mind.
              </p>
            </Card>
            <Card
              icon={<ReactIcon />}
              title='React'
              borderClass='border-purple-500'
            >
              <p className='text-sm mt-3'>
                <a className='text-blue-600' href='https://react.dev'>
                  React
                </a>{' '}
                is the library for web and native user interfaces. Build user
                interfaces out of individual pieces called components written in
                JavaScript.
              </p>
            </Card>
            <Card icon={<Cdk />} title='CDK'>
              <p className='text-sm mt-3'>
                <a className='text-blue-600' href='https://aws.amazon.com/cdk/'>
                  AWS CDK
                </a>{' '}
                is a infrastructure as code framework that allows you to define
                your complex infrastructure in many different programming
                languages.
              </p>
            </Card>
          </div>
        </Main>
      </Layout>
    </div>
  );
}

export function Root() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:3000/trpc',
          // You can pass any HTTP headers you wish here
        }),
      ],
    })
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default Root;
