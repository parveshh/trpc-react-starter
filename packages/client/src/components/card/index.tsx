import React from 'react';
interface CardProps {
  children: React.ReactNode;
  title: string;
  icon: React.ReactNode;
  borderClass?: string;
}

export function Card({
  children,
  title,
  icon,
  borderClass = 'border-cyan-600',
}: CardProps) {
  return (
    <div
      className={`bg-white shadow-lg border-t-4 ${borderClass} flex flex-col rounded-lg overflow-hidden max-w-md p-10 w-[400px]`}
    >
      <h2
        role='heading'
        id='title'
        className='text-cyan-600 font-light text-xl'
      >
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
