import React from 'react';
import { Nav } from '../components/nav';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='flex flex-col place-items-center min-h-screen py-2'>
      <Nav />
      <div
        id='wrapper'
        className='container mt-20 flex place-items-center flex-col mx-auto'
      >
        {children}
      </div>
    </main>
  );
}
