import React from 'react';

export function Card({
  children,
  title,
  icon,
}: {
  children: React.ReactNode;
  title: string;
  icon: React.ReactNode;
}) {
  return (
    <div
      className='bg-white shadow-lg
        border-t-4 border-cyan-600 flex flex-col
    rounded-lg overflow-hidden max-w-md p-10 w-[400px]'
    >
      <h2 role='heading' id='title' className='text-cyan-600 font'>
        {title}
      </h2>
      <div role='contentinfo' id='body' className='p-0 text-gray-700'>
        {children}
      </div>
      <div role='img' id='icon' className='w-fit justify-end pt-5 ml-auto'>
        {icon}
      </div>
    </div>
  );
}
